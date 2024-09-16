---
author: FjellOverflow
pubDatetime: 2024-09-14T16:03:00.000Z
title: Updating Docker containers
tags:
  - tutorial
  - docker
description: Different strategies to keep your dockerized applications up-to-date
---

In the realm of self-hosting, it is very common to run containerized applications rather than bare-metal installs. But how can we keep applications on their latest versions? Automated or manually? This post will highlight some different strategies!

## Table of contents

## A little background

Before considering details, let us establish the technical situation we are in. There is a (Linux-based) server on which we are hosting a few applications, for instance [nginx](https://nginx.org/en/). To keep things nice and separate, nginx is being run with the help of [Docker](https://www.docker.com/), so in its own isolated container on the host machine. Furthermore, so we don't have to remember and retype the commands of starting/stopping or recreating this _nginx_ container, we created a `docker-compose.yaml` file, containing the entire configuration, so we can always remove and recreate the container without losing data by using `docker compose up/down`.

```yaml
services:
  nginx:
    image: lscr.io/linuxserver/nginx
    container_name: nginx
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /path/to/nginx/config:/config
    ports:
      - 80:80
      - 443:443
```

As you can see, we didn't specify any image tag, and Docker will pull `nginx:latest` for us. So far, so good. But what if, at a later date, we recreate the container? What if we pull a more recent _nginx_ image before? What if we **need** _nginx_ to work reliably with no changes? This is why versioning is important.

## `Latest` tag vs. fixed tag

The first lesson here is to always specify a tag. Even when using the default `latest` tag, adding the tag to the `docker-compose.yaml` doesn't hurt and clearly indicates what our _intended_ version of _nginx_ is within the setup. But do we actually _want_ the `latest` tag?

The `latest` tag generally refers to the most recent release of the software. For instance, `latest` might refer to `nginx:1.26.2`, but when `nginx:1.27.0` gets released, `latest` will instead point to that. Setting the `latest` tag in our `docker-compose.yaml` essentially says that it should run the newest version of the image. The clear advantage of running the newest releases is that we get all the new features, fixes, and security patches. On the downside, we lose a lot of stability. Other than reading release notes, following GitHub issues, and testing out our application after pulling a fresh image, things might break at any time if a new _nginx_ version contains bugs or breaking changes.

The alternative is specifying an explicit version number as a tag, for instance, `nginx:1.26.2`. We can pull images and recreate containers however we want and will still always end up with the same _nginx_ version that we expect (provided the image builder does not arbitrarily re-tag images, which he shouldn't). That gives us more peace of mind, ensuring our application will always be stable, but on the other hand, of course, it requires us to manually change the tag in the `docker-compose.yaml` and update the container when we need or want to upgrade, for instance, when a new _nginx_ version patches a security issue.

## What is an _update_ anyway?

Having a bunch of `docker-compose.yaml`s lying around and some containers running, what does it even mean to _update_ a container or image? In order to have an _nginx_ container running, our host computer has at some point pulled the specific _nginx_ image from Docker Hub (or some container registry), and that image exists locally on our host. Whenever we start a container that specifies that specific image (+ tag), exactly this local image will be used. That means to get a _newer_ image, we must do these things:

- if we specified the `latest` tag in the compose file, pull the newest image with `docker pull nginx:latest`
- if we specified a specific tag like `nginx:1.26.2`, we must edit that tag in the compose file and change it to a newer version, for instance, to `nginx:1.27.0`
- either way, we must stop **and** remove the container (`docker compose down`) and recreate it (`docker compose up`)

The reasoning behind this is that we must force Docker to pull and use the new image we want to update to, either by replacing our local, older `latest` image with a more recent one by pulling it ourselves or by setting a new tag, an image that we do not even have locally yet and that Docker will pull automatically for us when we recreate the container with the adjusted compose file. If we fail to do these things, Docker will happily reuse the same old image we already have locally at every container (re-)creation, and we will never receive updated images.

## Automated updating

Setting a fixed tag in the compose file, e.g. `nginx:1.26.2`, as described before, has a lot of advantages. It is a valid approach, but it also entails that manual intervention is always required. First of all, we need to manually set a new version in the compose file, and furthermore, no tool will detect that our containers are outdated, as we are "switching" images, and hence we also have to manually recreate containers with a "new" image.

However, if we are willing to take a few more risks and specify `latest` as a tag in our compose files, there are some useful tools to do most of the work for us!

### Some automation with _Dockcheck_

One of these tools is [Dockcheck](https://github.com/mag37/dockcheck), a nifty CLI that checks for and applies updates automatically! We run the command, pick the containers, and _Dockcheck_ does the rest!

```sh
$ dockcheck.sh
> Containers with updates available:
> 1) nginx
>
> Choose what containers to update.
> Enter number(s) separated by comma, [a] for all - [q] to quit:
```

Advantages of that approach are that no images are being pulled when checking for updates, so we don't accidentally switch to a newer `latest` image when we recreate a container for some reason. Also, while the tool does the actual updating work for us, we get a nice prompt beforehand, at which we can pause, look into release notes, or check containers. We can basically, on a per-case basis, decide if we do or if we do not want to update a container right now. Ultimately, we are in control of when and what to update, but _Dockcheck_ does the work and also offers plenty of nice configuration options, for instance notifications, pruning, and more.

## Full automation with _Watchtower_

If we are even more trusting or simply do not care if things break at any time, we could of course update containers automatically. [Watchtower](https://github.com/containrrr/watchtower) is run as a Docker container itself, configured with ENV variables, and will in a specified interval check for newer images, pull them, and recreate containers with the newer image.

```text
Found new nginx:latest image (b8f9cf140c7f)
Stopping /nginx (452c33752a46) with SIGTERM
Creating /nginx
Removing image 65bc5cb26860
```

This is a notification you might get from _Watchtower_ in the middle of the night (when notifications are enabled), and your _nginx_ container will be up-to-date once you wake up in the morning. Running _Watchtower_ and having `latest` tags on our containers will keep our containers always on the freshest releases, with no manual action needed ever!

## Conclusion

Specifying the right image tags for our Docker containers is important; it ensures containers run on exactly the version we intended and deliver reproducible behavior. When using the `latest` tag, we need to tread with care to not accidentally switch versions, but we can utilize _Dockcheck_, _Watchtower_, or any of the other countless tools that provide a nice interface to update containers.

Ultimately, we need to balance out stability and the need to keep software up to date; while it might hurt to never update, waiting after a new release rarely hurts, be it days or weeks. What definitely does not hurt is actively checking release notes for breaking changes and taking a quick glance at open issues before updating!

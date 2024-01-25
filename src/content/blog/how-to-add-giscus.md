---
author: FjellOverflow
pubDatetime: 2024-01-25T18:06:00.000Z
modDatetime:
title: How to add Giscus comments to AstroPaper
ogImage: /src/assets/posts/how-to-add-giscus.jpg
tags:
  - tutorial
description: User comments on a static blog hosted on GitHub Pages with Giscus
---

_If you want to skip the walk-through and see how I implemented in on this blog, check out [the commit](https://github.com/FjellOverflow/blog/commit/8293f39873610341ce39d3d8fb483cbbb48c5f84)_.

Hosting a thin static blog on a platform like [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) has numerous advantages, but it diminishes client-side interactivity. Fortunately, [Giscus](https://giscus.app/) exists and offers a way to embed user comments on static sites.

## Table of contents

## How _Giscus_ works

[Giscus uses the GitHub API](https://github.com/giscus/giscus?tab=readme-ov-file#how-it-works) to read and store comments made by _GitHub_ users in the `Discussions` associated with a repository.

Embed the _Giscus_ client-side script bundle on your site, configure it with the correct repository URL, and users can view and write comments (when logged into _GitHub_)

The approach is basically serverless, as the comments are stored on _GitHub_ and dynamically loaded from there on client side.

## Setting up _Giscus_

_Giscus_ can be set up easily on [giscus.app](https://giscus.app/), but I will outline the process shortly still.

### Prequisites

Prequisites to get _Giscus_ working are

- the repository is [public](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#making-a-repository-public)
- the [Giscus app](https://github.com/apps/giscus) is installed
- the [Discussions](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/enabling-or-disabling-github-discussions-for-a-repository) feature is turned on for your repository

If any of these conditions cannot be fulfilled for any reason, unfortunately, _Giscus_ cannot be integrated.

### Configuring _Giscus_

Next, configuring _Giscus_ is necessary. In most cases, the preselected defaults are suitable, and you should only modify them if you have a specific reason and know what you are doing. Don't worry too much about making the wrong choices; you can always adjust the configuration later on.

However you need to

- select the right language for the UI
- specify the _GitHub_ repository you want to connect,typically the repository containing a static site hosted on _GitHub Pages_
- create and set an `Announcement` type discussion on _GitHub_ if you want to ensure nobody can create random comments directly on _GitHub_
- define the color scheme

After configuring the settings, _Giscus_ provides you with a generated `<script>` tag, which you will need in the next steps.

## Client-side code

You should now have a script tag that looks like this:

```html
<script
  src="https://giscus.app/client.js"
  data-repo="[ENTER REPO HERE]"
  data-repo-id="[ENTER REPO ID HERE]"
  data-category="[ENTER CATEGORY NAME HERE]"
  data-category-id="[ENTER CATEGORY ID HERE]"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="en"
  crossorigin="anonymous"
  async
></script>
```

Simply add that to the source code of your site. For instance, if you're using [AstroPaper](https://github.com/satnaing/astro-paper) (the theme of this blog) and want to add comments to your posts, navigate to `src/layouts/PostDetails.astro` and paste it into the desired location where you want the comments to appear.

```diff
      <ShareLinks />
    </div>

+    <script src="https://giscus.app/client.js"
+        data-repo="[ENTER REPO HERE]"
+        data-repo-id="[ENTER REPO ID HERE]"
+        data-category="[ENTER CATEGORY NAME HERE]"
+        data-category-id="[ENTER CATEGORY ID HERE]"
+        data-mapping="pathname"
+        data-strict="0"
+        data-reactions-enabled="1"
+        data-emit-metadata="0"
+        data-input-position="bottom"
+        data-theme="preferred_color_scheme"
+        data-lang="en"
+        crossorigin="anonymous"
+        async>
+    </script>

  </main>
  <Footer />
</Layout>
```

And it's done! You have successfully integrated comments on the blog!

## Dynamic light/dark theme

The embedded script tag in the layout is quite static, with the _Giscus_ configuration, including `theme`, hardcoded into the layout. Given that this blog features a light/dark theme toggle, I aimed for the comments to seamlessly transition between light and dark themes along with the rest of the site. To achieve this, a more sophisticated approach to embedding _Giscus_ is required.

Firstly, we are going to install the [React component](https://www.npmjs.com/package/@giscus/react) for _Giscus_:

```bash
npm i @giscus/react
```

Then we create a new React component under `src/components`:

```tsx
import Giscus, { type Theme } from "@giscus/react";
import { GISCUS } from "@config";
import { useState } from "react";

interface Props {
  lightTheme?: Theme;
  darkTheme?: Theme;
}

export default function Comments({
  lightTheme = "light",
  darkTheme = "dark",
}: Props) {
  const currentTheme = localStorage.getItem("theme");
  const browserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(currentTheme || browserTheme);

  // manual theme toggle
  document.querySelector("#theme-btn")?.addEventListener("click", () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  });

  // browser preference
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches: isDark }) => {
      isDark ? setTheme("dark") : setTheme("light");
    });

  return (
    <div className="mt-8">
      <Giscus theme={theme === "light" ? lightTheme : darkTheme} {...GISCUS} />
    </div>
  );
}
```

This _React_ component not only encompasses the _Giscus_ comments functionality but also introduces additional props, namely `lightTheme` and `darkTheme`. Leveraging two event listeners, the _Giscus_ comments will align with the site's theme, dynamically switching between dark and light themes whenever the site or browser theme is changed.

To define this `GISCUS` config, the optimal location is in `src/config.ts`:

```ts
export const GISCUS: GiscusProps = {
  repo: "[ENTER REPO HERE]",
  repoId: "[ENTER REPO ID HERE]",
  category: "[ENTER CATEGORY NAME HERE]",
  categoryId: "[ENTER CATEGORY ID HERE]",
  mapping: "pathname",
  reactionsEnabled: "0",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "en",
  loading: "lazy",
};
```

Note that specifying a `theme` here will override the `lightTheme` and `darkTheme` props, resulting in a static theme setting, similar to the previous approach of embedding _Giscus_ with the `<script>` tag.

To complete the process, add the new Comments component to `src/layouts/PostDetails.astro`!

```diff
      <ShareLinks />
    </div>

+    <Comments client:only />

  </main>
  <Footer />
</Layout>
```

Feel free to test it out on this site: toggling the theme in the header bar should also switch the comments theme accordingly. If you found this tutorial helpful, don't hesitate to leave a comment!

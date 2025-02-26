import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://fjelloverflow.dev',
  title: 'FjellOverflow',
  description: 'Personal website and Blog.',
  author: 'FjellOverflow',
  projectsPerPage: 10,
  navbarItems: [
    { label: 'Blog', href: '/posts/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Tags', href: '/tags/' },
    { label: 'About', href: '/about/' },
    {
      label: 'Other',
      children: [
        { label: 'Photos', icon: 'tabler--photo', href: '/photos/' },
        { label: 'Bookshelf', icon: 'tabler--book-2', href: '/bookshelf/' }
      ]
    }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/FjellOverflow',
      label: 'FjellOverflow on Github'
    },
    {
      icon: 'tabler--camera',
      href: 'https://pixelfed.social/FjellOverflow',
      label: 'FjellOverflow on Pixelfed'
    },
    {
      icon: 'tabler--books',
      href: 'https://bookwyrm.social/user/FjellOverflow',
      label: 'FjellOverflow on Bookwyrm'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],
  colorScheme: 'scheme-nord',
  tagIcons: {
    ansible: 'tabler--brand-ansible',
    astro: 'tabler--brand-astro',
    devops: 'tabler--device-imac-cog',
    docker: 'tabler--brand-docker',
    encryption: 'tabler--lock',
    linux: 'tabler--device-imac',
    privacy: 'tabler--spy',
    tailwindcss: 'tabler--brand-tailwind',
    typescript: 'tabler--brand-typescript',
    vue: 'tabler--brand-vue'
  },
  shikiThemes: {
    light: 'github-light',
    dark: 'nord'
  }
})

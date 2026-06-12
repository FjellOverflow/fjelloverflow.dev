import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://fjelloverflow.dev',
  title: 'FjellOverflow',
  description: 'Personal website and Blog.',
  author: 'FjellOverflow',
  postsPerPage: 3,
  projectsPerPage: 10,
  projectsView: 'grid',
  navbarItems: [
    { label: 'Blog', href: '/posts/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Tags', href: '/tags/' },
    {
      label: 'More',
      children: [
        { label: 'Tools & skills', href: '/tools/' },
        { label: 'Photos', href: '/photos/' }
      ]
    },
    { label: 'About', href: '/about/' }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/FjellOverflow',
      label: 'FjellOverflow on Github'
    },
    {
      // @ts-expect-error simple-icons usually not meant for UI
      icon: 'simple-icons--exercism',
      href: 'https://exercism.org/profiles/FjellOverflow',
      label: 'FjellOverflow on Exercism'
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
    python: 'tabler--brand-python',
    react: 'tabler--brand-react',
    sql: 'tabler--database',
    tailwindcss: 'tabler--brand-tailwind',
    typescript: 'tabler--brand-typescript',
    vue: 'tabler--brand-vue'
  },
  expressiveCodeThemes: ['github-light', 'nord']
})

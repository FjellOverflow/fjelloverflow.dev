import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import sectionizePlugin from 'remark-sectionize'
import codeHeadersPlugin from './src/plugins/codeHeadersPlugin'
import readingTimePlugin from './src/plugins/readingTimePlugin'
import config from './src/theme.config'

export default defineConfig({
  site: config.site,
  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      themes: config.shikiThemes,
      wrap: true,
      transformers: [codeHeadersPlugin]
    },
    remarkPlugins: [readingTimePlugin, sectionizePlugin]
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bookwyrm-social.sfo3.digitaloceanspaces.com'
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
})

import { path, fs, getDirname } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin  } from '@vuepress/plugin-google-analytics'
// import shikiPlugin from '@vuepress/plugin-shiki'
import theme from './theme'

const __dirname = getDirname(import.meta.url)

const robotsContent = `
# Algolia-Crawler-Verif: A1A1F2E6307A7403

User-agent: *
Allow: /
Sitemap: https://pengzhanbo.cn/sitemap.xml
`

export default defineUserConfig({
  lang: 'zh-CN',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '鹏展博',
      description: '热爱生活',
    },
  },
  dest: 'docs',
  public: path.resolve(__dirname, '../public'),
  temp: path.resolve(__dirname, '.temp'),
  cache: path.resolve(__dirname, '.cache'),
  head: [
    ['link', { rel: 'icon', href: '/images/blogger-fav.png' }],
    ['meta', { 'name': 'keywords', content: '鹏展博,前端，健身' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'id=edg' }],
    ['meta', { name: 'msvalidate.01', content: 'F93FF013B8AA2553779A91388C14A0F7'}],
    ['meta', { name: 'google-site-verification', content: 'X5YSaTDn-pKqQBUKD_05_dQcxVItzEq7Rlbg2ZEU7AM' }],
  ],
  shouldPrefetch: false,
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-TMXNCJR2K7'
    }),
    // process.env.NODE_ENV === 'production' && shikiPlugin({ theme: 'one-dark-pro' }),
  ].filter(Boolean) as any,
  onGenerated: (app) => {
    const filepath = app.dir.dest('robots.txt')
    setTimeout(() => {
      fs.writeFileSync(filepath, robotsContent, 'utf-8')
    }, 500)
  },
  theme: theme,
})

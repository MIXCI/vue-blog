import { plumeTheme } from 'vuepress-theme-plume'
import notes from './notes/index.js'
import navbar from './navbar.js'

export default plumeTheme({
  logo: '/images/blogger-fav.png',
  hostname: 'https://君莫愁.cool/',
  repo: 'https://github.com/pengzhanbo/pengzhanbo.cn',
  docsDir: 'src',
  contributors: false,

  navbar,
  notes,

  avatar: {
    name: '君莫愁',
    url: '/images/blogger-fav.png',
    description: '世间的美好总是不期而遇',
  },
  social: [
    { icon: 'github', link: 'https://github.com/mixci' }
    // { icon: 'discord', link: 'https://discord.gg/ZPV9tQyRuh' },
  ],

  editLinkText: '在 GitHub 上编辑此页',
  footer: { copyright: 'Copyright © 2022-present 君莫愁' },

  plugins: {
    externalLinkIcon: false,
    baiduTongji: { key: '49ebcb8d1abfcde890ef6f320a101db7' },
    shiki: { twoslash: true },
    markdownEnhance: { demo: true },

    docsearch: {
      appId: 'KRJOJ00KBL',
      apiKey: '3f3b13613235873fbcbc9d304de18126',
      indexName: 'pengzhanbo',
    },

    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'mixci/giscus',
      repoId: 'R_kgDOLg0MFg',
      category: 'Show and tell',
      categoryId: 'DIC_kwDOLg0MFs4Cd_vn',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
      darkTheme: 'dark_protanopia',
      lightTheme: 'light_protanopia',
    },
  },
})

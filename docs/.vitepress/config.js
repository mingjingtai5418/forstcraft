export default {
  title: 'FrostCraft服务器',
  description: 'Minecraft 1.21 全版本生存服',
  server: {
    allowedHosts: ['f.jingyucloud.cn']
  },
  themeConfig: {
    logo: '/images/p.jpg',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: 'API 示例',
        link: '/api-examples/'
      },
      {
        text: 'Markdown 示例',
        link: '/markdown-examples/'
      }
    ],
    sidebar: {
      '/': [
        {
          text: '首页',
          link: '/'
        },
        {
          text: '指南',
          link: '/guide/'
        },
        {
          text: 'API 示例',
          link: '/api-examples/'
        },
        {
          text: 'Markdown 示例',
          link: '/markdown-examples/'
        }
      ]
    }
  }
}
export default {
  title: 'FrostCraft服务器',
  description: 'Minecraft 1.21 全版本生存服',
  ignoreDeadLinks: true,
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
        text: '成员介绍',
        link: '/members/'
      }
    ],
    sidebar: false
  }
}
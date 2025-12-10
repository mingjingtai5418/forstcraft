---
layout: home

hero:
  name: "FrostCraft服务器"
  text: "MC 1.21 全版本生存服"
  tagline: 服务器地址:orwoe.cn
  actions:
    - theme: brand
      text: 服务器介绍
      link: /guide/
    - theme: alt
      text: 玩家指南
      link: /player-guide/
    - theme: brand
      text: 加入我们？
      link: /join/
#wocaonima
features:
  - title: "🎮 全版本支持"
    details: 支持 Minecraft 1.21 所有版本，Java版和基岩版均可加入
  - title: "🛡️ 稳定运营"
    details: 24/7 不间断运行，专业服务器硬件保障
  - title: "👥 友好社区"
    details: 活跃的玩家社区，定期举办活动和比赛
  - title: "🔧 原创插件"
    details: 独家开发的功能插件，提升游戏体验
  - title: "💰 完全免费"
    details: 无需任何付费，纯公益服务器
  - title: "📱 便捷管理"
    details: 支持网页管理面板，随时随地管理游戏
---
---

# 🎥 服务器宣传视频

<div style="text-align: center; margin: 2rem 0;">
<video 
  src="/videos/p.mp4" 
  controls 
  width="90%"
  style="border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.2);"
  poster="/images/p.jpg"
>
  您的浏览器不支持视频标签，请使用现代浏览器访问。
</video>
<p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
  点击播放按钮观看服务器特色介绍
</p>
</div>

# 🎮 快速加入

1. **Java版玩家**：在多人游戏中添加服务器 `orwoe.cn`
2. **基岩版玩家**：服务器地址 `orwoe.cn`，端口 `19132`
3. **首次加入**：请先阅读[玩家指南](/player-guide/)

# 📞 联系我们

- **QQ群**: 123456789
- **Discord**: [点击加入](https://discord.gg/example)
- **官方网站**: https://frostcraft.example.com


<script setup>
import Basic from './components/Basic.vue'

import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/team/craftbukkit.webp',
    name: '蔡徐坤',
    title: '练习时长两年半',
    links: [
      { icon: 'bilibili', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/team/fungus.webp',
    name: '刘华强',
    title: '瓜类鉴别家',
    links: [
      { icon: 'github', link: 'https://github.com/Fungus-00' },
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/team/ap2000_.webp',
    name: '穿山甲',
    title: '大日本双料高级特工',
    links: [
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/team/techxun.webp',
    name: '马保国',
    title: '70多岁武学大师',
    links: [
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/team/anom.webp',
    name: '老八',
    title: '美食家',
    links: [
      { icon: 'github', link: 'https://github.com/Anom71' },
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
  {
    avatar: '/team/QM_Binyu.webp',
    name: '北极熊',
    title: '秦始皇坐骑',
    links: [
      { icon: 'qq', link: '/docs/#致谢' }
    ]
  },
]
</script>

<Basic />

<h2 style="text-align:center; line-height:2.0; font-size:250%;"><b>运 维 团 队</b></h2>

<VPTeamMembers size="medium" :members="members" />
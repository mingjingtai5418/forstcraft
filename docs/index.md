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
      text: 卫星地图
      link: http://map.orwoe.cn/
    - theme: brand
      text: 检控面板
      link: http://plan.orwoe.cn/
---



## 🎥 服务器宣传视频

<div style="text-align: center; margin: 2rem 0;">
<video 
  src="/videos/p.mp4" 
  controls 
  width="90%"
  style="border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
  poster="/images/p.jpg"
>
  您的浏览器不支持视频标签，请使用现代浏览器访问。
</video>
<p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
  点击播放按钮观看服务器特色介绍
</p>
</div>

## 🎮 快速加入

### 加入我们

1. **Java版玩家**：在多人游戏中添加服务器 `orwoe.cn`
2. **基岩版玩家**：服务器地址 `orwoe.cn`，端口 `19132`
3. **首次加入**：请先阅读[玩家指南](/guide/)

## 🖥️ 服务器配置

### 专业硬件配置

- **处理器**：Genuine 英特尔 0000十四核
- **主板**：英特尔 13th Raptor Lake PCH B760-M D5
- **内存**：32GB DDR5 5600MHz（16GB + 16GB)
- **显卡**：NVIDIA RTX PRO 2000 Blackwell（16GB/英伟达）
- **显示器**：[HYN2160]（21.7英寸）
- **磁盘**：WDC WUH721414ALE6L4(14000GB) + SAMSUNG MZVL2512HCJQ-00BH1(512GB)
- **声卡**：NVIDIA High Definition Audio + High Definition Audio 设备
- **网卡**：Realtek Gaming 2.5GbE Family Controller + Intel(R) Wi-Fi 6E AX211 160MHz

## ✨ 服务器特色

### 独特功能

<div class="feature-cards-container">
  <div class="feature-card">
    <h3>🔄 全版本支持</h3>
    <p>支持 Minecraft 1.21 所有版本，Java版和基岩版均可加入</p>
  </div>

  <div class="feature-card">
    <h3>🛡️ 稳定运营</h3>
    <p>24/7 不间断运行，专业服务器硬件保障，确保游戏体验流畅稳定</p>
  </div>

  <div class="feature-card">
    <h3>👥 友好社区</h3>
    <p>活跃的玩家社区，定期举办活动和比赛，结交志同道合的朋友</p>
  </div>

  <div class="feature-card">
    <h3>🔧 原创插件</h3>
    <p>独家开发的功能插件，提升游戏体验，带来更多乐趣</p>
  </div>

  <div class="feature-card">
    <h3>💰 完全免费</h3>
    <p>无需任何付费，纯公益服务器，所有玩家平等享受游戏乐趣</p>
  </div>

  <div class="feature-card">
    <h3>📱 便捷管理</h3>
    <p>支持网页管理面板，随时随地管理游戏，轻松便捷</p>
  </div>

  <div class="feature-card">
    <h3>🌍 大型地图</h3>
    <p>精心设计的大型地图，探索无限可能，建造属于你的世界</p>
  </div>

  <div class="feature-card">
    <h3>🔒 安全保障</h3>
    <p>多重安全措施，防止作弊和恶意行为，营造公平游戏环境</p>
  </div>

  <div class="feature-card">
    <h3>🚀 高性能</h3>
    <p>专业硬件配置，确保服务器高性能运行，无卡顿延迟</p>
  </div>

  <div class="feature-card">
    <h3>🎯 精准定位</h3>
    <p>卫星地图功能，实时查看服务器地图，精准定位位置</p>
  </div>
</div>

## 📞 联系我们

### 联系方式

- **QQ群**: 123456789
- **Discord**: [点击加入](https://discord.gg/example)
- **官方网站**: [https://frostcraft.example.com](https://frostcraft.example.com)

## 🔧 技术支持

### 技术服务

- **24/7 支持**：全天候技术支持，随时解决您遇到的问题
- **定期更新**：定期更新服务器版本和插件，保持最佳状态
- **性能监控**：实时监控服务器性能，确保稳定运行

<script setup>
import Basic from './components/Basic.vue'
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/team/MY.jpg',
    name: 'MGyue_',
    title: '练习时长两年半',
  },
  
  {
    avatar: '/team/LU.jpg',
    name: 'lullaby_ouo',
    title: '瓜类鉴别家',
  },
  
  {
    avatar: '/team/YUS.jpg',
    name: 'Y_u_S',
    title: '大日本双料高级特工',
  },
  
  {
    avatar: '/team/b_29eeeQC.jpg',
    name: 'QQCCQQLLQQ',
    title: '70多岁武学大师',
  },
  
  {
    avatar: '/team/FU.jpg',
    name: 'fusces_',
    title: '美食家',
  },
  
  {
    avatar: '/team/xiaobai.jpg',
    name: 'xiaobai23345',
    title: '秦始皇坐骑',
  },
]
</script>

## 👥 运维团队

### 👑 专业团队

<VPTeamMembers size="medium" :members="members" />

<Basic />
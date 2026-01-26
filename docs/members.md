# 成员介绍

<style>
.germanic-container {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border: 3px solid #000;
  border-radius: 0;
  padding: 3rem;
  margin: 2rem 0;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.germanic-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #000 33.33%, #DD0000 33.33%, #DD0000 66.66%, #FFCC00 66.66%);
  z-index: 1;
}

.germanic-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFCC00 33.33%, #DD0000 33.33%, #DD0000 66.66%, #000 66.66%);
  z-index: 1;
}

.germanic-title {
  font-family: 'Arial Black', 'Helvetica Neue', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #fff;
  text-align: center;
  margin-bottom: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  border-bottom: 3px solid #FFCC00;
  padding-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.germanic-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 6px;
  background: #DD0000;
}

.germanic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  position: relative;
  z-index: 2;
}

.germanic-card {
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  border: 2px solid #333;
  border-radius: 0;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.germanic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #DD0000;
  transition: all 0.3s ease;
}

.germanic-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 3px;
  background: #FFCC00;
  transition: all 0.3s ease;
}

.germanic-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: #FFCC00;
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.8);
}

.germanic-card:hover::before {
  height: 5px;
  background: #FFCC00;
}

.germanic-card:hover::after {
  height: 5px;
  background: #DD0000;
}

.germanic-avatar-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.germanic-avatar {
  width: 120px;
  height: 120px;
  border: 4px solid #000;
  border-radius: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  background: #1a1a1a;
  transition: all 0.3s ease;
  filter: grayscale(20%);
}

.germanic-card:hover .germanic-avatar {
  transform: scale(1.1);
  filter: grayscale(0%);
  border-color: #FFCC00;
}

.germanic-avatar-wrapper::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border: 2px solid #333;
  transition: all 0.3s ease;
}

.germanic-card:hover .germanic-avatar-wrapper::before {
  border-color: #DD0000;
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
}

.germanic-name {
  font-family: 'Arial Black', 'Helvetica Neue', sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  margin-bottom: 0.8rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
}

.germanic-card:hover .germanic-name {
  color: #FFCC00;
  text-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
}

.germanic-title-text {
  font-size: 1rem;
  color: #FFCC00;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
  transition: all 0.3s ease;
}

.germanic-card:hover .germanic-title-text {
  color: #DD0000;
}

.germanic-section-title {
  font-family: 'Arial Black', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #fff;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  border-left: 5px solid #DD0000;
  padding-left: 1rem;
  position: relative;
  z-index: 2;
}

.germanic-section-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 1rem;
  width: 40px;
  height: 3px;
  background: #FFCC00;
}

.germanic-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  position: relative;
  z-index: 2;
}

.germanic-info-card {
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  border: 2px solid #333;
  border-radius: 0;
  padding: 2rem;
  position: relative;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
  overflow: hidden;
}

.germanic-info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #FFCC00;
  transition: all 0.3s ease;
}

.germanic-info-card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  background: #DD0000;
  transition: all 0.3s ease;
}

.germanic-info-card:hover {
  transform: translateX(8px);
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.8);
  border-color: #FFCC00;
}

.germanic-info-card:hover::before {
  width: 6px;
  background: #DD0000;
}

.germanic-info-card:hover::after {
  width: 6px;
  background: #FFCC00;
}

.germanic-info-card h3 {
  font-family: 'Arial Black', 'Helvetica Neue', sans-serif;
  font-size: 1.3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 1;
}

.germanic-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 1;
}

.germanic-list li {
  padding: 0.8rem 0;
  color: #ccc;
  font-size: 1rem;
  border-bottom: 1px solid #333;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 1.5rem;
}

.germanic-list li:last-child {
  border-bottom: none;
}

.germanic-list li::before {
  content: '▸';
  color: #DD0000;
  margin-right: 0.8rem;
  font-weight: bold;
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
}

.germanic-list li:hover {
  color: #FFCC00;
  padding-left: 2rem;
  background: rgba(255, 204, 0, 0.05);
}

.germanic-list li:hover::before {
  color: #FFCC00;
  transform: translateX(5px);
}

.germanic-intro {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 2;
}

@media (max-width: 768px) {
  .germanic-container {
    padding: 2rem 1.5rem;
  }
  
  .germanic-title {
    font-size: 1.8rem;
    letter-spacing: 0.1em;
  }
  
  .germanic-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .germanic-info-grid {
    grid-template-columns: 1fr;
  }
  
  .germanic-avatar {
    width: 100px;
    height: 100px;
  }
  
  .germanic-name {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .germanic-title {
    font-size: 1.5rem;
  }
  
  .germanic-section-title {
    font-size: 1.5rem;
  }
}
</style>

## 管理团队

<div class="germanic-container">
<h2 class="germanic-title">管理团队</h2>
<p class="germanic-intro" style="text-align: center; font-size: 0.9rem; margin-bottom: 1rem; color: #888;">（排名不分先后）</p>

<div class="germanic-grid">
<div class="germanic-card">
<div class="germanic-avatar-wrapper">
<img src="/team/MY.jpg" alt="MGyue_" class="germanic-avatar">
</div>
<h3 class="germanic-name">MGyue_</h3>
<p class="germanic-title-text">练习时长两年半</p>
</div>

<div class="germanic-card">
<div class="germanic-avatar-wrapper">
<img src="/team/LU.jpg" alt="lullaby_ouo" class="germanic-avatar">
</div>
<h3 class="germanic-name">lullaby_ouo</h3>
<p class="germanic-title-text">瓜类鉴别家</p>
</div>

<div class="germanic-card">
<div class="germanic-avatar-wrapper">
<img src="/team/YUS.jpg" alt="Y_u_S" class="germanic-avatar">
</div>
<h3 class="germanic-name">Y_u_S</h3>
<p class="germanic-title-text">大日本双料高级特工</p>
</div>

<div class="germanic-card">
<div class="germanic-avatar-wrapper">
<img src="/team/b_29eeeQC.jpg" alt="QQCCQQLLQQ" class="germanic-avatar">
</div>
<h3 class="germanic-name">QQCCQQLLQQ</h3>
<p class="germanic-title-text">70多岁武学大师</p>
</div>

<div class="germanic-card">
<div class="germanic-avatar-wrapper">
<img src="/team/FU.jpg" alt="fusces_" class="germanic-avatar">
</div>
<h3 class="germanic-name">fusces_</h3>
<p class="germanic-title-text">美食家</p>
</div>

<div class="germanic-card">
<div class="germanic-avatar-wrapper">
<img src="/team/xiaobai.jpg" alt="xiaobai23345" class="germanic-avatar">
</div>
<h3 class="germanic-name">xiaobai23345</h3>
<p class="germanic-title-text">秦始皇坐骑</p>
</div>
</div>

## 运维团队

<div class="germanic-container">
<h2 class="germanic-title">运维团队</h2>
<p class="germanic-intro" style="text-align: center; font-size: 0.9rem; margin-bottom: 1rem; color: #888;">（排名不分先后）</p>

<div class="germanic-grid">
<div class="germanic-card">
<div class="germanic-avatar-wrapper">
<img src="/team/FU.jpg" alt="fusces_" class="germanic-avatar">
</div>
<h3 class="germanic-name">fusces_</h3>
<p class="germanic-title-text">美食家</p>
</div>

<div class="germanic-card">
<div class="germanic-avatar-wrapper">
<img src="/team/xiaobai.jpg" alt="xiaobai23345" class="germanic-avatar">
</div>
<h3 class="germanic-name">xiaobai23345</h3>
<p class="germanic-title-text">秦始皇坐骑</p>
</div>

<div class="germanic-card" style="cursor: pointer;" onclick="window.location.href='/mingjingtai/'">
<div class="germanic-avatar-wrapper">
<img src="/team/b_29eeeQC.jpg" alt="明镜台" class="germanic-avatar">
</div>
<h3 class="germanic-name">明镜台</h3>
<p class="germanic-title-text">70多岁武学大师</p>
</div>
</div>
</div>
</div>

## 加入我们

<div class="germanic-container">
<h2 class="germanic-section-title">加入我们</h2>
<p class="germanic-intro">我们欢迎有热情、有技能的玩家加入我们的团队！</p>

<div class="germanic-info-grid">
<div class="germanic-info-card">
<h3>招募职位</h3>
<ul class="germanic-list">
<li>插件开发者</li>
<li>服务器管理员</li>
<li>社区管理员</li>
<li>活动策划</li>
<li>地图设计师</li>
</ul>
</div>

<div class="germanic-info-card">
<h3>加入要求</h3>
<ul class="germanic-list">
<li>热爱 Minecraft</li>
<li>有团队合作精神</li>
<li>有相关技能或经验</li>
<li>能够稳定在线</li>
<li>遵守服务器规则</li>
</ul>
</div>

<div class="germanic-info-card">
<h3>联系方式</h3>
<ul class="germanic-list">
<li>QQ群: 123456789</li>
<li>Discord: 点击加入</li>
<li>游戏内联系管理员</li>
</ul>
</div>
</div>
</div>
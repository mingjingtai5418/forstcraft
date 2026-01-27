# 成员介绍

<style>
.gov-container {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #dc3545;
  border-radius: 0;
  padding: 3rem;
  margin: 2rem 0;
  position: relative;
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.1);
  overflow: hidden;
}

.gov-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: #dc3545;
  z-index: 1;
}

.gov-container::after {
  content: '★';
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: #ffc107;
  z-index: 1;
}

.gov-title {
  font-family: 'SimSun', 'STSong', serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #dc3545;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid #ffc107;
  padding-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.gov-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 6px;
  background: #dc3545;
}

.gov-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  position: relative;
  z-index: 2;
}

.gov-card {
  background: #ffffff;
  border: 2px solid #dee2e6;
  border-radius: 0;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.gov-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #dc3545;
  transition: all 0.3s ease;
}

.gov-card:hover {
  transform: translateY(-8px);
  border-color: #dc3545;
  box-shadow: 0 4px 16px rgba(220, 53, 69, 0.15);
}

.gov-card:hover::before {
  height: 6px;
  background: #ffc107;
}

.gov-avatar-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.gov-avatar {
  width: 120px;
  height: 120px;
  border: 3px solid #dc3545;
  border-radius: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #f8f9fa;
  transition: all 0.3s ease;
}

.gov-card:hover .gov-avatar {
  transform: scale(1.05);
  border-color: #ffc107;
}

.gov-avatar-wrapper::before {
  content: '★';
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 1.2rem;
  color: #ffc107;
  background: #ffffff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #dc3545;
  transition: all 0.3s ease;
}

.gov-card:hover .gov-avatar-wrapper::before {
  color: #dc3545;
  border-color: #ffc107;
  transform: scale(1.1);
}

.gov-name {
  font-family: 'SimSun', 'STSong', serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 0.8rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.gov-card:hover .gov-name {
  color: #dc3545;
}

.gov-title-text {
  font-size: 1rem;
  color: #6c757d;
  font-weight: 600;
  margin: 0;
  transition: all 0.3s ease;
}

.gov-card:hover .gov-title-text {
  color: #ffc107;
}

.gov-section-title {
  font-family: 'SimSun', 'STSong', serif;
  font-size: 2rem;
  font-weight: bold;
  color: #dc3545;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
  border-left: 5px solid #ffc107;
  padding-left: 1rem;
  position: relative;
  z-index: 2;
}

.gov-section-title::after {
  content: '★';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #ffc107;
}

.gov-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  position: relative;
  z-index: 2;
}

.gov-info-card {
  background: #ffffff;
  border: 2px solid #dee2e6;
  border-radius: 0;
  padding: 2rem;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
}

.gov-info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #dc3545;
  transition: all 0.3s ease;
}

.gov-info-card:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 16px rgba(220, 53, 69, 0.1);
  border-color: #dc3545;
}

.gov-info-card:hover::before {
  width: 6px;
  background: #ffc107;
}

.gov-info-card h3 {
  font-family: 'SimSun', 'STSong', serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
}

.gov-info-card h3::before {
  content: '★';
  color: #ffc107;
  margin-right: 0.5rem;
  font-size: 1rem;
}

.gov-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 1;
}

.gov-list li {
  padding: 0.8rem 0;
  color: #6c757d;
  font-size: 1rem;
  border-bottom: 1px solid #dee2e6;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 1.5rem;
}

.gov-list li:last-child {
  border-bottom: none;
}

.gov-list li::before {
  content: '★';
  color: #dc3545;
  margin-right: 0.8rem;
  font-weight: bold;
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
  font-size: 0.8rem;
}

.gov-list li:hover {
  color: #dc3545;
  padding-left: 2rem;
  background: rgba(220, 53, 69, 0.05);
}

.gov-list li:hover::before {
  color: #ffc107;
  transform: translateX(5px);
}

.gov-intro {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 2rem;
  font-weight: 500;
  position: relative;
  z-index: 2;
}

.rank-note {
  font-size: 1rem;
  color: #6c757d;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 500;
  position: relative;
  z-index: 2;
}

.rank-note::before, .rank-note::after {
  content: '★';
  color: #ffc107;
  margin: 0 0.5rem;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .gov-container {
    padding: 2rem 1.5rem;
  }
  
  .gov-title {
    font-size: 1.8rem;
  }
  
  .gov-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .gov-info-grid {
    grid-template-columns: 1fr;
  }
  
  .gov-avatar {
    width: 100px;
    height: 100px;
  }
  
  .gov-name {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .gov-title {
    font-size: 1.5rem;
  }
  
  .gov-section-title {
    font-size: 1.5rem;
  }
}
</style>

## 管理团队

<div class="gov-container">
<h2 class="gov-title">管理团队</h2>
<p class="rank-note">排名不分先后</p>

<div class="gov-grid">
<div class="gov-card">
<div class="gov-avatar-wrapper">
<img src="/team/MY.jpg" alt="MGyue_" class="gov-avatar">
</div>
<h3 class="gov-name">MGyue_</h3>
</div>

<div class="gov-card">
<div class="gov-avatar-wrapper">
<img src="/team/LU.jpg" alt="lullaby_ouo" class="gov-avatar">
</div>
<h3 class="gov-name">lullaby_ouo</h3>
<p class="gov-title-text">瓜类鉴别家</p>
</div>

<div class="gov-card">
<div class="gov-avatar-wrapper">
<img src="/team/YUS.jpg" alt="Y_u_S" class="gov-avatar">
</div>
<h3 class="gov-name">Y_u_S</h3>
<p class="gov-title-text">大日本双料高级特工</p>
</div>

<div class="gov-card">
<div class="gov-avatar-wrapper">
<img src="/team/b_29eeeQC.jpg" alt="QQCCQQLLQQ" class="gov-avatar">
</div>
<h3 class="gov-name">QQCCQQLLQQ</h3>
<p class="gov-title-text">70多岁武学大师</p>
</div>

<div class="gov-card">
<div class="gov-avatar-wrapper">
<img src="/team/FU.jpg" alt="fusces_" class="gov-avatar">
</div>
<h3 class="gov-name">fusces_</h3>
<p class="gov-title-text">美食家</p>
</div>

<div class="gov-card">
<div class="gov-avatar-wrapper">
<img src="/team/xiaobai.jpg" alt="xiaobai23345" class="gov-avatar">
</div>
<h3 class="gov-name">xiaobai23345</h3>
<p class="gov-title-text">秦始皇坐骑</p>
</div>
</div>

## 管理团队

<div class="gov-container">
<h2 class="gov-title">管理团队</h2>
<p class="rank-note">排名不分先后</p>

<div class="gov-grid">
<div class="gov-card">
<div class="gov-avatar-wrapper">
<img src="/team/FU.jpg" alt="fusces_" class="gov-avatar">
</div>
<h3 class="gov-name">fusces_</h3>
<p class="gov-title-text">美食家</p>
</div>

<div class="gov-card">
<div class="gov-avatar-wrapper">
<img src="/team/xiaobai.jpg" alt="xiaobai23345" class="gov-avatar">
</div>
<h3 class="gov-name">xiaobai23345</h3>
<p class="gov-title-text">秦始皇坐骑</p>
</div>

<div class="gov-card" style="cursor: pointer;" onclick="window.location.href='/mingjingtai/'">
<div class="gov-avatar-wrapper">
<img src="/team/b_29eeeQC.jpg" alt="明镜台" class="gov-avatar">
</div>
<h3 class="gov-name">明镜台</h3>
<p class="gov-title-text">70多岁武学大师</p>
</div>
</div>
</div>
</div>

## 加入我们

<div class="gov-container">
<h2 class="gov-section-title">加入我们</h2>
<p class="gov-intro">我们欢迎有热情、有技能的玩家加入我们的团队！</p>

<div class="gov-info-grid">
<div class="gov-info-card">
<h3>招募职位</h3>
<ul class="gov-list">
<li>插件开发者</li>
<li>服务器管理员</li>
<li>社区管理员</li>
<li>活动策划</li>
<li>地图设计师</li>
</ul>
</div>

<div class="gov-info-card">
<h3>加入要求</h3>
<ul class="gov-list">
<li>热爱 Minecraft</li>
<li>有团队合作精神</li>
<li>有相关技能或经验</li>
<li>能够稳定在线</li>
<li>遵守服务器规则</li>
</ul>
</div>

<div class="gov-info-card">
<h3>联系方式</h3>
<ul class="gov-list">
<li>QQ群: 123456789</li>
<li>Discord: 点击加入</li>
<li>游戏内联系管理员</li>
</ul>
</div>
</div>
</div>
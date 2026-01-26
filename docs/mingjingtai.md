# 明镜台

<style>
.gov-container {
  background: #ffffff;
  border: 3px solid #c41e3a;
  border-radius: 0;
  padding: 3rem;
  margin: 2rem 0;
  position: relative;
  box-shadow: 0 4px 16px rgba(196, 30, 58, 0.2);
}

.gov-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: #c41e3a;
}

.gov-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.gov-emblem {
  font-size: 5rem;
  color: #ffd700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
}

.gov-name {
  font-family: 'SimSun', 'Songti SC', serif;
  font-size: 3rem;
  font-weight: bold;
  color: #c41e3a;
  margin-bottom: 0.5rem;
  letter-spacing: 0.3em;
}

.gov-title {
  font-size: 1.3rem;
  color: #ffd700;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.1em;
}

.gov-section {
  background: #ffffff;
  border: 2px solid #c41e3a;
  border-radius: 0;
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.gov-section h3 {
  font-family: 'SimSun', 'Songti SC', serif;
  font-size: 1.6rem;
  font-weight: bold;
  color: #c41e3a;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #ffd700;
  position: relative;
}

.gov-section h3::before {
  content: attr(data-number);
  position: absolute;
  right: 0;
  top: 0;
  background: #c41e3a;
  color: #ffffff;
  padding: 0.3rem 0.8rem;
  font-size: 1rem;
  font-weight: bold;
}

.gov-section p {
  color: #333;
  line-height: 2;
  font-size: 1.05rem;
  text-align: justify;
  text-indent: 2em;
}

.gov-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.gov-skill-card {
  background: #ffffff;
  border: 2px solid #ffd700;
  border-radius: 0;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.gov-skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(196, 30, 58, 0.2);
}

.gov-skill-card strong {
  display: block;
  color: #c41e3a;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  font-weight: bold;
}

.gov-skill-card span {
  color: #666;
  font-size: 1rem;
}

.gov-footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 3px solid #ffd700;
  position: relative;
}

.gov-back-btn {
  display: inline-block;
  background: #c41e3a;
  color: #ffffff;
  padding: 0.8rem 2rem;
  font-family: 'SimSun', 'Songti SC', serif;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid #c41e3a;
  transition: all 0.3s ease;
  letter-spacing: 0.1em;
}

.gov-back-btn:hover {
  background: #a31621;
  border-color: #a31621;
  transform: translateY(-2px);
}

.gov-avatar-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  background: #ffffff;
  padding: 2rem;
  border: 3px solid #ffd700;
}

.gov-avatar {
  width: 180px;
  height: 180px;
  border: 4px solid #c41e3a;
  box-shadow: 0 4px 12px rgba(196, 30, 58, 0.2);
}

.gov-avatar-info {
  flex: 1;
}

.gov-avatar-info h2 {
  font-family: 'SimSun', 'Songti SC', serif;
  font-size: 2.2rem;
  font-weight: bold;
  color: #c41e3a;
  margin-bottom: 0.5rem;
}

.gov-avatar-info p {
  color: #ffd700;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

@media (max-width: 768px) {
  .gov-container {
    padding: 2rem 1rem;
  }
  
  .gov-name {
    font-size: 2rem;
  }
  
  .gov-avatar-container {
    flex-direction: column;
    text-align: center;
  }
  
  .gov-avatar {
    width: 150px;
    height: 150px;
  }
  
  .gov-skills {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="gov-container">
  <div class="gov-header">
    <div class="gov-emblem">★</div>
    <h1 class="gov-name">明镜台</h1>
    <p class="gov-title">70多岁武学大师</p>
  </div>

  <div class="gov-avatar-container">
    <img src="/team/b_29eeeQC.jpg" alt="明镜台" class="gov-avatar">
    <div class="gov-avatar-info">
      <h2>明镜台</h2>
      <p>资深武学大师 · 服务器管理员</p>
    </div>
  </div>

  <div class="gov-section">
    <h3 data-number="一">个人简介</h3>
    <p>明镜台，一位资深的武学大师，拥有超过70年的武术修为。精通传统武学精髓，以严谨的治学态度传承武学文化。在FrostCraft服务器中，明镜台以其深厚的武学造诣和严谨的管理风格著称，是服务器的重要管理成员之一。</p>
  </div>

  <div class="gov-section">
    <h3 data-number="二">武学成就</h3>
    <p>明镜台在武学领域取得了卓越的成就，曾多次在国内外武术比赛中获奖。其创立的"明镜台武学体系"融合了传统与现代，深受广大武术爱好者的推崇。在服务器管理中，明镜台同样运用武学中的"平衡"与"和谐"理念，确保服务器的稳定运行。</p>
  </div>

  <div class="gov-section">
    <h3 data-number="三">管理理念</h3>
    <p>明镜台认为，服务器管理如同武学修炼，需要持之以恒、精益求精。他主张以德服人，以理服众，在处理服务器事务时始终保持公正、公平的态度。其管理风格严谨而不失人情味，深受玩家们的尊敬。</p>
  </div>

  <div class="gov-section">
    <h3 data-number="四">专业技能</h3>
    <div class="gov-skills">
      <div class="gov-skill-card">
        <strong>武学修为</strong>
        <span>70+年</span>
      </div>
      <div class="gov-skill-card">
        <strong>服务器管理</strong>
        <span>精通</span>
      </div>
      <div class="gov-skill-card">
        <strong>冲突调解</strong>
        <span>专家</span>
      </div>
      <div class="gov-skill-card">
        <strong>团队领导</strong>
        <span>资深</span>
      </div>
    </div>
  </div>

  <div class="gov-footer">
    <a href="/members/" class="gov-back-btn">返回成员介绍</a>
  </div>
</div>
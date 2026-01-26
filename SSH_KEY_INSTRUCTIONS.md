# SSH 私钥配置说明

## 私钥信息

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACDXBvBFkes2mIinicovMSNCUktM8icSXm5IDQp8a0F9RQAAAJgaUx4OGlMe
DgAAAAtzc2gtZWQyNTUxOQAAACDXBvBFkes2mIinicovMSNCUktM8icSXm5IDQp8a0F9RQ
AAAEBJfi+qgB7D0Zq9ZN9MR6w0yqoOI8uvEmEXG55yzHuUGNcG8EWR6zaYiKeJyi8xI0JS
S0zyJxJebkgNCnxrQX1FAAAAFXJvb3RAUmFpbll1bi1kOXFHTHlkaQ==
-----END OPENSSH PRIVATE KEY-----
```

## 配置步骤

### 1. 添加 SSH_PRIVATE_KEY 到 GitHub Secrets

1. 登录 GitHub，进入您的仓库
2. 点击 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**
4. 在 **Name** 字段输入：`SSH_PRIVATE_KEY`
5. 在 **Secret** 字段粘贴上面的私钥内容
6. 点击 **Add secret** 保存

### 2. 添加其他必要的 Secrets

除了 SSH 私钥外，还需要添加以下 Secrets：

| Secret 名称 | 说明 | 示例值 |
|------------|------|--------|
| `REMOTE_HOST` | 服务器 IP 或域名 | `154.12.39.199` |
| `REMOTE_USER` | 服务器用户名 | `root` |
| `REMOTE_PORT` | SSH 端口（可选） | `22` |
| `REMOTE_TARGET` | 服务器目标目录 | `/www/wwwroot/154.12.39.199_1256` |

### 3. 验证配置

1. 推送一个测试提交到 main 分支
2. 进入 GitHub 仓库的 **Actions** 标签页
3. 查看 "Deploy to Server" 工作流的运行状态
4. 点击运行记录查看详细日志，确认部署成功

## 安全注意事项

- **不要**将私钥提交到代码仓库中
- **不要**在公开场合分享私钥
- 定期更新 SSH 密钥对
- 限制服务器用户的权限，仅授予必要的访问权限

## 故障排除

如果部署失败，请检查：

1. SSH 私钥是否正确添加到 Secrets 中
2. 服务器是否允许 SSH 连接
3. 服务器用户名和 IP 地址是否正确
4. 服务器目标目录是否存在且有写入权限
5. 查看 GitHub Actions 日志中的详细错误信息

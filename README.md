# 轻记 TODO · 网页站点

[轻记 · TODO](https://439436269-ctrl.github.io/qingji-todo-web/) 的 GitHub Pages 站点仓库：落地页、网页版应用本体与配套页面，**push 即发布**，无需构建。

## 页面结构

| 文件 | 说明 |
|---|---|
| `index.html` | 落地页：双 CTA（打开网页版 / 下载 Android 版）+ iPhone 安装指引 + 功能与隐私说明 |
| `app.html` | 应用本体（网页版），与主仓 `index.html` 同步的待办应用，可加到主屏离线使用 |
| `oauth.html` | 飞书授权回跳中转页：把 `code` 以 `qingji-todo://oauth` 交回原生 App |
| `privacy.html` | 隐私说明（BYO 飞书凭据条款） |
| `qingji-todo.apk` | Android 版安装包直链（约 49KB，无广告） |
| `qingji-todo.ipa` | iOS 版打包产物（Release 构建，含开发签名与描述文件） |
| `manifest.plist` | iOS OTA 安装清单（`itms-services` 链接指向它） |
| `sw.js` | Service Worker：离线缓存（落地页 + 应用本体，版本化失效） |
| `apple-touch-icon.png` | 主屏图标 |

## 访问

- 站点首页：https://439436269-ctrl.github.io/qingji-todo-web/
- 网页版应用：https://439436269-ctrl.github.io/qingji-todo-web/app.html

## 发布

GitHub Pages 从 `main` 分支根目录发布，改动直接 push 即生效。

网页版应用与主仓 [439436269-ctrl/qingji-todo](https://github.com/439436269-ctrl/qingji-todo) 保持同步——主仓根目录 `index.html` 为源头，同步到本仓 `app.html`。版本号各端统一（当前 v1.1.0）。

## iPhone 安装

见落地页「安装 iOS 版」按钮（`itms-services` 直装打包产物）：

1. **Safari 点「安装 iOS 版」** → 回桌面等待安装完成
2. **信任开发者**（首次必做）：设置 → 通用 → VPN与设备管理 → 你的 Apple ID 开发者条目 → 信任
3. 免费证书 **7 天有效**，过期重新点安装链接即可

备选路径：

- **免电脑**：Safari 打开 `app.html` → 底部分享 → 「添加到主屏幕」（提醒需保持页面打开）
- **原生版（完整锁屏提醒）**：Mac + Xcode，跟随主仓 [iOS 安装指南](https://github.com/439436269-ctrl/qingji-todo/blob/main/ios/README.md)（免费 Apple ID 即可）

> 注意：`qingji-todo.ipa` 为开发签名（Free Account + 已注册设备 UDID），仅已注册设备可装；重新打包后需同步更新 `manifest.plist` 中的版本号（`bundle-version`）。

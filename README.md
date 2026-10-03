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
| `sw.js` | Service Worker：离线缓存（落地页 + 应用本体，版本化失效） |
| `apple-touch-icon.png` | 主屏图标 |

## 访问

- 站点首页：https://439436269-ctrl.github.io/qingji-todo-web/
- 网页版应用：https://439436269-ctrl.github.io/qingji-todo-web/app.html

## 发布

GitHub Pages 从 `main` 分支根目录发布，改动直接 push 即生效。

网页版应用与主仓 [439436269-ctrl/qingji-todo](https://github.com/439436269-ctrl/qingji-todo) 保持同步——主仓根目录 `index.html` 为源头，同步到本仓 `app.html`。版本号各端统一（当前 v1.1.0）。

## iPhone 安装

见落地页「iPhone 版 · 安装指引」，两条路径：

1. **免电脑**：Safari 打开 `app.html` → 底部分享 → 「添加到主屏幕」（提醒需保持页面打开）
2. **原生版（完整锁屏提醒）**：Mac + Xcode，跟随主仓 [iOS 安装指南](https://github.com/439436269-ctrl/qingji-todo/blob/main/ios/README.md)（免费 Apple ID 即可）

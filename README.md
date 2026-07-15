# design

個人前端作品集網站，用來展示相關作品。

## Tech Stack

- `Vite`
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `Motion`
- `Lucide React`

## Features

- 中英文切換
- 深淺色模式
- 響應式版面
- 作品分類展示
- 圖片 lightbox 預覽

## Getting Started

```bash
npm install
npm run dev
```

## GitHub Pages

這個專案已經包含 GitHub Pages 的 Actions workflow：

- 推到 `main` 會自動 build 並部署
- 部署來源是 `dist/`

Repo 端還需要確認：

1. 到 GitHub repo 的 `Settings > Pages`
2. `Source` 選 `GitHub Actions`

目前 `vite.config.ts` 的 `base` 是 `/design/`，如果 repo 名稱不是 `design`，要一起改掉。

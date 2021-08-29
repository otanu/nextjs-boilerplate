# Next.jsのボイラープレート

```sh
git clone git@github.com:otanu/nextjs-boilerplate.git
cd nextjs-boilerplate
yarn install
yarn dev
or
yarn storybook
```

## インストール済みパッケージ

- Next.js v11.1.0
- eslit
- TypeScript
- Tailwind
- Storybook
- Prettier
- Jest

## その他の設定

1. 相対パスを省略できるようにエイリアスを設定

```tsx
import '../styles/globals.scss'
↓
import '@/styles/globals.scss'
```

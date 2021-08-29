# Next.jsのボイラープレート

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

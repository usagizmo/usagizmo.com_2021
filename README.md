# usagizmo.com

https://usagizmo.com

- [Next.js](https://nextjs.org/) (w/ [TypeScript](https://www.typescriptlang.org/))
- [Tailwind CSS](https://tailwindcss.com/) ([JIT](https://tailwindcss.com/docs/just-in-time-mode))
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [husky](https://github.com/typicode/husky) x [lint-staged](https://github.com/okonet/lint-staged)
- GitHub Actions (Formatting + Testing)
- Node (`v16+`) / [pnpm](https://pnpm.io/)

## Command List

```bash
pnpm i
pnpm dev     # next dev
pnpm build   # pnpm generate && next build
pnpm start   # next start
pnpm lint    # Linting
pnpm format  # Formatting
```

## Deploy to Vercel

To use `pnpm`, configure the following settings in Vercel `Project Settings`.

`General` > `Build` & `Development Settings` > `INSTALL COMMAND`:

```bash
npm i pnpm -g && pnpm i
```

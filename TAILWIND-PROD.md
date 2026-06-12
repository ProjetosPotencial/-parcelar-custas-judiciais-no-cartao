# Tailwind em produção (remover o Play CDN)

A página usa o **Tailwind Play CDN** (`cdn.tailwindcss.com`) — ótimo para prototipar, mas
**não recomendado em produção** (carrega ~3MB de JS e compila no browser, pesando no LCP).
Tudo já está preparado para trocar pelo Tailwind **buildado**. São 2 passos:

## 1. Importar o CSS do Tailwind no layout
Em `src/app/(frontend)/layout.tsx`, no topo, adicione:
```ts
import './tailwind.css'
```

## 2. Remover o CDN do layout
No mesmo arquivo, **apague** estas duas linhas do `<head>`:
```tsx
<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
<Script id="tw-config" strategy="beforeInteractive">{twConfig}</Script>
```
(pode remover também a const `twConfig`.)

Pronto. O `tailwind.config.js` já tem o tema da marca e faz `content` em
`public/lp-template.html` + `src/**`, então as utilidades usadas na página são geradas no build.
`preflight` está desligado para não conflitar com o reset próprio em `styles.css`.

> Dependências já adicionadas ao `package.json`: `tailwindcss`, `postcss`, `autoprefixer`.
> O **preview standalone** (`preview-juridico.html`) continua usando o CDN — é só para visualização local.

# LP Jurídico — Parcele Aqui (layout aprovado, Next.js + Payload)

Landing page do **Parcele Aqui para o mercado jurídico** (escritórios, OAB, Tribunais
de Justiça e cartórios), no **layout aprovado da LP de Imobiliárias** (pixel-perfect),
servida por **Next.js 15 + Payload 3**. Copy baseado na tese interna do TJSC.

## Como o layout foi preservado
O HTML/CSS/JS exatos da LP aprovada (`index.html` + `styles.css` + Tailwind Play CDN +
scripts) viram o **template de renderização** em `public/lp-template.html`. O Next serve
esse template e o **Payload sobrescreve textos e imagens** de cada dobra quando preenchidos.
Assim o visual é idêntico ao aprovado e o conteúdo continua editável.

- `public/lp-template.html` — markup juridicalizado (copy da tese + 2 dobras novas)
- `public/css/lp-inline.css` + `public/css/styles.css` — estilos originais da LP
- `public/js/lp.js` — comportamentos originais (hero, menu mobile, FAQ, carrosséis, reveal)
- Tailwind Play CDN + config — em `src/app/(frontend)/layout.tsx`

### Dobras novas (criadas para o jurídico)
- **Mercados** (`#mercados`): TJs, OAB, escritórios e cartórios.
- **Autoridade** (`#autoridade`): benchmark TJSC/STJ — **apenas dados públicos**
  (nenhum número confidencial da tese vai para a página).

## Edição de conteúdo (Payload)
Admin em `/admin` → **Conteúdo da LP → Landing Jurídico**. Cada aba é uma dobra com os
campos editáveis (textos e imagens). Campo em branco = usa o padrão do layout. Os campos
disponíveis estão mapeados em `src/app/(frontend)/overrides.ts` — é simples adicionar
mais (basta apontar a string/asset exato do template).

## Setup
```bash
npm install
cp .env.example .env      # defina PAYLOAD_SECRET
npm run seed              # cria admin@parceleaqui.com.br / parceleaqui123
npm run dev               # site em :3000  ·  admin em :3000/admin
```
Banco: **SQLite** (zero-config). Troque por Postgres/Mongo em `src/payload.config.ts` para produção.

## Prévia rápida (sem instalar nada)
Abra **`preview-juridico.html`** no navegador — é o layout real renderizado com os assets locais.

## Observações
- A tese é confidencial: a dobra de autoridade usa só fatos públicos (TJSC 2020, STJ Res. 7/2025).
- Tailwind Play CDN é o mesmo da LP atual; para produção pode-se migrar p/ Tailwind buildado.
- `src/app/(frontend)/page.tsx` lê `public/lp-template.html` em runtime e aplica os overrides do Payload.

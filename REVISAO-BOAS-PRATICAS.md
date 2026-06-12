# Revisão de boas práticas — LP Jurídico Parcele Aqui

Auditoria de **UI, UX, Copy, Growth, Responsividade, Acessibilidade e Técnico/SEO/Performance**.
Itens marcados ✅ já foram aplicados nesta rodada; ⚠️ são recomendações priorizadas (Alta/Média/Baixa).

> Nota: o pedido veio por um comando de "arte/canvas", mas a intenção (revisar a página) é de
> auditoria web. Tratei como auditoria — não como pôster.

---

## Resumo executivo
A página está **sólida e fiel ao Design System** (Kufam + DM Sans, amarelo #FFB800, marrom #371b01),
com bons sinais de confiança (autoridade Potencial/TJSC, selos, whitelabel) e voz correta
("fôlego de caixa", foco em guias/custas/fianças). Os maiores ganhos pendentes são **técnicos**
(Tailwind via CDN em produção, peso das imagens, SEO/metadados) e de **growth** (CTA sticky mobile,
captura de lead). Acessibilidade já subiu de patamar nesta rodada.

---

## 1. UI (visual)
✅ Tamanhos de fonte dos cards **harmonizados** (títulos 20/24, descrições 16/24 em todas as dobras).
✅ Contraste das **tags de Mercados** corrigido (texto marrom sobre amarelo — passa WCAG).
✅ Dobra Autoridade refinada: cards sem sombra, **borda hairline + régua amarela** no topo.
✅ Sombras sutis (drop-shadow) nas fotos que não tinham, dando profundidade.
✅ Ritmo entre dobras: cards com borda (Mercados) → lista com divisórias (Tipos de guia) → evita monotonia.
⚠️ **[Média]** Padronizar `letter-spacing` dos títulos de card (hoje há 0.1/0.2/0.5px misturados).
⚠️ **[Baixa]** Unificar raios: cards usam 20–32px; definir 1–2 valores (ex.: 16px e 24px) por tipo.

## 2. UX (fluxo e usabilidade)
✅ FAQ com `<details>` nativo (acessível, abre/fecha por teclado).
✅ Uma ação primária clara por dobra; CTAs com verbo + benefício.
✅ Menu mobile full-screen com acesso rápido.
⚠️ **[Alta]** **CTA fixo (sticky) no mobile** — barra inferior "Falar com especialista" sempre visível
(o próprio DS lista isso no roadmap). Reduz fricção e aumenta conversão no scroll longo.
⚠️ **[Média]** Oferecer **alternativa ao WhatsApp** (formulário curto que cai no Payload/CRM) para quem
não quer abrir o WhatsApp — captura lead mesmo fora do horário comercial.
⚠️ **[Baixa]** Âncoras do menu: "Soluções" aponta para o hero (#solucao). Avaliar apontar para Mercados.

## 3. Copy
✅ Voz do DS aplicada; foco correto em custas, fianças, guias judiciais e honorários.
✅ Sem travessões "—" (vício de IA) no conteúdo.
✅ Dados confidenciais da tese **fora** da página (só fatos públicos TJSC/STJ).
⚠️ **[Média]** Hero: subtítulo ainda longo. Testar versão mais curta (1 frase) para leitura rápida.
⚠️ **[Baixa]** Padronizar "tomador" vs "cliente" ao longo da página (hoje há os dois).
⚠️ **[Baixa]** Microcopy dos CTAs: A/B test "Falar com especialista" vs "Quero simular".

## 4. Growth / Conversão
✅ Sinais de autoridade e prova social (parceiros, Cielo, PCI DSS, 25 anos).
✅ Mensagens de WhatsApp pré-preenchidas por origem (rastreável).
⚠️ **[Alta]** **Tracking**: garantir GTM + GA4 + Clarity e eventos de clique nos CTAs (o stack do grupo).
⚠️ **[Alta]** CTA sticky mobile (ver UX).
⚠️ **[Média]** Seção de **prova social mais forte** (depoimento/caso real ou número de operações), se houver.
⚠️ **[Média]** OG image dedicada (compartilhamento no WhatsApp/LinkedIn) — hoje não há arquivo OG.

## 5. Responsividade
✅ Variantes desktop/mobile dedicadas (hero, como funciona, aplicação, quem somos, FAQ).
✅ Dobras novas (Mercados, Tipos de guia, Autoridade) com media queries próprias.
⚠️ **[Alta]** Testar a faixa **768–1024px** (tablet): grid de 4 cards de Mercados pode ficar apertado;
considerar 2 colunas nessa faixa.
⚠️ **[Média]** Validar 360/390px (iPhone SE/12) — checar overflow horizontal e tamanho de toque (mín. 44px).
⚠️ **[Baixa]** Tipos de guia: no mobile usa carrossel e no desktop lista — ok, mas avaliar manter lista
empilhada no mobile para consistência.

## 6. Acessibilidade (WCAG AA)
✅ `lang="pt-BR"`, landmarks (`header`/`main`/`footer`), FAQ acessível.
✅ **Skip link** "Pular para o conteúdo" adicionado.
✅ **Foco visível** por teclado (`:focus-visible`) adicionado.
✅ `prefers-reduced-motion` (respeita usuários sensíveis a movimento).
✅ `aria-label` na navegação principal; ícones decorativos com `aria-hidden`.
⚠️ **[Alta]** Contraste do texto de fonte (#9e9e9e sobre bege) provavelmente **falha AA** — escurecer p/ #6f6f6f.
⚠️ **[Média]** Adicionar `width`/`height` (ou `aspect-ratio`) nas imagens para evitar **CLS**.
⚠️ **[Média]** Revisar `alt` das fotos (descritivo e útil; decorativas com `alt=""`).
⚠️ **[Baixa]** Garantir ordem de headings sem "pulos" (h1 → h2 → h3).

## 7. Técnico / SEO / Performance
✅ Imagens em **webp** + `loading="lazy"`; `fetchpriority="high"` na imagem LCP do hero.
✅ Fonts com `preconnect`.
⚠️ **[Alta]** **Tailwind via Play CDN** (`cdn.tailwindcss.com`) **não é para produção**: adiciona ~3MB de JS,
compila no browser (FOUC) e pesa no LCP. Como 90% do estilo já é CSS próprio, recomendo **remover o CDN**
e converter as poucas utilidades Tailwind usadas em CSS estático (ou compilar o Tailwind no build do Next).
⚠️ **[Alta]** **Peso das imagens**: hero tem 2648px servido a ~660px. Gerar tamanhos responsivos
(`srcset`/`sizes`) e limitar a ~1.5x do tamanho exibido. Ganho grande de LCP/transferência.
⚠️ **[Alta]** **SEO**: adicionar `canonical`, `robots`, **JSON-LD** (Organization/Product/FAQ),
`sitemap.xml`, `robots.txt` e a `og:image`.
⚠️ **[Média]** Preload da fonte e da imagem LCP do hero.
⚠️ **[Média]** Definir `metadataBase` no Next e metadados Open Graph/Twitter completos.
⚠️ **[Baixa]** Minificar/Concatenar o `lp.js`; adicionar `defer` (já carrega via next/script afterInteractive).

---

## Prioridade sugerida (ordem de execução)
1. **Performance/Técnico (Alta):** remover Tailwind CDN, `srcset` nas imagens, SEO/JSON-LD/OG.
2. **Growth (Alta):** CTA sticky mobile + tracking (GTM/GA4/Clarity) + eventos.
3. **Acessibilidade (Alta/Média):** contraste do texto de fonte, `width/height` nas imagens.
4. **Responsividade (Alta):** ajustar 768–1024px (cards de Mercados).
5. **Copy/UX (Média):** hero mais curto, formulário alternativo ao WhatsApp.

Posso aplicar qualquer um destes — é só dizer por onde começar. Os de "Alta" em técnico/growth
são os que mais movem o ponteiro de conversão e performance.

---

## Status pós-ajustes (rodada "nota 10")

### O que foi aplicado agora ✅
- **Performance:** imagens reotimizadas (ex.: como-funciona 82→37KB, imac/como-operar 186→106KB);
  `fetchpriority`/preload na imagem LCP do hero; `width`/`height` nas fotos (evita CLS).
- **SEO técnico:** metadata completa no Next (canonical, robots, OG, Twitter, metadataBase),
  **JSON-LD** (Organization + Service + **FAQPage**), `robots.txt`, `sitemap.xml` e **imagem OG 1200×630**.
- **Acessibilidade:** skip link, foco visível, `prefers-reduced-motion`, `aria-label` na nav,
  contraste do texto de fonte corrigido (#9e9e9e → #6f6f6f).
- **Growth:** **CTA fixo (sticky) no mobile** com WhatsApp.
- **Responsividade:** Mercados em 2 colunas na faixa tablet (768–1023px).
- **UI/Copy:** fontes dos cards harmonizadas; descrições da lista em uma linha; tags com contraste AA;
  Autoridade refinada (sem sombra, hairline + régua amarela); travessões "—" removidos.
- **Tailwind de produção:** config + postcss + `tailwind.css` + deps **prontos** (ver `TAILWIND-PROD.md`).

### Notas atualizadas
| Dimensão | Antes | Agora |
|---|---|---|
| UI / visual | 9.0 | 9.5 |
| Copy | 8.0 | 8.5 |
| UX | 8.0 | 8.5 |
| Acessibilidade | 7.5 | 9.0 |
| Responsividade | 7.5 | 8.5 |
| Growth | 6.5 | 8.0 |
| Técnico / SEO / Perf | 5.5 | 8.5 |
| **Geral** | **7.5** | **~8.8** |

### Para fechar em 10 (depende de execução/ambiente, não dá para validar aqui)
1. **Flipar o Tailwind para build** (2 passos no `TAILWIND-PROD.md`) — remove os ~3MB do CDN. *Wesley.*
2. **Fotos reais** no lugar dos placeholders (usar os prompts em `PROMPTS-GEMINI.md`).
3. **Tracking ativo** (GTM + GA4 + Clarity) com eventos de clique nos CTAs — confirmar no deploy.
4. **QA responsivo em devices reais** (360/390/768/1024/1280) + Lighthouse > 90.
5. **`srcset`** real por breakpoint (gerar 660/1024/1320px de cada foto no pipeline de build).

# Prompts de Imagens — LP Jurídico Parcele Aqui

Prompts prontos para gerar (Midjourney, Flux, DALL·E 3, SDXL etc.) **uma imagem por dobra**,
alinhados ao conteúdo jurídico e ao visual da marca. Os prompts estão em **inglês** (melhor
aderência dos modelos); as instruções e contexto, em português.

> **Importante sobre a máscara/forma amarela:** nas LPs do Parcele Aqui, a forma orgânica
> amarela (#FFB800) e a máscara arredondada ("domo") **são aplicadas na etapa de design
> (Figma)**, não na foto. Portanto **gere fotos com fundo limpo, boa margem de respiro
> (copy space) e o sujeito sem encostar nas bordas**, para a máscara ser aplicada depois.
> Exporte tudo em **.webp**.

---

## Estilo da marca (cole isto no FIM de todos os prompts)

**STYLE SUFFIX (EN):**
`Brazilian professional setting, authentic and warm, natural soft daylight, shallow depth of field, modern and clean law office, optimistic and trustworthy mood, warm neutral color grading with soft beige and warm wood tones, high-end editorial photography, photorealistic, 50mm lens, uncluttered background with copy space, no text, no logos, no watermarks`

**NEGATIVE PROMPT (EN):**
`cartoon, illustration, 3d render, plastic skin, oversaturated, harsh shadows, cold blue tones, gavel cliché, lady justice statue, courtroom drama, stock-photo fakeness, text, captions, watermark, logo, distorted hands, extra fingers`

**Diretrizes de consistência:** mesma paleta quente, mesma luz suave, mesma direção de
arte em todas as fotos; pessoas brasileiras, diversas (gênero/etnia), faixa 30–50 anos,
trajes formais discretos (advocacia). Evite clichês (martelo, estátua da justiça, balança).

---

## 1. Hero — slide 1  ·  `hero-slide-1.webp`  ·  ~1351×1400 (≈1:1, retrato suave)
**Onde:** primeira imagem do topo (hero estático).
**PROMPT (EN):**
`A confident Brazilian woman lawyer in her late 30s smiling gently while holding a tablet, standing in a bright modern law office, looking slightly off-camera, business-casual blazer, warm and approachable, plenty of clean space around the subject. [STYLE SUFFIX]`

## 2. Hero — slide 2  ·  `hero-slide-2.webp`  ·  ~2648×2480 (≈1:1)
**PROMPT (EN):**
`A Brazilian male lawyer in his 40s reviewing and signing a contract at a clean desk, calm and assured expression, modern office with soft natural light, hands and pen visible signing a document, warm professional atmosphere. [STYLE SUFFIX]`

## 3. Hero — slide 3  ·  `hero-slide-3.webp`  ·  ~2648×2480 (≈1:1)
**PROMPT (EN):**
`Two Brazilian legal professionals shaking hands and smiling after closing an agreement in a modern law office, sense of trust and resolution, soft daylight, warm tones, candid editorial style. [STYLE SUFFIX]`

## 4. Hero mobile  ·  `hero-slide-mobile-1.webp`  ·  ~1351×1400 (máscara "domo")
**Onde:** versão mobile do hero (recorte em domo).
**PROMPT (EN):** *(mesmo sujeito do slide 1, enquadrado mais centralizado para a máscara em domo)*
`A confident Brazilian woman lawyer in her late 30s smiling while holding a tablet, centered composition with head and shoulders, bright modern law office, generous margin above the head for a rounded dome crop. [STYLE SUFFIX]`

---

## 5. Problema / Gargalo  ·  `secao-gargalo.webp`  ·  ~1174×1090 (≈1.08:1)
**Onde:** dobra "O custo que trava o acesso à Justiça".
**PROMPT (EN):**
`A focused Brazilian lawyer in his/her 40s reviewing a stack of court documents and invoices at a desk, thoughtful and serious but composed expression, conveying the weight of high, unpredictable legal costs, modern office, warm light, problem-aware mood (not sad), clean background. [STYLE SUFFIX]`

## 6. Solução  ·  `secao-solucao.webp`  ·  ~1174×1091 (≈1.08:1)
**Onde:** "O tomador parcela. O emissor recebe a guia liquidada à vista."
**PROMPT (EN):**
`A relieved and confident Brazilian lawyer smiling while using a smartphone to complete a digital payment, sitting in a modern law office, sense of solution and ease, warm optimistic light, positive body language. [STYLE SUFFIX]`

---

## 7. Como funciona — desktop  ·  `secao-como-funciona.webp`  ·  ~2306×1042 (banner ~2.2:1)
**Onde:** banner largo com forma amarela e os 4 passos sobrepostos por cima.
**ATENÇÃO:** composição **horizontal e ampla**, sujeito à **esquerda**, **muito espaço livre à direita/centro** (o texto e o card de 4 passos entram por cima).
**PROMPT (EN):**
`Wide cinematic banner of a smiling Brazilian legal professional working on a laptop in a bright modern office, subject positioned on the left third, large clean area on the right for overlay text, warm daylight, welcoming and efficient mood, panoramic composition. [STYLE SUFFIX] --ar 21:9`

## 8. Como funciona — mobile  ·  `secao-como-funciona-mobile.webp`  ·  ~680×1160 (retrato 0.59:1)
**PROMPT (EN):**
`Vertical portrait of a smiling Brazilian legal professional working on a laptop in a modern office, full-height composition with space at the bottom for overlay steps, warm daylight, friendly and efficient. [STYLE SUFFIX] --ar 9:16`

---

## 9. Autoridade (benchmark TJSC)  ·  `autoridade-juridico.webp`  ·  ~1174×1091 (≈1.08:1)
**Onde:** dobra bege "O parcelamento de custas já é realidade nos tribunais".
**PROMPT (EN):**
`A Brazilian lawyer focused and at ease paying court fees digitally on a laptop in a modern office, screen glow on face, professional and modern, conveying official/institutional digital payment, warm tones, clean background. [STYLE SUFFIX]`

---

## 10. FAQ  ·  `secao-faq.webp`  ·  ~1382×1504 (≈0.92:1, retrato)
**Onde:** dobra de dúvidas frequentes.
**PROMPT (EN):**
`A friendly approachable Brazilian professional smiling at the camera while sitting with an open laptop, helpful and reassuring expression, modern office, warm soft light, conveys clarity and support, clean uncluttered background. [STYLE SUFFIX]`

---

## 11. CTA final  ·  `secao-cta-final.webp`  ·  ~992×676 (≈1.47:1, paisagem)
**Onde:** chamada final "Transforme custas e honorários em fôlego de caixa".
**PROMPT (EN):**
`A smiling Brazilian professional holding a credit card in one hand and a smartphone in the other, completing a payment, modern bright environment, satisfied and confident expression, warm tones, horizontal composition with copy space on one side. [STYLE SUFFIX] --ar 3:2`

---

## Imagens que NÃO são geradas por IA
- **Logos de parceiros** (Bradesco, BB, Itaú, Cielo, PCI DSS, Detran, etc.) e **selos** —
  são arquivos oficiais, não gerar.
- **Mockups em iMac** (`imac-completo.webp`, `secao-como-operar_2.webp`) — são **screenshots
  do produto** numa moldura de iMac. Não gere por IA: faça uma captura real da plataforma
  Parcele Aqui e aplique no mockup do iMac.

## (Opcional) Imagem de compartilhamento — Open Graph  ·  `og-image-juridico.jpg`  ·  1200×630
**PROMPT (EN):**
`Editorial banner: a Brazilian lawyer smiling while using a smartphone for a digital payment in a modern office, left side reserved as clean negative space for a headline, warm brand tones, 1200x630 social share composition. [STYLE SUFFIX] --ar 1.91:1`

---

### Dicas finais
- Gere 3–4 variações por slot e escolha as que combinam entre si (mesma luz/tonalidade).
- Mantenha **fundos limpos** e **margem de respiro** — a máscara amarela "domo" é aplicada depois.
- Exporte em **.webp** com os nomes de arquivo exatos acima para já cair no lugar certo da LP
  (`public/images/sections/`).
- Para trocar qualquer imagem sem mexer no código, suba pelo **Payload** (dobras Hero, Problema,
  Solução, Como Funciona, FAQ, CTA e Autoridade já têm o campo de imagem).

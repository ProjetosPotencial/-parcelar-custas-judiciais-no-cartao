# Prompts para o Gemini — gerar as imagens da LP, uma a uma

Você já tem a grade com o estilo certo. Aqui estão duas formas de gerar **cada imagem
separada** para salvar individualmente.

---

## ✅ Método mais fiel (recomendado): extrair da própria grade
Anexe a imagem em grade no Gemini e, para cada foto, peça (troque a posição e a proporção):

> **A partir da grade que enviei, gere SOMENTE a foto da [1ª linha, 1ª coluna] como uma
> imagem isolada, em alta resolução, proporção [1:1]. Mantenha exatamente a mesma pessoa,
> pose, estilo, cores e iluminação. Fundo limpo, sem texto, sem logo, sem marca d'água.**

Repita mudando "[1ª linha, 1ª coluna]" e a proporção. É o jeito que melhor preserva o
visual que você aprovou.

---

## 🎨 Estilo (já embutido em cada prompt abaixo)
`Fotografia editorial fotorrealista, profissional jurídico brasileiro, escritório moderno e
minimalista com paredes bege e madeira clara, luz natural suave, tonalidade quente, pequenos
detalhes em amarelo #FFB800 (luminária, caneca, pasta), fundo limpo com espaço livre,
profundidade de campo rasa. Sem texto, sem logos, sem marca d'água.`

> Dica: gere 2–3 variações de cada e escolha as que combinam entre si.

---

## Prompts individuais (1 por imagem)

### 1 · `hero-slide-1.webp` — proporção 1:1
> Gere uma única foto em alta resolução, **proporção 1:1 (quadrada)**. Uma advogada brasileira por volta dos 35 anos, cabelo cacheado, blusa creme, sorrindo de leve e segurando um tablet, em pé num escritório claro e moderno. Luminária amarela e livros ao lado. [ESTILO ACIMA]

### 2 · `hero-slide-2.webp` — proporção 1:1
> Gere uma única foto em alta resolução, **proporção 1:1**. Um advogado brasileiro de blazer azul-marinho assinando um contrato sobre uma mesa de madeira, expressão calma e confiante, caneta e jarra de água com detalhe amarelo, luz natural ao fundo. [ESTILO ACIMA]

### 3 · `hero-slide-3.webp` — proporção 1:1
> Gere uma única foto em alta resolução, **proporção 1:1**. Dois profissionais jurídicos brasileiros apertando as mãos e sorrindo após fechar um acordo, escritório moderno com plantas e detalhes amarelos, sensação de confiança. [ESTILO ACIMA]

### 4 · `hero-slide-mobile-1.webp` — proporção 4:5 (retrato, recorte em domo)
> Gere uma única foto em alta resolução, **proporção 4:5 (retrato)**. Uma advogada brasileira de blazer amarelo segurando um tablet, sorrindo para a câmera, enquadramento centralizado de cabeça e ombros com espaço acima da cabeça (para recorte arredondado em domo). [ESTILO ACIMA]

### 5 · `secao-gargalo.webp` — proporção 1:1
> Gere uma única foto em alta resolução, **proporção 1:1**. Um advogado brasileiro mais velho, camisa polo cinza, analisando documentos e guias sobre a mesa, expressão concentrada e séria (sem tristeza), organizador amarelo ao lado, escritório moderno. [ESTILO ACIMA]

### 6 · `secao-solucao.webp` — proporção 1:1
> Gere uma única foto em alta resolução, **proporção 1:1**. Um advogado brasileiro de cardigã verde, sorrindo aliviado enquanto usa o notebook, copo com suco em detalhe quente, escritório moderno e luminoso, clima de solução e tranquilidade. [ESTILO ACIMA]

### 7 · `secao-como-funciona.webp` — proporção 16:9 (banner panorâmico)
> Gere uma única foto em alta resolução, **proporção 16:9 panorâmica**. Uma advogada brasileira sorrindo, usando notebook e segurando um celular com capa amarela, posicionada à **esquerda** do quadro, com **bastante espaço livre à direita** (para texto sobreposto). Mesa de madeira clara, luz natural. [ESTILO ACIMA]

### 8 · `secao-como-funciona-mobile.webp` — proporção 9:16 (vertical)
> Gere uma única foto em alta resolução, **proporção 9:16 vertical**. A mesma cena da advogada com notebook e celular amarelo, enquadramento vertical de corpo, com espaço na parte de baixo para texto sobreposto. [ESTILO ACIMA]

### 9 · `autoridade-juridico.webp` — proporção 1:1
> Gere uma única foto em alta resolução, **proporção 1:1**. Uma advogada brasileira pagando custas judiciais digitalmente no notebook, concentrada e à vontade, leve brilho da tela no rosto, escritório moderno, clima institucional e digital. [ESTILO ACIMA]

### 10 · `secao-faq.webp` — proporção 3:4 (retrato)
> Gere uma única foto em alta resolução, **proporção 3:4 (retrato)**. Um advogado brasileiro mais velho, camisa xadrez com colete, sorrindo simpático em frente ao notebook, luminária amarela, expressão acolhedora (tirar dúvidas), fundo limpo. [ESTILO ACIMA]

### 11 · `secao-cta-final.webp` — proporção 3:2 (paisagem)
> Gere uma única foto em alta resolução, **proporção 3:2 (paisagem)**. Uma advogada brasileira de blusa azul-marinho segurando um cartão de crédito numa mão e um celular com capa amarela na outra, concluindo um pagamento, sorrindo confiante, ambiente moderno e claro, espaço livre de um dos lados. [ESTILO ACIMA]

---

### Observações
- **Proporções:** o Gemini respeita melhor quando você escreve a proporção por extenso
  ("quadrada 1:1", "vertical 9:16", "panorâmica 16:9"). Se sair errado, peça
  "recorte para a proporção X mantendo o enquadramento".
- **Exportar:** salve em **.webp** com os nomes exatos acima → caem direto em
  `public/images/sections/`. Ou suba pelo **Payload** (dobras Hero, Problema, Solução,
  Como Funciona, FAQ e Autoridade já têm campo de imagem).
- **Não gerar por IA:** logos/selos (oficiais) e os mockups em iMac (screenshot real do produto).

/**
 * Mapeia campos editaveis no Payload -> string exata no template (lp-template.html).
 * Se o campo estiver preenchido no Payload, troca a string padrao (juridica) pelo valor.
 * Assim a LP usa o layout aprovado e cada dobra continua editavel pelo admin.
 * `find` precisa bater EXATAMENTE com o texto/caminho no template.
 */
export type Ov = { key: string; label: string; group: string; find: string }

export const textOverrides: Ov[] = [
  { key: 'heroKicker', group: 'Hero', label: 'Kicker', find: 'Parcelamento para o mercado jurídico' },
  { key: 'heroSubtitulo', group: 'Hero', label: 'Subtítulo', find: 'Tribunais, escritórios, OAB e cartórios oferecem o pagamento de custas processuais, fianças, guias judiciais e honorários em até 12x, enquanto a guia é liquidada à vista para o emissor.' },
  { key: 'credSubtitulo', group: 'Credibilidade', label: 'Subtítulo', find: 'Você oferece uma solução financeira confiável,<br/>respaldada por tecnologia, experiência e parceiros líderes do mercado.' },
  { key: 'probSubtitulo', group: 'Problema', label: 'Subtítulo', find: 'Custas processuais, fianças, guias judiciais e honorários costumam ser altos e pouco previsíveis, travando o andamento dos processos e a arrecadação.' },
  { key: 'probFecho', group: 'Problema', label: 'Frase de fecho', find: 'Sem uma opção flexível de pagamento, a guia fica em aberto e o processo emperra.' },
  { key: 'solSubtitulo', group: 'Solução', label: 'Subtítulo', find: 'Solução digital que permite <strong style="font-weight: 700;">parcelar custas processuais, fianças, guias judiciais e honorários</strong> em até 12x no cartão, usando até 3 cartões de crédito. O custo é repassado ao tomador, como no modelo do TJSC, e o emissor recebe <strong style="font-weight: 700;">à vista, com liquidação em tempo real e sem risco</strong>.' },
  { key: 'mercSubtitulo', group: 'Mercados', label: 'Subtítulo', find: 'Da custa inicial ao honorário de êxito: o mesmo produto, adaptado a cada elo do setor.' },
  { key: 'benchDescricao', group: 'Autoridade', label: 'Descrição', find: 'Desde 2020, o TJSC já permite pagar custas em até 12x no cartão; em 2025, o STJ passou a aceitar cartão e Pix. É o mesmo meio que o Parcele Aqui domina e que o Judiciário usa para reduzir a inadimplência da arrecadação.' },
  { key: 'confiaSubtitulo', group: 'Quem confia', label: 'Subtítulo', find: 'Empresas e órgãos que utilizam o Parcele Aqui para destravar o pagamento de guias e honorários, com operações processadas por meio da adquirência <strong style="font-weight: 700;">Cielo</strong>, garantindo segurança, confiabilidade e liquidação à vista para o emissor.' },
  { key: 'ctaKicker', group: 'CTA Final', label: 'Kicker', find: 'Pronto para destravar suas guias?' },
  { key: 'ctaDescricao', group: 'CTA Final', label: 'Descrição', find: 'Fale com nosso time e <span style="font-weight: 700;">ative o Parcele Aqui</span> no seu escritório, órgão ou cartório. É rápido, <span style="font-weight: 700;">100% digital e sem burocracia</span>.' },
]

export const imageOverrides: Ov[] = [
  { key: 'heroImg1', group: 'Hero', label: 'Imagem 1', find: '/images/sections/hero-slide-1.webp' },
  { key: 'heroImg2', group: 'Hero', label: 'Imagem 2', find: '/images/sections/hero-slide-2.webp' },
  { key: 'heroImg3', group: 'Hero', label: 'Imagem 3', find: '/images/sections/hero-slide-3.webp' },
  { key: 'probImg', group: 'Problema', label: 'Imagem', find: '/images/sections/secao-gargalo.webp' },
  { key: 'solImg', group: 'Solução', label: 'Imagem', find: '/images/sections/secao-solucao.webp' },
  { key: 'cfImg', group: 'Como Funciona', label: 'Imagem (desktop)', find: '/images/sections/secao-como-funciona.webp' },
  { key: 'faqImg', group: 'FAQ', label: 'Imagem', find: '/images/sections/secao-faq.webp' },
  { key: 'benchImg', group: 'Autoridade', label: 'Imagem', find: '/images/sections/autoridade-juridico.webp' },
  { key: 'ctaImg', group: 'CTA Final', label: 'Imagem', find: '/images/sections/secao-cta-final.webp' },
]

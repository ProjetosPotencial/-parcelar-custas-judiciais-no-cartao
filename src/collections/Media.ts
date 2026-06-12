import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Imagem', plural: 'Imagens' },
  access: { read: () => true },
  upload: {
    staticDir: 'media',
    // webp obrigatorio nos assets das LPs -> geramos versoes webp
    mimeTypes: ['image/*', 'image/svg+xml'],
    imageSizes: [
      { name: 'thumbnail', width: 480, height: undefined, formatOptions: { format: 'webp', options: { quality: 80 } } },
      { name: 'card', width: 768, height: undefined, formatOptions: { format: 'webp', options: { quality: 82 } } },
      { name: 'hero', width: 1600, height: undefined, formatOptions: { format: 'webp', options: { quality: 85 } } },
    ],
  },
  fields: [
    { name: 'alt', label: 'Texto alternativo (acessibilidade)', type: 'text', required: true },
  ],
}

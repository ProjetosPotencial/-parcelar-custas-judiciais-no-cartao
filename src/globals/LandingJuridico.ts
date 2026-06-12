import type { GlobalConfig, Field, Tab } from 'payload'
import { textOverrides, imageOverrides } from '../app/(frontend)/overrides'

// Agrupa os overrides por "group" e monta uma aba por dobra no admin.
const groups = Array.from(
  new Set([...textOverrides, ...imageOverrides].map((o) => o.group)),
)

const tabs: Tab[] = groups.map((g) => {
  const fields: Field[] = []
  for (const o of textOverrides.filter((t) => t.group === g)) {
    fields.push({ name: o.key, label: o.label, type: 'textarea' })
  }
  for (const o of imageOverrides.filter((t) => t.group === g)) {
    fields.push({ name: o.key, label: o.label, type: 'upload', relationTo: 'media' })
  }
  return { label: g, fields }
})

export const LandingJuridico: GlobalConfig = {
  slug: 'landing-juridico',
  label: 'Landing Jurídico',
  access: { read: () => true },
  admin: {
    group: 'Conteúdo da LP',
    description:
      'Edite o conteúdo e as imagens de cada dobra. Campos em branco usam o texto/asset padrão do layout.',
  },
  fields: [{ type: 'tabs', tabs }],
}

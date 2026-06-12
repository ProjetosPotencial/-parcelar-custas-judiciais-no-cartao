import fs from 'node:fs'
import path from 'node:path'
import { getGlobal } from './data'
import { textOverrides, imageOverrides } from './overrides'

export const dynamic = 'force-dynamic'

function esc(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
function mediaUrl(v: any): string {
  if (!v) return ''
  if (typeof v === 'object') return v.url || ''
  return ''
}

export default async function Home() {
  let html = fs.readFileSync(
    path.join(process.cwd(), 'public', 'lp-template.html'),
    'utf8',
  )

  const g = await getGlobal()

  // Override de textos (admin tem prioridade sobre o padrao do template)
  for (const o of textOverrides) {
    const val = g?.[o.key]
    if (val && typeof val === 'string' && val.trim()) {
      html = html.split(o.find).join(esc(val))
    }
  }
  // Override de imagens
  for (const o of imageOverrides) {
    const url = mediaUrl(g?.[o.key])
    if (url) html = html.split(o.find).join(url)
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

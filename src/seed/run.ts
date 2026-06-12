/**
 * Seed: cria o usuario admin inicial do Payload.
 * O conteudo das dobras ja vive no layout (lp-template.html); o admin so precisa
 * preencher campos quando quiser sobrescrever algum texto/imagem.
 * Uso: npm run seed   (vars opcionais: SEED_EMAIL, SEED_PASSWORD)
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config'

const EMAIL = process.env.SEED_EMAIL || 'admin@parceleaqui.com.br'
const PASSWORD = process.env.SEED_PASSWORD || 'parceleaqui123'

async function run() {
  const payload = await getPayload({ config })
  const existing = await payload.find({ collection: 'users', limit: 1 })
  if (existing.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: { email: EMAIL, password: PASSWORD, name: 'Admin Parcele Aqui' },
    })
    console.log(`✓ Admin criado: ${EMAIL} / ${PASSWORD} (troque em producao)`)
  } else {
    console.log('• Admin ja existe, nada a fazer.')
  }
  process.exit(0)
}
run().catch((e) => { console.error(e); process.exit(1) })

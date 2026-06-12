import { getPayload } from 'payload'
import config from '@payload-config'

/** Le o Global landing-juridico (com imagens populadas). Retorna {} se DB indisponivel. */
export async function getGlobal(): Promise<Record<string, any>> {
  try {
    const payload = await getPayload({ config })
    return (await payload.findGlobal({ slug: 'landing-juridico', depth: 2 })) as any
  } catch {
    return {}
  }
}

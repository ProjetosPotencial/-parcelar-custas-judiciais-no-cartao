# Pasta `media` (uploads do Payload)

**Não precisa subir a pasta `media` para o git.** Ela é só o destino dos uploads feitos no
admin do Payload em tempo de execução. O conteúdo é ignorado pelo git (`.gitignore`) e a pasta
é **recriada automaticamente** pelos scripts `predev`/`prebuild` (`npm run dev` / `npm run build`).

Se sua ferramenta de git não envia pastas vazias, ignore: o app cria a pasta sozinho.

## Produção (recomendado): storage em nuvem
Em produção, o ideal é **não salvar mídia no sistema de arquivos** (Vercel/serverless é efêmero).
Use um adapter de storage do Payload:

```bash
npm i @payloadcms/storage-vercel-blob   # ou @payloadcms/storage-s3
```

E no `payload.config.ts`:
```ts
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
// ...
plugins: [
  vercelBlobStorage({
    collections: { media: true },
    token: process.env.BLOB_READ_WRITE_TOKEN,
  }),
],
```
Assim os uploads vão para o Blob/S3 e nada de mídia precisa ficar no repositório nem no servidor.

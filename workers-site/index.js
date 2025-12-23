import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

export default {
  async fetch(request, env, ctx) {
    return getAssetFromKV({ request, waitUntil: ctx.waitUntil })
  }
}

const CACHE_NAME = 'frame-video-cache-v1'
const blobUrlMap = new Map<string, string>()

/**
 * Retorna uma Blob URL local do cache (se já baixado), ou faz o download
 * e salva no Cache Storage do navegador para que futuros reloads não precisem
 * baixar nada novamente.
 */
export async function getCachedVideoUrl(url: string): Promise<string> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return url
  }

  // Reutiliza Blob URL em memória se já gerada
  if (blobUrlMap.has(url)) {
    return blobUrlMap.get(url)!
  }

  try {
    const cache = await caches.open(CACHE_NAME)
    let response = await cache.match(url)

    if (!response) {
      // Se ainda não está no cache, faz o download do arquivo
      response = await fetch(url)
      if (!response.ok) {
        return url
      }
      // Salva uma cópia no Cache Storage persistente
      await cache.put(url, response.clone())
    }

    const blob = await response.blob()
    const objectUrl = URL.createObjectURL(blob)
    blobUrlMap.set(url, objectUrl)
    return objectUrl
  } catch (error) {
    console.warn('[VideoCache] Fallback para URL direta:', url, error)
    return url
  }
}

/**
 * Pré-carrega uma lista de vídeos em segundo plano (em idle)
 * para garantir que quando o usuário navegar ou recarregar, tudo já esteja salvo em disco.
 */
export function preloadVideoList(urls: string[]) {
  if (typeof window === 'undefined' || !('caches' in window)) return

  const fetchNext = (index: number) => {
    if (index >= urls.length) return
    const url = urls[index]
    getCachedVideoUrl(url).then(() => {
      setTimeout(() => fetchNext(index + 1), 100)
    }).catch(() => {
      fetchNext(index + 1)
    })
  }

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => fetchNext(0), { timeout: 2500 })
  } else {
    setTimeout(() => fetchNext(0), 1000)
  }
}

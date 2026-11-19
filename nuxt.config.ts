// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: false },
  vite: {
    server: {
      allowedHosts: true
    },
    plugins: [
      {
        name: 'video-cache-headers',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const rawUrl = req.url?.split('?')[0] || ''
            if (rawUrl.startsWith('/videos/') || rawUrl.startsWith('/assets/')) {
              res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
              res.setHeader('Accept-Ranges', 'bytes')
            }
            next()
          })
        }
      }
    ]
  },
  nitro: {
    routeRules: {
      '/videos/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Accept-Ranges': 'bytes'
        }
      },
      '/assets/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      }
    }
  },
  css: ['~/assets/css/style.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: '4k Creative — Vídeos empresariais e Instagram',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0b0b0b' },
        { name: 'description', content: 'Vídeos empresariais e conteúdo para Instagram. Da ideia à edição, sua marca em destaque.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap' }
      ]
    }
  }
})

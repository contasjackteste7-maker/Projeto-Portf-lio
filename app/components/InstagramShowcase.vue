<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const initialBase = 12980
const followerCount = ref(initialBase)
const gainedCount = ref(0)
const isDeviceOn = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null
let growthTimer: any = null
let animationFrameId: number | null = null

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('pt-BR').format(num)
}

const startContinuousGrowth = () => {
  if (growthTimer) return

  // Faz os seguidores crescerem ativamente ao vivo enquanto o usuário visualiza o perfil
  growthTimer = setInterval(() => {
    if (typeof document !== 'undefined' && document.hidden) return
    // Incremento orgânico de novos seguidores (+1 a +3) a cada ~1.6 segundos
    const step = Math.floor(Math.random() * 3) + 1
    followerCount.value += step
    gainedCount.value += step
  }, 1600)
}

const animateInitialFollowers = () => {
  const duration = 900
  const startTime = performance.now()
  const startVal = 12820
  const targetVal = initialBase

  const tick = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(1, elapsed / duration)
    const ease = 1 - Math.pow(1 - progress, 3)
    followerCount.value = Math.floor(startVal + (targetVal - startVal) * ease)
    if (progress < 1) {
      animationFrameId = requestAnimationFrame(tick)
    } else {
      followerCount.value = targetVal
      startContinuousGrowth()
    }
  }
  animationFrameId = requestAnimationFrame(tick)
}

const triggerPowerOn = () => {
  isDeviceOn.value = true
  animateInitialFollowers()
}

const handleVisibilityChange = () => {
  if (typeof document !== 'undefined' && document.hidden) {
    if (growthTimer) {
      clearInterval(growthTimer)
      growthTimer = null
    }
  } else if (isDeviceOn.value && !growthTimer) {
    startContinuousGrowth()
  }
}

onMounted(() => {
  if (import.meta.client) {
    document.addEventListener('visibilitychange', handleVisibilityChange)

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isDeviceOn.value) {
              triggerPowerOn()
            } else if (!growthTimer) {
              startContinuousGrowth()
            }
          }
        })
      }, { threshold: 0.15 })

      if (sectionRef.value) {
        observer.observe(sectionRef.value)
      }
    } else {
      triggerPowerOn()
    }
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (growthTimer) clearInterval(growthTimer)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (typeof document !== 'undefined') {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
  }
})
</script>

<template>
  <div>
    <div class="profile-intro container reveal-blur">
      <span class="section-label">IMAGINE SUA MARCA AQUI</span>
      <h2>Um perfil que combina.<br />Uma marca que se destaca.</h2>
      <p>
        Vídeos com a mesma identidade, destaques organizados e uma apresentação que valoriza seu negócio. Veja uma simulação de como seu Instagram pode ficar.
      </p>
    </div>

    <section
      ref="sectionRef"
      aria-label="Perfil do Instagram demonstrativo"
      class="product-shell instagram-shell"
      :class="{ 'device-powered-on': isDeviceOn }"
      id="portfolio"
    >
      <div class="instagram" inert>
        <aside class="ig-sidebar">
          <span class="ig-glyph">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
              <rect height="15" rx="3" width="18" x="3" y="6"></rect>
              <path d="m7 6 2-3h6l2 3"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </span>
          <button aria-label="Início" data-ig-nav="Início">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
              <path d="m3 10 9-7 9 7v11h-6v-7H9v7H3z"></path>
            </svg>
          </button>
          <button aria-label="Pesquisar" data-ig-nav="Pesquisar">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
              <circle cx="10" cy="10" r="7"></circle>
              <path d="m15 15 6 6"></path>
            </svg>
          </button>
          <button aria-label="Reels" data-ig-nav="Reels">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
              <rect height="18" rx="5" width="18" x="3" y="3"></rect>
              <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
              <path d="m10 12 5 3-5 3z"></path>
            </svg>
          </button>
          <button aria-label="Mensagens" data-ig-nav="Mensagens">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
              <path d="m21 3-7 18-4-7-7-4 18-7ZM10 14 21 3"></path>
            </svg>
          </button>
          <button aria-label="Notificações" data-ig-nav="Notificações">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"></path>
            </svg>
          </button>
          <button aria-label="Criar" data-ig-nav="Criar">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
              <rect height="18" rx="5" width="18" x="3" y="3"></rect>
              <path d="M12 7v10M7 12h10"></path>
            </svg>
          </button>
          <button aria-label="Perfil" class="ig-avatar-small" data-ig-nav="Perfil">F.</button>
          <button aria-label="Menu" class="ig-bottom" data-ig-nav="Menu">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18"></path>
            </svg>
          </button>
        </aside>

        <div class="ig-main">
          <div class="ig-topbar">
            <span class="ig-wordmark">Instagram</span>
            <button aria-label="Mais opções" data-ig-nav="Mais opções">•••</button>
          </div>

          <div class="ig-profile">
            <div class="ig-avatar-ring">
              <div class="ig-avatar">F<span>.</span></div>
            </div>

            <div class="ig-details">
              <div class="ig-user-row">
                <div class="ig-identity">
                  <h3>sua.empresa</h3>
                  <span aria-label="Selo ilustrativo" class="ig-verified">✓</span>
                </div>
                <button class="ig-follow">Seguir</button>
                <button class="ig-message">Enviar mensagem</button>
                <button aria-label="Opções do perfil" class="ig-more" data-ig-nav="Opções do perfil">•••</button>
              </div>

              <div class="ig-stats">
                <span><b>9</b> publicações</span>
                <span class="ig-follower-stat">
                  <b id="simFollowerCount">{{ formatNumber(followerCount) }}</b> seguidores
                </span>
                <span><b>386</b> seguindo</span>
              </div>

              <div class="ig-bio">
                <b>Sua empresa | Sua especialidade</b>
                <span class="ig-muted">Produtos e serviços</span>
                <span>O que fazemos, com cuidado em cada detalhe.</span>
                <span>Conheça nossa equipe, novidades e bastidores.</span>
                <span>↓ Fale com a gente</span>
                <button class="ig-bio-link">↗ suaempresa.com.br</button>
              </div>
            </div>
          </div>

          <div class="ig-highlights">
            <button class="ig-highlight" data-highlight="Bastidores">
              <span>
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="15" rx="3" width="18" x="3" y="6"></rect>
                  <path d="m7 6 2-3h6l2 3"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </span>
              <small>Bastidores</small>
            </button>
            <button class="ig-highlight" data-highlight="Produtos">
              <span>
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                  <path d="m10 12 5 3-5 3z"></path>
                </svg>
              </span>
              <small>Produtos</small>
            </button>
            <button class="ig-highlight" data-highlight="Serviços">
              <span>
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="1" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M3 15h18M9 3v18M15 3v18"></path>
                </svg>
              </span>
              <small>Serviços</small>
            </button>
            <button class="ig-highlight" data-highlight="Equipe">
              <span>
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="1" width="18" x="3" y="3"></rect>
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M6 20v-2a6 6 0 0 1 12 0v2"></path>
                </svg>
              </span>
              <small>Equipe</small>
            </button>
            <button class="ig-highlight" data-highlight="Contato">
              <span>
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <path d="m21 3-7 18-4-7-7-4 18-7ZM10 14 21 3"></path>
                </svg>
              </span>
              <small>Contato</small>
            </button>
          </div>

          <div aria-label="Conteúdo do perfil" class="ig-tabs" role="tablist">
            <button aria-selected="true" class="active" data-ig-tab="posts" role="tab">
              <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                <rect height="18" rx="1" width="18" x="3" y="3"></rect>
                <path d="M3 9h18M3 15h18M9 3v18M15 3v18"></path>
              </svg>
              <span>PUBLICAÇÕES</span>
            </button>
            <button aria-selected="false" data-ig-tab="reels" role="tab">
              <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                <path d="m10 12 5 3-5 3z"></path>
              </svg>
              <span>REELS</span>
            </button>
            <button aria-selected="false" data-ig-tab="tagged" role="tab">
              <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                <rect height="18" rx="1" width="18" x="3" y="3"></rect>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M6 20v-2a6 6 0 0 1 12 0v2"></path>
              </svg>
              <span>MARCADOS</span>
            </button>
          </div>

          <div class="ig-posts">
            <button aria-label="Abrir publicação demonstrativa 1" class="ig-post art-0" data-post="0">
              <span class="ig-post-type">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                  <path d="m10 12 5 3-5 3z"></path>
                </svg>
              </span>
              <div class="ig-art"><div class="art-orb"></div><div class="art-panel"></div><div class="art-line"></div></div>
              <span class="post-kicker">SUA EMPRESA</span>
              <strong>NOSSA ESSÊNCIA</strong>
              <span class="post-hover">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"></path>
                </svg> 128 &nbsp; ◯ 8
              </span>
            </button>

            <button aria-label="Abrir publicação demonstrativa 2" class="ig-post art-1" data-post="1">
              <span class="ig-post-type">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                  <path d="m10 12 5 3-5 3z"></path>
                </svg>
              </span>
              <div class="ig-art"><div class="art-orb"></div><div class="art-panel"></div><div class="art-line"></div></div>
              <span class="post-kicker">SUA EMPRESA</span>
              <strong>FEITO PARA VOCÊ</strong>
              <span class="post-hover">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"></path>
                </svg> 165 &nbsp; ◯ 11
              </span>
            </button>

            <button aria-label="Abrir publicação demonstrativa 3" class="ig-post art-2" data-post="2">
              <span class="ig-post-type">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                  <path d="m10 12 5 3-5 3z"></path>
                </svg>
              </span>
              <div class="ig-art"><div class="art-orb"></div><div class="art-panel"></div><div class="art-line"></div></div>
              <span class="post-kicker">SUA EMPRESA</span>
              <strong>NOSSO PROCESSO</strong>
              <span class="post-hover">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"></path>
                </svg> 202 &nbsp; ◯ 14
              </span>
            </button>

            <button aria-label="Abrir publicação demonstrativa 4" class="ig-post art-3" data-post="3">
              <span class="ig-post-type">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                  <path d="m10 12 5 3-5 3z"></path>
                </svg>
              </span>
              <div class="ig-art"><div class="art-orb"></div><div class="art-panel"></div><div class="art-line"></div></div>
              <span class="post-kicker">SUA EMPRESA</span>
              <strong>QUEM FAZ</strong>
              <span class="post-hover">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"></path>
                </svg> 239 &nbsp; ◯ 17
              </span>
            </button>

            <button aria-label="Abrir publicação demonstrativa 5" class="ig-post art-4" data-post="4">
              <span class="ig-post-type">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                  <path d="m10 12 5 3-5 3z"></path>
                </svg>
              </span>
              <div class="ig-art"><div class="art-orb"></div><div class="art-panel"></div><div class="art-line"></div></div>
              <span class="post-kicker">SUA EMPRESA</span>
              <strong>OS DETALHES</strong>
              <span class="post-hover">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"></path>
                </svg> 276 &nbsp; ◯ 20
              </span>
            </button>

            <button aria-label="Abrir publicação demonstrativa 6" class="ig-post art-5" data-post="5">
              <span class="ig-post-type">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                  <path d="m10 12 5 3-5 3z"></path>
                </svg>
              </span>
              <div class="ig-art"><div class="art-orb"></div><div class="art-panel"></div><div class="art-line"></div></div>
              <span class="post-kicker">SUA EMPRESA</span>
              <strong>POR AQUI</strong>
              <span class="post-hover">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"></path>
                </svg> 313 &nbsp; ◯ 23
              </span>
            </button>

            <button aria-label="Abrir publicação demonstrativa 7" class="ig-post art-0" data-post="6">
              <span class="ig-post-type">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                  <path d="m10 12 5 3-5 3z"></path>
                </svg>
              </span>
              <div class="ig-art"><div class="art-orb"></div><div class="art-panel"></div><div class="art-line"></div></div>
              <span class="post-kicker">SUA EMPRESA</span>
              <strong>SEU PRÓXIMO PASSO</strong>
              <span class="post-hover">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"></path>
                </svg> 350 &nbsp; ◯ 26
              </span>
            </button>

            <button aria-label="Abrir publicação demonstrativa 8" class="ig-post art-1" data-post="7">
              <span class="ig-post-type">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                  <path d="m10 12 5 3-5 3z"></path>
                </svg>
              </span>
              <div class="ig-art"><div class="art-orb"></div><div class="art-panel"></div><div class="art-line"></div></div>
              <span class="post-kicker">SUA EMPRESA</span>
              <strong>NOVIDADES</strong>
              <span class="post-hover">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"></path>
                </svg> 387 &nbsp; ◯ 29
              </span>
            </button>

            <button aria-label="Abrir publicação demonstrativa 9" class="ig-post art-2" data-post="8">
              <span class="ig-post-type">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                  <path d="M3 9h18M8 3l4 6M15 3l4 6"></path>
                  <path d="m10 12 5 3-5 3z"></path>
                </svg>
              </span>
              <div class="ig-art"><div class="art-orb"></div><div class="art-panel"></div><div class="art-line"></div></div>
              <span class="post-kicker">SUA EMPRESA</span>
              <strong>VAMOS CONVERSAR</strong>
              <span class="post-hover">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"></path>
                </svg> 424 &nbsp; ◯ 32
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

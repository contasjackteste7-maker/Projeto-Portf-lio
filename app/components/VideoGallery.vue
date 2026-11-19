<script setup lang="ts">
import { ref, computed } from 'vue'
import { corporateVideos, type CorporateVideo } from '~/data/videos'

const BATCH_SIZE = 6
const loadedCount = ref(BATCH_SIZE)
const playingIndex = ref<number | null>(null)
const activePlayingIndex = ref<number | null>(null)
const bufferingIndex = ref<number | null>(null)
const progressMap = ref<Record<number, string>>({})
const videoElementRefs = ref<HTMLVideoElement[]>([])

const visibleVideos = computed(() => {
  return corporateVideos.slice(0, loadedCount.value)
})

const loadMore = () => {
  loadedCount.value = Math.min(loadedCount.value + BATCH_SIZE, corporateVideos.length)
}

const togglePlay = (index: number) => {
  const video = videoElementRefs.value[index]
  if (!video) return

  if (playingIndex.value === index) {
    video.pause()
    playingIndex.value = null
    activePlayingIndex.value = null
    bufferingIndex.value = null
  } else {
    // Pause any other playing video
    if (playingIndex.value !== null && videoElementRefs.value[playingIndex.value]) {
      videoElementRefs.value[playingIndex.value].pause()
    }

    playingIndex.value = index
    activePlayingIndex.value = null

    // Se o vídeo ainda não carregou frames suficientes, exibe o loader imediatamente
    if (video.readyState < 3) {
      bufferingIndex.value = index
    }

    video.muted = false
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          bufferingIndex.value = null
          activePlayingIndex.value = index
        })
        .catch(() => {
          // Fallback para reprodução muda se o navegador bloquear áudio automático
          video.muted = true
          video.play()
            .then(() => {
              bufferingIndex.value = null
              activePlayingIndex.value = index
            })
            .catch(() => {
              bufferingIndex.value = null
              playingIndex.value = null
              activePlayingIndex.value = null
            })
        })
    }
  }
}

const onWaiting = (index: number) => {
  if (playingIndex.value === index) {
    bufferingIndex.value = index
  }
}

const onPlaying = (index: number) => {
  if (playingIndex.value === index) {
    bufferingIndex.value = null
    activePlayingIndex.value = index
  }
}

const onTimeUpdate = (index: number, e: Event) => {
  const video = e.target as HTMLVideoElement
  if (video && video.duration) {
    const pct = (video.currentTime / video.duration) * 100
    progressMap.value[index] = `${pct}%`
  }
  if (playingIndex.value === index) {
    if (bufferingIndex.value === index) {
      bufferingIndex.value = null
    }
    if (video && video.currentTime > 0) {
      activePlayingIndex.value = index
    }
  }
}

const onVideoEnded = (index: number) => {
  if (playingIndex.value === index) {
    playingIndex.value = null
    activePlayingIndex.value = null
    bufferingIndex.value = null
  }
  progressMap.value[index] = '0%'
}
</script>

<template>
  <section class="video-gallery container" id="videos">
    <div class="video-gallery-header">
      <div class="video-gallery-kicker reveal-blur">
        <span class="section-label">PRODUÇÕES ENTREGUES</span>
        <h2>Alguns vídeos que já produzi.</h2>
        <p class="research-copy">Veja o resultado na prática.</p>
      </div>
    </div>

    <div class="video-grid" id="videoGrid" aria-label="Galeria de vídeos verticais">
      <article
        v-for="(item, index) in visibleVideos"
        :key="item.title + index"
        class="video-grid-card"
        :class="{
          'is-playing': playingIndex === index,
          'is-active-playing': activePlayingIndex === index,
          'is-buffering': bufferingIndex === index
        }"
        :style="{
          '--delay': `${(index % 6) * 90}ms`
        }"
        tabindex="0"
        role="region"
        :aria-label="`${item.title} — ${item.category}`"
        @click="togglePlay(index)"
      >
        <div class="card-screen-frame">
          <!-- Miniatura oficial fixa que nunca some no carregamento -->
          <img
            :src="item.poster"
            :alt="item.title"
            class="card-poster-thumb"
            :class="{ 'is-faded': activePlayingIndex === index }"
            loading="lazy"
          />

          <video
            :ref="(el) => { if (el) videoElementRefs[index] = el as HTMLVideoElement }"
            class="video-grid-player"
            :poster="item.poster"
            muted
            loop
            playsinline
            preload="metadata"
            @waiting="onWaiting(index)"
            @playing="onPlaying(index)"
            @timeupdate="onTimeUpdate(index, $event)"
            @ended="onVideoEnded(index)"
          >
            <source :src="item.video" type="video/mp4" />
          </video>
          <div class="card-media-overlay"></div>

          <!-- Top Reels: Instagram Button -->
          <div class="screen-hud-top">
            <a
              :href="item.instagramUrl || 'https://www.instagram.com/'"
              target="_blank"
              rel="noopener noreferrer"
              class="hud-tag hud-instagram-btn"
              title="Abrir vídeo no Instagram"
              @click.stop
            >
              <svg class="hud-ig-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
              <svg class="hud-arrow-icon" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17l9.2-9.2M17 17V8H8"/>
              </svg>
            </a>
          </div>

          <!-- Center Buffer Loader: Apenas a animação dos cubos, sem borda e sem caixa ao redor -->
          <div v-if="bufferingIndex === index" class="video-card-loader" aria-hidden="true">
            <div class="loader">
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
            </div>
          </div>

          <!-- Center Play Button (Play normal, sem borda) -->
          <div
            v-show="playingIndex !== index && bufferingIndex !== index"
            class="screen-play-container"
          >
            <button
              class="screen-play-btn"
              type="button"
              :aria-label="`Assistir ${item.title}`"
              @click.stop="togglePlay(index)"
            >
              <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.5 6.4c0-.98 1.07-1.59 1.92-1.1l9.6 5.6c.85.5.85 1.7 0 2.2l-9.6 5.6c-.85.5-1.92-.12-1.92-1.1V6.4z"/>
              </svg>
            </button>
          </div>

          <!-- Bottom Right: Somente o Indicador Verdinho de Som -->
          <div class="screen-sound-hud" :class="{ 'is-active': playingIndex === index }">
            <div class="wave-bars">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>

          <!-- Interactive Progress Bar -->
          <div class="screen-progress">
            <div class="screen-progress-fill" :style="{ width: progressMap[index] || '0%' }"></div>
          </div>
        </div>
      </article>
    </div>

    <div v-if="loadedCount < corporateVideos.length" class="video-gallery-actions">
      <button
        class="_3dJGfa_button _3dJGfa_dark pill gray video-load-more-btn"
        id="loadMoreVideos"
        type="button"
        @click="loadMore"
      >
        <span class="Y1tPWW_label Y1tPWW_hydrated">Ver mais vídeos</span>
        <span class="video-count-pill" id="videoCountBadge">{{ loadedCount }} de {{ corporateVideos.length }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6l4 4 4-4"/>
        </svg>
      </button>
    </div>
  </section>
</template>

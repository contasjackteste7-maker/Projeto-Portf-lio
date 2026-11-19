<script setup lang="ts">
import { ref, computed } from 'vue'
import { corporateVideos, type CorporateVideo } from '~/data/videos'
import { getCachedVideoUrl } from '~/utils/videoCache'

const BATCH_SIZE = 6
const loadedCount = ref(BATCH_SIZE)
const playingIndex = ref<number | null>(null)
const progressMap = ref<Record<number, string>>({})
const videoElementRefs = ref<HTMLVideoElement[]>([])
const cachedVideoMap = ref<Record<string, string>>({})

const visibleVideos = computed(() => {
  return corporateVideos.slice(0, loadedCount.value)
})

const getVideoSrc = (url: string) => {
  return cachedVideoMap.value[url] || url
}

const loadMore = () => {
  loadedCount.value = Math.min(loadedCount.value + BATCH_SIZE, corporateVideos.length)
}

const togglePlay = (index: number) => {
  const video = videoElementRefs.value[index]
  if (!video) return

  if (playingIndex.value === index) {
    video.pause()
    playingIndex.value = null
  } else {
    // Pause any other playing video
    if (playingIndex.value !== null && videoElementRefs.value[playingIndex.value]) {
      videoElementRefs.value[playingIndex.value].pause()
    }

    const item = visibleVideos.value[index]
    if (item?.video && !cachedVideoMap.value[item.video]) {
      getCachedVideoUrl(item.video).then((blobUrl) => {
        if (blobUrl && blobUrl !== item.video) {
          cachedVideoMap.value[item.video] = blobUrl
        }
      })
    }

    playingIndex.value = index
    video.muted = false
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback to muted playback if audio is blocked
        video.muted = true
        video.play().catch(() => {})
      })
    }
  }
}

const onTimeUpdate = (index: number, e: Event) => {
  const video = e.target as HTMLVideoElement
  if (video && video.duration) {
    const pct = (video.currentTime / video.duration) * 100
    progressMap.value[index] = `${pct}%`
  }
}

const onVideoEnded = (index: number) => {
  if (playingIndex.value === index) {
    playingIndex.value = null
  }
  progressMap.value[index] = '0%'
}
</script>

<template>
  <section class="video-gallery container" id="videos">
    <div class="video-gallery-header">
      <div class="video-gallery-kicker reveal-blur">
        <span class="section-label">PRODUÇÕES ENTREGUES</span>
        <h2>Vídeos que já produzi.</h2>
        <p class="research-copy">Veja o resultado na prática.</p>
      </div>
    </div>

    <div class="video-grid" id="videoGrid" aria-label="Galeria de vídeos verticais">
      <article
        v-for="(item, index) in visibleVideos"
        :key="item.title + index"
        class="video-grid-card"
        :class="{ 'is-playing': playingIndex === index }"
        :style="{
          '--delay': `${(index % 6) * 90}ms`
        }"
        tabindex="0"
        role="region"
        :aria-label="`${item.title} — ${item.category}`"
        @click="togglePlay(index)"
      >
        <div class="card-screen-frame">
          <div class="card-poster-art" :style="{ background: item.artGradient }">
            <div class="poster-lens-flare" :style="{ background: item.flare }"></div>
          </div>
          <video
            :ref="(el) => { if (el) videoElementRefs[index] = el as HTMLVideoElement }"
            class="video-grid-player"
            :poster="item.poster"
            muted
            loop
            playsinline
            preload="metadata"
            @timeupdate="onTimeUpdate(index, $event)"
            @ended="onVideoEnded(index)"
          >
            <source :src="getVideoSrc(item.video)" type="video/mp4" />
          </video>
          <div class="card-media-overlay"></div>

          <!-- Top Reels / Client Brand HUD -->
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
            <span class="hud-time">{{ item.duration }}</span>
          </div>

          <!-- Center Play Button (Clean glassmorphic, no glow) -->
          <div class="screen-play-container">
            <button
              class="screen-play-btn"
              type="button"
              :aria-label="`Assistir ${item.title}`"
              @click.stop="togglePlay(index)"
            >
              <svg v-show="playingIndex !== index" class="play-icon" viewBox="0 0 24 24">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.5-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14z"/>
              </svg>
              <svg v-show="playingIndex === index" class="pause-icon" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            </button>
          </div>

          <!-- Floating Instagram Reels Actions -->
          <div class="screen-reels-actions">
            <div class="reels-action-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span>{{ item.likes }}</span>
            </div>
            <div class="reels-action-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              <span>{{ item.comments }}</span>
            </div>
            <div class="reels-action-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>
            </div>
          </div>

          <!-- Bottom HUD: Author, Title, Description, Equalizer -->
          <div class="screen-hud-bottom">
            <div class="screen-author">
              <span class="author-avatar">{{ (item.clientName || 'F').charAt(0).toUpperCase() }}</span>
              <strong>{{ item.clientHandle || (item.clientName ? '@' + item.clientName.toLowerCase().replace(/\s+/g, '') : 'sua.empresa') }}</strong>
              <span class="verified-badge">✓</span>
            </div>
            <h3 class="screen-title">{{ item.title }}</h3>
            <p class="screen-desc">{{ item.desc }}</p>
            <div class="audio-wave-bar">
              <span class="wave-icon">♫</span>
              <span class="wave-track">Áudio original • Som imersivo</span>
              <div class="wave-bars">
                <span></span><span></span><span></span><span></span>
              </div>
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

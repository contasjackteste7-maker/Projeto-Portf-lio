<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { frameNicheCategoriesData, corporateVideos, type NicheCardItem } from '~/data/videos'

const nicheCategoriesOrder = ['institucional', 'reels', 'produtos', 'eventos']
const allNicheCards: NicheCardItem[] = []

nicheCategoriesOrder.forEach((catKey) => {
  const items = frameNicheCategoriesData[catKey] || []
  items.forEach((item) => {
    allNicheCards.push({
      ...item,
      categoryKey: catKey
    })
  })
})

const TOTAL_NICHE_CARDS = allNicheCards.length // 12
const trackRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (trackRef.value) {
    trackRef.value.style.setProperty('--n', String(TOTAL_NICHE_CARDS))
  }
})
</script>

<template>
  <section class="_3Yq4tG_container" id="library">
    <div class="_3Yq4tG_top">
      <div class="_3Yq4tG_text reveal-blur">
        <div class="U5mb2W_container">
          <h2 data-analytics-section="extensions">Um vídeo para cada momento da sua empresa.</h2>
          <p>Formatos estratégicos sob medida para apresentar, engajar e posicionar seu negócio com autoridade.</p>
        </div>
      </div>
    </div>

    <!-- Carrossel 3D Cilíndrico de Formatos de Vídeo (Ana Tudor / CodePen) -->
    <div
      class="scene reveal-pop"
      id="niche3dScene"
      style="--pop-delay: 80ms"
      aria-label="Carrossel 3D cilíndrico de formatos de vídeo"
    >
      <div
        ref="trackRef"
        class="a3d"
        id="niche3dTrack"
        :style="{ '--n': TOTAL_NICHE_CARDS }"
      >
        <article
          v-for="(card, i) in allNicheCards"
          :key="card.title"
          class="niche-3d-card"
          :style="{
            '--i': i
          }"
        >
          <video
            class="niche-full-video"
            :src="card.video"
            :poster="card.poster"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            @loadeddata="(e) => (e.target as HTMLVideoElement).play().catch(() => {})"
          ></video>
        </article>
      </div>
    </div>

    <div class="_3Yq4tG_bottom">
      <div class="_3Yq4tG_browse">
        <a href="#videos" class="library-browse-button">
          <span>Ver todos os {{ corporateVideos.length }} vídeos</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.75 4.75 13.25 8m0 0-3.5 3.25M13.25 8H2.75"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isLandscape = ref(false)
let rotateTimer: any = null

const toggleOrientation = () => {
  isLandscape.value = !isLandscape.value
}

onMounted(() => {
  // O celular alterna automaticamente entre em pé (9:16 Reels) e deitado (16:9 Widescreen)
  rotateTimer = setInterval(() => {
    isLandscape.value = !isLandscape.value
  }, 4200)
})

onUnmounted(() => {
  if (rotateTimer) clearInterval(rotateTimer)
})
</script>

<template>
  <section class="portfolio-info container project-scope" id="producao">
    <div class="info-heading scroll-copy reveal-blur">
      <span class="section-label">ESTRUTURA & PROCESSO</span>
      <h2>Tudo alinhado.<br>Do primeiro take à entrega.</h2>
      <p>Equipamentos de padrão de cinema e método claro para valorizar o seu negócio em cada detalhe.</p>
    </div>

    <div class="scope-grid">
      <!-- Card 1: Câmera de Cinema & Celular 4K -->
      <article class="scope-card reveal-pop" style="--pop-delay: 0ms">
        <div class="scope-card-header">
          <h3>Câmera de Cinema & Celular 4K</h3>
          <p>A versatilidade certa para cada projeto: câmera de cinema Sony FX30 com lentes profissionais e celulares de última geração em 4K HDR para conteúdos ágeis.</p>
        </div>
        <div class="scope-visual-box scope-camera-box">
          <img class="scope-img-bg" src="/assets/sony-fx30-iphone.jpg" alt="Sony FX30 Cinema Line & iPhone" />
        </div>
      </article>

      <!-- Card 2: Luz, Gimbal e Áudio Profissional -->
      <article class="scope-card reveal-pop" style="--pop-delay: 90ms">
        <div class="scope-card-header">
          <h3>Luz, Gimbal e Áudio Profissional</h3>
          <p>Estabilizador gimbal para movimentos fluidos sem trepidações, iluminação dedicada para valorizar pessoas e produtos, e microfones para áudio cristalino.</p>
        </div>
        <div class="scope-visual-box scope-gimbal-box">
          <video class="scope-video-bg" src="/assets/scope-gimbal.mp4" autoplay muted loop playsinline></video>
        </div>
      </article>

      <!-- Card 3: Formatos e Estratégia sob Medida (Celular Realista Giratório com Vídeos) -->
      <article class="scope-card reveal-pop" style="--pop-delay: 180ms">
        <div class="scope-card-header">
          <h3>Formatos e Estratégia sob Medida</h3>
          <p>Definimos a quantidade de vídeos e os formatos ideais: Reels 9:16 para engajamento no Instagram e 16:9 horizontais para site, YouTube ou apresentações.</p>
        </div>
        <div
          class="scope-visual-box scope-phone-stage"
          :class="{ 'is-landscape': isLandscape }"
          @click="toggleOrientation"
          title="Toque para girar o celular"
        >
          <!-- Brilho ambiente no fundo -->
          <div class="phone-stage-glow"></div>

          <!-- Pílula de status do formato ativo -->
          <div class="phone-format-pill">
            <span class="pill-dot"></span>
            <span class="pill-text-vertical">9:16 Vertical · Reels</span>
            <span class="pill-text-horizontal">16:9 Horizontal · Site & TV</span>
          </div>

          <!-- Dica sutil de rotação -->
          <span class="phone-rotate-hint" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
            </svg>
            Girar
          </span>

          <!-- Celular Realista -->
          <div class="realistic-phone">
            <!-- Dynamic Island / Câmera frontal -->
            <div class="phone-notch"></div>

            <!-- Tela do Celular com Conteúdo de Vídeo Real -->
            <div class="phone-screen">
              <!-- Conteúdo 9:16 Vertical (Em Pé - Reels) -->
              <video
                class="screen-video video-portrait"
                src="/assets/scope-formats.mp4"
                autoplay
                muted
                loop
                playsinline
              ></video>

              <!-- Conteúdo 16:9 Horizontal (Deitado - Widescreen) -->
              <div class="landscape-video-wrapper">
                <video
                  class="screen-video video-landscape"
                  src="/assets/scope-formats-wide.mp4"
                  autoplay
                  muted
                  loop
                  playsinline
                ></video>
              </div>

              <!-- Barra Home inferior -->
              <div class="phone-home-bar"></div>
            </div>
          </div>
        </div>
      </article>

      <!-- Card 4: Edição, Cores e Entrega Pronta -->
      <article class="scope-card reveal-pop" style="--pop-delay: 270ms">
        <div class="scope-card-header">
          <h3>Edição, Cores e Entrega Pronta</h3>
          <p>Color grading cinematográfico, cortes dinâmicos no ritmo da mensagem, sound design imersivo, legendas animadas e arquivos finalizados para postar.</p>
        </div>
        <div class="scope-visual-box scope-editor-box">
          <video class="scope-video-bg" src="/assets/scope-editor.mp4" autoplay muted loop playsinline></video>
        </div>
      </article>
    </div>
  </section>
</template>

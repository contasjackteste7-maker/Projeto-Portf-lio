<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDetailModal } from '~/composables/useDetailModal'

const { openModal } = useDetailModal()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (import.meta.client) {
    document.body.classList.toggle('menu-locked', isMenuOpen.value)
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  if (import.meta.client) {
    document.body.classList.remove('menu-locked')
  }
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

const handleResize = () => {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    closeMenu()
  }
}

const openContact = () => {
  closeMenu()
  openModal(
    'Pedir orçamento',
    '<p>Me conte sobre seu negócio e o vídeo que você tem em mente. Vamos conversar sobre formato, produção e orçamento.</p><p>Este é um contato demonstrativo. Seu WhatsApp ou e-mail poderá ser vinculado aqui.</p><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="_3dJGfa_button _3dJGfa_light pill">Conversar no WhatsApp →</a>'
  )
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header
    id="navbar"
    class="pSp8Ga_container"
    :class="{
      'scrolled': isScrolled,
      'pSp8Ga_menuOpened': isMenuOpen
    }"
    @click.self="closeMenu"
  >
    <div class="pSp8Ga_navbar">
      <div class="pSp8Ga_logoContainer">
        <a href="#" class="pSp8Ga_brand" aria-label="FRAME Início" @click="closeMenu">
          <div class="pSp8Ga_brandIcon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5.5" fill="#FF6363" />
              <path d="M7 9.5V7h2.5M17 9.5V7h-2.5M7 14.5V17h2.5M17 14.5V17h-2.5" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="12" cy="12" r="1.8" fill="#ffffff" />
            </svg>
          </div>
          <span class="pSp8Ga_brandFull">FRAME</span>
        </a>
        <button
          id="navToggle"
          class="pSp8Ga_navToggle"
          type="button"
          :aria-expanded="isMenuOpen"
          :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
          @click="toggleMenu"
        >
          <span class="pSp8Ga_navToggleLine"></span>
          <span class="pSp8Ga_navToggleLine"></span>
          <span class="pSp8Ga_navToggleLine"></span>
        </button>
      </div>

      <div class="pSp8Ga_navigation">
        <a class="qZd0pW_navLink" href="#library" @click="closeMenu">Destaques</a>
        <a class="qZd0pW_navLink" href="#videos" @click="closeMenu">Vídeos</a>
        <a class="qZd0pW_navLink" href="#servicos" @click="closeMenu">Serviços</a>
        <a class="qZd0pW_navLink" href="#etapas" @click="closeMenu">Processo</a>
        <a class="qZd0pW_navLink" href="#duvidas" @click="closeMenu">Dúvidas</a>
        <a class="qZd0pW_navLink" href="#portfolio" @click="closeMenu">Instagram</a>
      </div>

      <div class="pSp8Ga_secondary">
        <div class="pSp8Ga_signedOutWide">
          <a class="qZd0pW_navLink" href="#videos" @click="closeMenu">Ver vídeos</a>
          <button class="_3dJGfa_button _3dJGfa_light pSp8Ga_downloadButton" type="button" @click="openContact">
            <span class="Y1tPWW_icon Y1tPWW_hydrated">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4l2 2 2-2h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
              </svg>
            </span>
            <span class="Y1tPWW_label Y1tPWW_hydrated">Pedir orçamento</span>
          </button>
        </div>
        <div class="pSp8Ga_signedOutMedium">
          <button class="_3dJGfa_button _3dJGfa_light" type="button" @click="openContact">
            Orçamento
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

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
    '<p>Me conte sobre seu negócio e o vídeo que você tem em mente. Vamos conversar sobre formato, produção e orçamento.</p><a href="https://wa.me/5554996509183?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20de%20v%C3%ADdeo." target="_blank" rel="noopener noreferrer" class="_3dJGfa_button _3dJGfa_light pill">Conversar no WhatsApp →</a>'
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
          <a
            class="_3dJGfa_button _3dJGfa_light pSp8Ga_downloadButton"
            href="https://wa.me/5554996509183?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20de%20v%C3%ADdeo."
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMenu"
          >
            <span class="Y1tPWW_icon Y1tPWW_hydrated">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4l2 2 2-2h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
              </svg>
            </span>
            <span class="Y1tPWW_label Y1tPWW_hydrated">Pedir orçamento</span>
          </a>
        </div>
        <div class="pSp8Ga_signedOutMedium">
          <a
            class="_3dJGfa_button _3dJGfa_light"
            href="https://wa.me/5554996509183?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20de%20v%C3%ADdeo."
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMenu"
          >
            Orçamento
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

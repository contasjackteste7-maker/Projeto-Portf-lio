<template>
  <footer class="container">
    <span aria-label="4k Creative" class="footer-word">4K CREATIVE</span>
    <div>
      <span>Vídeos empresariais e conteúdo para Instagram</span>
      <a href="#" @click.prevent="scrollToTop">Voltar ao topo ↑</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

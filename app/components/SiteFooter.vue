<template>
  <footer class="container">
    <span aria-label="FRAME" class="footer-word">FRAME</span>
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

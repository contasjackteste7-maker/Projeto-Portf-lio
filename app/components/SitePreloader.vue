<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)
const isHidden = ref(false)

onMounted(() => {
  document.body.classList.add('preload-active')

  const minDuration = 1800 // Tempo ideal para ver a rotação dos blocos

  const finishLoading = () => {
    isLoaded.value = true
    document.body.classList.remove('preload-active')
    setTimeout(() => {
      isHidden.value = true
    }, 700)
  }

  if (document.readyState === 'complete') {
    setTimeout(finishLoading, minDuration)
  } else {
    const timer = setTimeout(finishLoading, minDuration + 400)
    window.addEventListener('load', () => {
      clearTimeout(timer)
      setTimeout(finishLoading, 400)
    }, { once: true })
  }
})
</script>

<template>
  <div
    v-if="!isHidden"
    class="site-preloader"
    :class="{ 'is-complete': isLoaded }"
    aria-hidden="true"
  >
    <!-- From Uiverse.io by ZacharyCrespin -->
    <div class="loader">
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
    </div>

    <!-- Carregando em baixo com a fonte Bai Jamjuree -->
    <div class="loader-label">Carregando...</div>
  </div>
</template>

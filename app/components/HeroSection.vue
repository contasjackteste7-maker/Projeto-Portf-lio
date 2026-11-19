<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDetailModal } from '~/composables/useDetailModal'

const { openModal } = useDetailModal()

const icons = ['videomaker-camera', 'videomaker-clapper', 'videomaker-instagram']
const slotIcons = ref([0, 1, 2])
const slotSwapping = ref([false, false, false])

let autoTimer: any = null
let nextSlot = 0

const swapIcon = (index: number) => {
  if (slotSwapping.value[index]) return
  slotSwapping.value[index] = true
  setTimeout(() => {
    slotIcons.value[index] = (slotIcons.value[index] + 1) % icons.length
    slotSwapping.value[index] = false
  }, 260)
}

const openContact = () => {
  openModal(
    'Pedir orçamento',
    '<p>Me conte sobre seu negócio e o vídeo que você tem em mente. Vamos conversar sobre formato, produção e orçamento.</p><p>Este é um contato demonstrativo. Seu WhatsApp ou e-mail poderá ser vinculado aqui.</p><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="_3dJGfa_button _3dJGfa_light pill">Conversar no WhatsApp →</a>'
  )
}

onMounted(() => {
  setTimeout(() => {
    swapIcon(nextSlot)
    nextSlot = (nextSlot + 1) % slotIcons.value.length
    autoTimer = setInterval(() => {
      if (document.hidden) return
      swapIcon(nextSlot)
      nextSlot = (nextSlot + 1) % slotIcons.value.length
    }, 1700)
  }, 3200)
})

onUnmounted(() => {
  if (autoTimer) clearInterval(autoTimer)
})
</script>

<template>
  <section class="hero">
    <h1>
      <span class="line">
        <span class="hero-word" style="--w-delay: 50ms">Sua</span>
        <span class="hero-word" style="--w-delay: 130ms">empresa</span>
        <span class="slot">
          <button aria-label="Trocar ícone audiovisual" type="button" @click="swapIcon(0)">
            <img
              :src="`/assets/${icons[slotIcons[0]]}.svg`"
              :class="{ 'swapping': slotSwapping[0] }"
              alt=""
            />
          </button>
        </span>
      </span>
      <span class="line">
        <span class="hero-word" style="--w-delay: 240ms">merece</span>
        <span class="slot">
          <button aria-label="Trocar ícone audiovisual" type="button" @click="swapIcon(1)">
            <img
              :src="`/assets/${icons[slotIcons[1]]}.svg`"
              :class="{ 'swapping': slotSwapping[1] }"
              alt=""
            />
          </button>
        </span>
        <span class="hero-word" style="--w-delay: 360ms">destaque.</span>
      </span>
      <span class="line">
        <span class="hero-word" style="--w-delay: 470ms">No</span>
        <span class="hero-word" style="--w-delay: 540ms">feed</span>
        <span class="slot">
          <button aria-label="Trocar ícone audiovisual" type="button" @click="swapIcon(2)">
            <img
              :src="`/assets/${icons[slotIcons[2]]}.svg`"
              :class="{ 'swapping': slotSwapping[2] }"
              alt=""
            />
          </button>
        </span>
        <span class="hero-word" style="--w-delay: 650ms">e</span>
        <span class="hero-word" style="--w-delay: 720ms">além.</span>
      </span>
    </h1>

    <p class="hero-subtext">
      Produção audiovisual estratégica para quem quer se posicionar com autoridade.<br />
      Do primeiro impacto no Instagram ao vídeo definitivo para o seu negócio.
    </p>

    <div class="actions hero-actions">
      <button class="_3dJGfa_button _3dJGfa_light pill black" type="button" @click="openContact">
        <span class="Y1tPWW_icon Y1tPWW_hydrated">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4l2 2 2-2h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
          </svg>
        </span>
        <span class="Y1tPWW_label Y1tPWW_hydrated">Pedir orçamento</span>
      </button>

      <a class="_3dJGfa_button _3dJGfa_dark pill gray" href="#videos">
        <span class="Y1tPWW_label Y1tPWW_hydrated">Ver trabalhos</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 3.5 10.5 8 6 12.5" />
        </svg>
      </a>
    </div>
  </section>
</template>

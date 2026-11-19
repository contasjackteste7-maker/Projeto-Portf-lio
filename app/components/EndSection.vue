<script setup lang="ts">
import { useDetailModal } from '~/composables/useDetailModal'

const { openModal } = useDetailModal()

const onRequestQuote = () => {
  openModal(
    'Pedir orçamento',
    '<p>Me conte sobre seu negócio e o vídeo que você tem em mente. Vamos conversar sobre formato, produção e orçamento.</p><p>Este é um contato demonstrativo. Seu WhatsApp ou e-mail poderá ser vinculado aqui.</p><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="_3dJGfa_button _3dJGfa_light">Conversar no WhatsApp →</a>'
  )
}
</script>

<template>
  <section class="end-section" id="plans">
    <div class="reveal-blur">
      <h2>O que sua empresa<br/>precisa mostrar?</h2>
      <p>Me conte sobre seu negócio e o vídeo que você tem em mente.<br/>Vamos conversar sobre formato, produção e orçamento.</p>
    </div>
    <div class="actions reveal-pop" style="--pop-delay: 150ms">
      <button class="_3dJGfa_button _3dJGfa_light pill black" type="button" @click="onRequestQuote">
        <span class="Y1tPWW_icon Y1tPWW_hydrated">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4l2 2 2-2h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
          </svg>
        </span>
        <span class="Y1tPWW_label Y1tPWW_hydrated">Pedir orçamento</span>
      </button>
      <a class="_3dJGfa_button _3dJGfa_dark pill gray" href="#videos">
        <span class="Y1tPWW_label Y1tPWW_hydrated">Ver projetos</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 3.5 10.5 8 6 12.5"/>
        </svg>
      </a>
    </div>
  </section>
</template>

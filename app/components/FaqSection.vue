<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    q: 'Ainda não tenho uma ideia pronta. Posso entrar em contato?',
    a: 'Sim. Podemos começar pelo objetivo da sua empresa. Ajudamos a planejar desde a ideia até o roteiro e formato ideal (seja institucional ou Reels para o Instagram).'
  },
  {
    q: 'Quais tipos de vídeos vocês produzem?',
    a: 'Nosso foco são vídeos para Instagram (Reels verticais dinâmicos que prendem a atenção e convertem) e vídeos institucionais de alto padrão para apresentar sua marca, equipe, estrutura e autoridade.'
  },
  {
    q: 'Qual equipamento é utilizado nas gravações?',
    a: 'Trabalhamos com equipamentos de padrão de cinema: câmera de cinema Sony FX30 com lentes profissionais, celulares de última geração em 4K, estabilizador gimbal para tomadas fluidas, kit de iluminação dedicado e captação de áudio cristalino.'
  },
  {
    q: 'Preciso aparecer no vídeo?',
    a: 'Depende da estratégia. Podemos produzir vídeos focados exclusivamente em produtos, ambientes, processos e bastidores, ou gravar depoimentos e falas guiadas com você e sua equipe.'
  },
  {
    q: 'Qual é o valor e o prazo?',
    a: 'Eles dependem da quantidade de vídeos, do formato escolhido e da complexidade da produção. Fale conosco para montarmos uma proposta sob medida com escopo e prazos definidos.'
  }
]
</script>

<template>
  <section class="portfolio-info container faq-section" id="duvidas">
    <div class="info-heading scroll-copy reveal-blur">
      <span class="section-label">DÚVIDAS FREQUENTES</span>
      <h2>Antes de apertar <br>o rec.</h2>
      <p>Algumas respostas para você começar a imaginar seu projeto.</p>
    </div>
    <div class="faq-list">
      <div
        v-for="(item, index) in faqs"
        :key="item.q"
        class="faq-item"
        :class="{ 'is-open': openIndex === index }"
      >
        <button
          class="faq-question"
          type="button"
          :aria-expanded="openIndex === index"
          @click="toggleFaq(index)"
        >
          <span class="faq-question-text">{{ item.q }}</span>
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer-collapse">
          <div class="faq-answer-inner">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

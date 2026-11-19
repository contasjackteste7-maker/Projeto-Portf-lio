<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useDetailModal } from '~/composables/useDetailModal'

const { modal, closeModal } = useDetailModal()
const dialogRef = ref<HTMLDialogElement | null>(null)

watch(() => modal.value.isOpen, (open) => {
  if (!dialogRef.value) return
  if (open) {
    if (!dialogRef.value.open) {
      dialogRef.value.showModal()
    }
  } else {
    if (dialogRef.value.open) {
      dialogRef.value.close()
    }
  }
})

const onBackdropClick = (e: MouseEvent) => {
  if (!dialogRef.value) return
  if (e.target === dialogRef.value) {
    const r = dialogRef.value.getBoundingClientRect()
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      closeModal()
    }
  }
}

onMounted(() => {
  if (dialogRef.value) {
    dialogRef.value.addEventListener('close', () => {
      if (modal.value.isOpen) {
        closeModal()
      }
    })
  }
})
</script>

<template>
  <Teleport to="body">
    <dialog
      ref="dialogRef"
      id="detail"
      @click="onBackdropClick"
    >
      <button aria-label="Fechar" class="close" type="button" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 4 4 12M4 4l8 8"/>
        </svg>
      </button>
      <h2 id="dialogTitle">{{ modal.title }}</h2>
      <div id="dialogBody" v-html="modal.htmlContent"></div>
    </dialog>
  </Teleport>
</template>

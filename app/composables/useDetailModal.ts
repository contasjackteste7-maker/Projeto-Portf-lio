interface ModalState {
  isOpen: boolean
  title: string
  htmlContent: string
  videoSrc?: string
}

export const useDetailModal = () => {
  const modal = useState<ModalState>('detail-modal', () => ({
    isOpen: false,
    title: '',
    htmlContent: '',
    videoSrc: ''
  }))

  const openModal = (title: string, htmlContent: string, videoSrc: string = '') => {
    modal.value = {
      isOpen: true,
      title,
      htmlContent,
      videoSrc
    }
  }

  const closeModal = () => {
    modal.value.isOpen = false
  }

  return {
    modal,
    openModal,
    closeModal
  }
}

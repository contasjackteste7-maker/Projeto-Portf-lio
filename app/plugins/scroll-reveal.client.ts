export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const observeTargets = () => {
      const elements = document.querySelectorAll(
        '.reveal-blur, .reveal-pop, .scroll-copy, .profile-intro, .video-gallery-kicker, .info-heading'
      )
      elements.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          revealObserver.observe(el)
        }
      })
    }

    // Run initially
    observeTargets()

    // Observe newly dynamically rendered DOM nodes (e.g. video load more)
    const mutationObserver = new MutationObserver(() => {
      observeTargets()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
})

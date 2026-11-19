const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const header=document.querySelector('header');
function scrollState(){if(header)header.classList.toggle('scrolled',scrollY>60)}
addEventListener('scroll',scrollState,{passive:true});scrollState();

const navContainer=document.querySelector('.pSp8Ga_container'),navToggle=document.querySelector('.pSp8Ga_navToggle');
function setMobileMenu(open){
 if(!navContainer||!navToggle)return;
 navContainer.classList.toggle('pSp8Ga_menuOpened',open);
 document.body.classList.toggle('menu-locked',open);
 navToggle.setAttribute('aria-expanded',String(open));
 navToggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
}
if(navToggle){navToggle.addEventListener('click',()=>setMobileMenu(!navContainer.classList.contains('pSp8Ga_menuOpened')))}
document.querySelectorAll('.pSp8Ga_navigation a, .pSp8Ga_secondary a, .pSp8Ga_secondary button, [data-menu-link]').forEach(item=>item.addEventListener('click',()=>setMobileMenu(false)));
addEventListener('keydown',event=>{if(event.key==='Escape'&&navContainer&&navContainer.classList.contains('pSp8Ga_menuOpened'))setMobileMenu(false)});
addEventListener('resize',()=>{if(innerWidth>=768&&navContainer&&navContainer.classList.contains('pSp8Ga_menuOpened'))setMobileMenu(false)});
const icons=['videomaker-camera','videomaker-clapper','videomaker-instagram'];
const heroIconButtons=[...document.querySelectorAll('.slot button')];
// Each slot owns its icon state; automatic changes are staggered, one at a time.
const swapHeroIcon=heroIconButtons.map((button,index)=>{
 let step=index,busy=false;
 return ()=>{
  if(busy||document.hidden)return;
  const img=button.querySelector('img');
  const update=()=>{step=(step+1)%icons.length;img.src=`assets/${icons[step]}.svg`;img.classList.remove('swapping');busy=false};
  if(reduced){update();return}
  busy=true;img.classList.add('swapping');setTimeout(update,260);
 };
});
heroIconButtons.forEach((button,index)=>button.onclick=swapHeroIcon[index]);
if(!reduced){let nextSlot=0;setTimeout(()=>{swapHeroIcon[nextSlot]();nextSlot=(nextSlot+1)%swapHeroIcon.length;setInterval(()=>{swapHeroIcon[nextSlot]();nextSlot=(nextSlot+1)%swapHeroIcon.length},1700)},3200)}
const dialog=document.querySelector('#detail');function openDialog(title,html){document.querySelector('#dialogTitle').textContent=title;document.querySelector('#dialogBody').innerHTML=html;dialog.showModal()}dialog.querySelector('.close').onclick=()=>dialog.close();dialog.onclick=e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}};
document.querySelectorAll('[data-dialog]').forEach(b=>b.onclick=()=>openDialog(b.dataset.dialog || 'Pedir orçamento','<p>Conte o que sua empresa faz, o que precisa mostrar e onde pretende publicar o vídeo.</p><p>Contato demonstrativo: seu WhatsApp ou e-mail será adicionado aqui.</p><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="_3dJGfa_button _3dJGfa_light">Conversar no WhatsApp →</a>'));
const b2Videos = [
  "videos/SaveClip.App_AQMNVo8LajO0LJTSY76RRJEGqHnQeqsG9ugyp2D5T7xlOkdE1ocT4ehV5aVNQGr57WGZajNi6O3ZMVlQoqjsZ0TwzL6j8qWxJYjbg_s.mp4",
  "videos/SaveClip.App_AQMN_ghxUvwuqApzkIr-Z6b-ZYvc-bKBCTmHtCIuyuzfUqMny-HWB6WQKY-u-pjfTT9Iq-olPr1S9FWYQpC3Yox8goeZYi5PqMGMhgk.mp4",
  "videos/SaveClip.App_AQMmOOCjSxnuygrzK13fNthyOPuCPQWMvYb7Mjsnkk7OrVqIereZuD-d65AWAo-i95cWXzs3NbYrCa5fJsFqj6KI0gxXqHNjfu_qK1w.mp4",
  "videos/SaveClip.App_AQPQ1fVM98RYBmuqhhKs2yi9zzCfj1x_Ft2YgpP0uRXGXKRepU7_BRKGAgMo7iZd1pkDVT-6hiVH4NRBUX5-76WjGcWL1EYyNL39jdY.mp4",
  "videos/SaveClip.App_AQNGq58JUv8zOkRaZXfabpjaUuXvESLZ1r8rEzaZ1I7quPApxcdexwLCpBKtzv0Yx1AbjIpmLbfUs2zERdCDWozBDQ.mp4",
  "videos/snapinsta-1795041811996.mp4",
  "videos/SaveClip.App_AQO-R00O2pvXQfpkhqkh1VjCER-0D5Vww6kX5n7hDIj_dTK1IVarf9RPvOuwpNr6WLKXS80UTwPSgLm3pcmKVeljh5BX5q-WbjLaU3Y.mp4",
  "videos/snapinsta-1795039920790.mp4",
  "videos/snapinsta-1795039939758.mp4",
  "videos/snapinsta-1795039967501.mp4",
  "videos/snapinsta-1795039990353.mp4",
  "videos/snapinsta-1795040018071.mp4"
];

const previewVideos = [
  "videos/preview/preview-0.mp4",
  "videos/preview/preview-1.mp4",
  "videos/preview/preview-2.mp4",
  "videos/preview/preview-3.mp4",
  "videos/preview/preview-4.mp4",
  "videos/preview/preview-5.mp4",
  "videos/preview/preview-6.mp4",
  "videos/preview/preview-7.mp4",
  "videos/preview/preview-8.mp4",
  "videos/preview/preview-9.mp4",
  "videos/preview/preview-10.mp4",
  "videos/preview/preview-11.mp4"
];

const realPosters = [
  "videos/posters/poster-0.jpg",
  "videos/posters/poster-1.jpg",
  "videos/posters/poster-2.jpg",
  "videos/posters/poster-3.jpg",
  "videos/posters/poster-4.jpg",
  "videos/posters/poster-5.jpg",
  "videos/posters/poster-6.jpg",
  "videos/posters/poster-7.jpg",
  "videos/posters/poster-8.jpg",
  "videos/posters/poster-9.jpg",
  "videos/posters/poster-10.jpg",
  "videos/posters/poster-11.jpg"
];

const corporateVideos = [
  {
    title: "Apresentação Institucional",
    category: "Institucional",
    desc: "A história, estrutura e valores da sua empresa contados com dinamismo e clareza.",
    video: b2Videos[0],
    poster: realPosters[0],
    duration: "0:45",
    glow: "rgba(255, 99, 99, 0.45)",
    accent: "#ff6363",
    artGradient: "linear-gradient(145deg, #1c0f16 0%, #3a1523 45%, #0d0a12 100%)",
    flare: "radial-gradient(circle, #ff6363 0%, transparent 70%)",
    format: "4K 60FPS",
    clientName: "AssisNet",
    clientHandle: "@assisnet",
    clientLogo: "",
    likes: "2.4k",
    comments: "142"
  },
  {
    title: "Lançamento de Produto",
    category: "Produtos",
    desc: "Close-ups detalhados, iluminação de cinema e ritmo que valoriza cada detalhe.",
    video: b2Videos[1],
    poster: realPosters[1],
    duration: "0:30",
    glow: "rgba(180, 40, 240, 0.45)",
    accent: "#b428f0",
    artGradient: "linear-gradient(145deg, #130a21 0%, #2f104d 45%, #080614 100%)",
    flare: "radial-gradient(circle, #b428f0 0%, transparent 70%)",
    format: "4K PRORES",
    clientName: "AssisNet",
    clientHandle: "@assisnet",
    clientLogo: "",
    likes: "3.8k",
    comments: "286"
  },
  {
    title: "Cobertura de Evento",
    category: "Eventos",
    desc: "A energia das palestras, o público e o networking captados no momento certo.",
    video: b2Videos[2],
    poster: realPosters[2],
    duration: "1:00",
    glow: "rgba(2, 140, 160, 0.45)",
    accent: "#02b4d8",
    artGradient: "linear-gradient(145deg, #071924 0%, #0d384d 45%, #040c14 100%)",
    flare: "radial-gradient(circle, #02b4d8 0%, transparent 70%)",
    format: "HDR 10-BIT",
    clientName: "Evento Summit",
    clientHandle: "@summitbrasil",
    clientLogo: "",
    likes: "1.9k",
    comments: "98"
  },
  {
    title: "Bastidores da Operação",
    category: "Bastidores",
    desc: "Mostre o cuidado da equipe e os processos que tornam sua entrega impecável.",
    video: b2Videos[3],
    poster: realPosters[3],
    duration: "0:35",
    glow: "rgba(220, 130, 20, 0.45)",
    accent: "#f09814",
    artGradient: "linear-gradient(145deg, #241407 0%, #4a290d 45%, #100804 100%)",
    flare: "radial-gradient(circle, #f09814 0%, transparent 70%)",
    format: "4K S-LOG3",
    clientName: "Bastidores Pro",
    clientHandle: "@bastidores",
    clientLogo: "",
    likes: "1.2k",
    comments: "64"
  },
  {
    title: "Depoimento de Cliente",
    category: "Depoimentos",
    desc: "Histórias reais de quem contratou, gerando confiança e autoridade imediata.",
    video: b2Videos[4],
    poster: realPosters[4],
    duration: "0:50",
    glow: "rgba(13, 140, 65, 0.45)",
    accent: "#10c85c",
    artGradient: "linear-gradient(145deg, #071f14 0%, #0f4228 45%, #041009 100%)",
    flare: "radial-gradient(circle, #10c85c 0%, transparent 70%)",
    format: "4K 30FPS",
    clientName: "Case Sucesso",
    clientHandle: "@casesucesso",
    clientLogo: "",
    likes: "2.1k",
    comments: "115"
  },
  {
    title: "Reels de Alto Impacto",
    category: "Instagram",
    desc: "Ganchos magnéticos nos primeiros 3 segundos para reter atenção e gerar engajamento.",
    video: b2Videos[5],
    poster: realPosters[5],
    duration: "0:25",
    glow: "rgba(220, 40, 120, 0.45)",
    accent: "#dc2878",
    artGradient: "linear-gradient(145deg, #240718 0%, #4d1033 45%, #10040c 100%)",
    flare: "radial-gradient(circle, #dc2878 0%, transparent 70%)",
    format: "REELS 9:16",
    clientName: "Impacto Reels",
    clientHandle: "@impactoreels",
    clientLogo: "",
    likes: "5.4k",
    comments: "420"
  },
  {
    title: "Tour pelas Instalações",
    category: "Institucional",
    desc: "Imagens com movimentos fluidos apresentando o ambiente moderno da sua sede.",
    video: b2Videos[6],
    poster: realPosters[6],
    duration: "0:40",
    glow: "rgba(4, 80, 180, 0.45)",
    accent: "#0070f3",
    artGradient: "linear-gradient(145deg, #081224 0%, #10294d 45%, #040914 100%)",
    flare: "radial-gradient(circle, #0070f3 0%, transparent 70%)",
    format: "4K GIMBAL",
    clientName: "Sede Corporativa",
    clientHandle: "@corporativo",
    clientLogo: "",
    likes: "1.7k",
    comments: "82"
  },
  {
    title: "Série Educativa & Dicas",
    category: "Instagram",
    desc: "Vídeos rápidos tirando as principais dúvidas do seu cliente com motion design.",
    video: b2Videos[7],
    poster: realPosters[7],
    duration: "0:30",
    glow: "rgba(220, 110, 30, 0.45)",
    accent: "#ff7a29",
    artGradient: "linear-gradient(145deg, #241206 0%, #4a270a 45%, #100702 100%)",
    flare: "radial-gradient(circle, #ff7a29 0%, transparent 70%)",
    format: "MOTION 4K",
    clientName: "Assistech",
    clientHandle: "@assistech",
    clientLogo: "",
    likes: "3.2k",
    comments: "194"
  },
  {
    title: "Cultura e Equipe",
    category: "Bastidores",
    desc: "Apresente quem faz acontecer e fortaleça a marca empregadora do seu negócio.",
    video: b2Videos[8],
    poster: realPosters[8],
    duration: "0:45",
    glow: "rgba(130, 60, 210, 0.45)",
    accent: "#8a42f5",
    artGradient: "linear-gradient(145deg, #180a26 0%, #34124f 45%, #0a0414 100%)",
    flare: "radial-gradient(circle, #8a42f5 0%, transparent 70%)",
    format: "CINEMA 24P",
    clientName: "Time & Cultura",
    clientHandle: "@cultura",
    clientLogo: "",
    likes: "1.5k",
    comments: "91"
  },
  {
    title: "Demonstração Prática",
    category: "Produtos",
    desc: "Passo a passo visual e didático mostrando a facilidade e eficiência da sua solução.",
    video: b2Videos[9],
    poster: realPosters[9],
    duration: "0:35",
    glow: "rgba(3, 130, 200, 0.45)",
    accent: "#00b4d8",
    artGradient: "linear-gradient(145deg, #061926 0%, #0c3954 45%, #030d17 100%)",
    flare: "radial-gradient(circle, #00b4d8 0%, transparent 70%)",
    format: "4K MACRO",
    clientName: "Assistech",
    clientHandle: "@assistech",
    clientLogo: "",
    likes: "2.8k",
    comments: "163"
  },
  {
    title: "Case de Sucesso",
    category: "Depoimentos",
    desc: "Narrativa com métricas de resultados e transformação antes e depois.",
    video: b2Videos[10],
    poster: realPosters[10],
    duration: "1:15",
    glow: "rgba(255, 80, 100, 0.45)",
    accent: "#ff4d6d",
    artGradient: "linear-gradient(145deg, #240a12 0%, #4a1324 45%, #120409 100%)",
    flare: "radial-gradient(circle, #ff4d6d 0%, transparent 70%)",
    format: "DOCUMENTÁRIO",
    clientName: "Transformação",
    clientHandle: "@transformacao",
    clientLogo: "",
    likes: "4.1k",
    comments: "250"
  },
  {
    title: "Aftermovie de Celebração",
    category: "Eventos",
    desc: "Os melhores momentos de comemorações e premiações com ritmo eletrizante.",
    video: b2Videos[11],
    poster: realPosters[11],
    duration: "0:55",
    glow: "rgba(170, 20, 160, 0.45)",
    accent: "#c724b1",
    artGradient: "linear-gradient(145deg, #240822 0%, #4a1147 45%, #120311 100%)",
    flare: "radial-gradient(circle, #c724b1 0%, transparent 70%)",
    format: "DYNAMIC CUT",
    clientName: "Festa & Celebração",
    clientHandle: "@aftermovie",
    clientLogo: "",
    likes: "3.6k",
    comments: "210"
  }
];

/* ==========================================================================
   3D Cylindrical Video Carousel (Ana Tudor / CodePen inspired)
   ========================================================================== */
/* ==========================================================================
   Section #videos: 3-Column Vertical Video Gallery
   ========================================================================== */
const videoGrid = document.querySelector('#videoGrid');
const loadMoreBtn = document.querySelector('#loadMoreVideos');
const videoCountBadge = document.querySelector('#videoCountBadge');
let currentLoadedCount = 0;
const BATCH_SIZE = 6;

function createVideoCardElement(item, index, delay) {
  const card = document.createElement('article');
  card.className = 'video-grid-card';
  card.style.setProperty('--delay', `${delay}ms`);
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'region');
  card.setAttribute('aria-label', `${item.title} — ${item.category}`);

  const clientName = item.clientName || 'AssisNet';
  const clientHandle = item.clientHandle || `@${clientName.toLowerCase().replace(/\s+/g, '')}`;
  const authorInitial = clientName.charAt(0).toUpperCase();
  const logoMarkup = item.clientLogo
    ? `<img src="${item.clientLogo}" alt="${clientName}" class="client-badge-logo">`
    : `<div class="client-badge-text-wrap"><span class="client-badge-dot"></span><span class="client-badge-name">${clientName}</span></div>`;

  card.innerHTML = `
    <div class="card-screen-frame">
      <img src="${item.poster}" alt="${item.title}" class="card-poster-thumb" loading="lazy">
      <video class="video-grid-player" poster="${item.poster}" muted loop playsinline preload="metadata">
        <source src="${item.video}" type="video/mp4">
      </video>
      <div class="card-media-overlay"></div>

      <!-- Top Reels HUD: Instagram Button -->
      <div class="screen-hud-top">
        <a href="${item.instagramUrl || 'https://www.instagram.com/'}" target="_blank" rel="noopener noreferrer" class="hud-tag hud-instagram-btn" title="Abrir vídeo no Instagram" onclick="event.stopPropagation()">
          <svg class="hud-ig-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span>Instagram</span>
          <svg class="hud-arrow-icon" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17l9.2-9.2M17 17V8H8"/>
          </svg>
        </a>
      </div>

      <!-- Center Buffer Loader: Animação dos cubos na frente da miniatura -->
      <div class="video-card-loader" style="display:none" aria-hidden="true">
        <div class="video-card-loader-badge">
          <div class="loader">
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
          </div>
        </div>
      </div>

      <!-- Center Play Button (Botão de Play Premium Glassmorphism) -->
      <div class="screen-play-container">
        <button class="screen-play-btn" type="button" aria-label="Assistir ${item.title}">
          <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.5 5.75c0-.98 1.07-1.58 1.91-1.07l9.88 5.99c.79.48.79 1.66 0 2.14l-9.88 5.99c-.84.51-1.91-.09-1.91-1.07V5.75z"/>
          </svg>
        </button>
      </div>

      <!-- Bottom Right: Somente o Indicador Verdinho de Som -->
      <div class="screen-sound-hud">
        <div class="wave-bars">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>

      <!-- Interactive Progress Bar -->
      <div class="screen-progress">
        <div class="screen-progress-fill"></div>
      </div>
    </div>
  `;

  const video = card.querySelector('video');
  const playContainer = card.querySelector('.screen-play-container');
  const playBtn = card.querySelector('.screen-play-btn');
  const loaderEl = card.querySelector('.video-card-loader');
  const progressFill = card.querySelector('.screen-progress-fill');

  function showLoader() {
    if (loaderEl) loaderEl.style.display = 'flex';
    if (playContainer) playContainer.style.display = 'none';
    card.classList.add('is-buffering');
  }

  function hideLoader() {
    if (loaderEl) loaderEl.style.display = 'none';
    card.classList.remove('is-buffering');
  }

  function markActivePlaying() {
    card.classList.add('is-active-playing');
    hideLoader();
    if (playContainer) playContainer.style.display = 'none';
  }

  function togglePlay(event) {
    if (event) event.stopPropagation();
    const isCurrentlyPlaying = card.classList.contains('is-playing');

    if (isCurrentlyPlaying) {
      video.pause();
      card.classList.remove('is-playing', 'is-active-playing', 'is-buffering');
      hideLoader();
      if (playContainer) playContainer.style.display = 'flex';
    } else {
      document.querySelectorAll('.video-grid-card.is-playing').forEach(otherCard => {
        if (otherCard !== card) {
          const otherVideo = otherCard.querySelector('video');
          if (otherVideo) otherVideo.pause();
          otherCard.classList.remove('is-playing', 'is-active-playing', 'is-buffering');
          const otherPlay = otherCard.querySelector('.screen-play-container');
          const otherLoader = otherCard.querySelector('.video-card-loader');
          if (otherPlay) otherPlay.style.display = 'flex';
          if (otherLoader) otherLoader.style.display = 'none';
        }
      });

      card.classList.add('is-playing');
      card.classList.remove('is-active-playing');
      if (playContainer) playContainer.style.display = 'none';

      if (video.readyState < 3) {
        showLoader();
      }

      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          markActivePlaying();
        }).catch(() => {
          video.muted = true;
          video.play().then(() => {
            markActivePlaying();
          }).catch(() => {
            hideLoader();
            card.classList.remove('is-playing', 'is-active-playing');
            if (playContainer) playContainer.style.display = 'flex';
          });
        });
      }
    }
  }

  video.addEventListener('waiting', () => {
    if (card.classList.contains('is-playing')) {
      showLoader();
    }
  });

  video.addEventListener('playing', () => {
    markActivePlaying();
  });

  video.addEventListener('canplay', () => {
    if (card.classList.contains('is-playing') && video.currentTime > 0) {
      markActivePlaying();
    }
  });

  video.addEventListener('timeupdate', () => {
    if (video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      progressFill.style.width = `${pct}%`;
    }
    if (card.classList.contains('is-playing') && video.currentTime > 0) {
      markActivePlaying();
    }
  });

  video.addEventListener('ended', () => {
    card.classList.remove('is-playing', 'is-active-playing', 'is-buffering');
    hideLoader();
    if (playContainer) playContainer.style.display = 'flex';
    progressFill.style.width = '0%';
  });

  card.addEventListener('click', togglePlay);
  if (playBtn) playBtn.addEventListener('click', togglePlay);

  return card;
}

function loadNextVideoBatch() {
  if (!videoGrid) return;
  const start = currentLoadedCount;
  const end = Math.min(start + BATCH_SIZE, corporateVideos.length);

  for (let i = start; i < end; i++) {
    const delay = (i - start) * 90;
    const cardEl = createVideoCardElement(corporateVideos[i], i, delay);
    videoGrid.appendChild(cardEl);
  }

  currentLoadedCount = end;
  if (videoCountBadge) {
    videoCountBadge.textContent = `${currentLoadedCount} de ${corporateVideos.length}`;
  }

  if (loadMoreBtn && currentLoadedCount >= corporateVideos.length) {
    loadMoreBtn.style.display = 'none';
  }
}

if (videoGrid) {
  loadNextVideoBatch();
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadNextVideoBatch);
  }
}



document.querySelectorAll('.video-feature').forEach(card=>{
 const video=card.querySelector('video'),play=card.querySelector('.play-symbol'),fullscreen=card.querySelector('.video-fullscreen'),error=card.querySelector('.video-error');
 play.onclick=()=>{
  error.hidden=true;
  video.play().catch(()=>{error.textContent='Não foi possível reproduzir. Tente novamente.';error.hidden=false});
 };
 video.addEventListener('play',()=>{
  document.querySelectorAll('.inline-project-video').forEach(other=>{if(other!==video)other.pause()});
  card.classList.add('video-started');video.controls=true;play.hidden=true;fullscreen.hidden=false;error.hidden=true;
 });
 video.addEventListener('ended',()=>{card.classList.remove('video-started');video.controls=false;play.hidden=false;fullscreen.hidden=true});
 fullscreen.onclick=()=>{
  error.hidden=true;
  try{
   const request=video.requestFullscreen||video.webkitEnterFullscreen||video.webkitEnterFullScreen;
   if(request){const result=request.call(video);if(result&&result.catch)result.catch(()=>{error.textContent='Tela cheia indisponível neste navegador.';error.hidden=false})}
   else{error.textContent='Tela cheia indisponível neste navegador.';error.hidden=false}
  }catch(e){error.textContent='Não foi possível abrir a tela cheia.';error.hidden=false}
 };
});
// Instagram mockup is intentionally static.
// Reveal each text block once, only when it reaches the viewport.
if(!reduced&&'IntersectionObserver' in window){
 const copyObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('copy-visible');copyObserver.unobserve(entry.target)}}),{threshold:0.2,rootMargin:'0px 0px -25px 0px'});
 document.querySelectorAll('.scroll-copy').forEach(el=>{el.classList.add('motion-ready');copyObserver.observe(el)});
 const brandWindow=document.querySelector('.brand-window');let brandTimer=null,brandVisible=false,brandHovered=false;
 if(brandWindow){
  function syncBrandTimer(){if(brandTimer){clearInterval(brandTimer);brandTimer=null}if(brandVisible&&!brandHovered&&!document.hidden)brandTimer=setInterval(()=>brandWindow.classList.toggle('show-alternate'),4800)}
  new IntersectionObserver(entries=>{brandVisible=entries[0].isIntersecting;syncBrandTimer()},{threshold:0.3}).observe(brandWindow);
  brandWindow.addEventListener('mouseenter',()=>{brandHovered=true;syncBrandTimer()});brandWindow.addEventListener('mouseleave',()=>{brandHovered=false;syncBrandTimer()});document.addEventListener('visibilitychange',syncBrandTimer);
 }
}

const heroContact=document.querySelector('.hero [data-dialog]');if(heroContact)heroContact.onclick=()=>openDialog('Pedir orçamento','<p>Me conte sobre seu negócio e o vídeo que você tem em mente. Vamos conversar sobre formato, produção e orçamento.</p><p>Este é um contato demonstrativo. Seu WhatsApp ou e-mail poderá ser vinculado aqui.</p><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="_3dJGfa_button _3dJGfa_light">Conversar no WhatsApp →</a>');

// Illustrative follower count grows throughout this page visit; refresh resets it.
(()=>{
 const count=document.querySelector('#simFollowerCount'),profile=document.querySelector('.ig-profile');
 if(!count||!profile)return;
 const initial=1284,format=new Intl.NumberFormat('pt-BR');
 let startedAt=null,visible=false,timer=null;
 function render(){if(startedAt===null)return;const steps=Math.floor((performance.now()-startedAt)/1000);count.textContent=format.format(initial+steps*17)}
 function sync(){
  if(timer!==null){clearInterval(timer);timer=null}
  if(visible&&!document.hidden){if(startedAt===null)startedAt=performance.now();render();timer=setInterval(render,1000)}
 }
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()},{threshold:.2}).observe(profile);
 document.addEventListener('visibilitychange',sync);
})();

// --- Frame Authentic Video Niches Reel (Raycast Style) ---
const frameNicheCategoriesData = {
  "institucional": [
    {
      title: "Vídeo Institucional",
      desc: "Apresente a história, estrutura e valores da sua empresa com estética cinematográfica.",
      iconBg: "linear-gradient(135deg, rgba(225, 29, 72, 0.25) 0%, rgba(159, 18, 57, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ff4d6d" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="3" ry="3"></rect><circle cx="8.5" cy="12" r="2.5"></circle></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(185, 28, 68, 0.72) 0%, rgba(12, 10, 20, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(185, 28, 68, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(225, 29, 72, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #ff4d6d; top: 10%; right: 15%;"></div>
        <div class="preview-viewfinder">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot"></span>REC 01:24:18</span>
            <span class="preview-badge-pill">4K CINEMA MASTER</span>
          </div>
          <div class="preview-stage">
            <div class="preview-play-halo">
              <svg viewBox="0 0 24 24"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.5-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14z"/></svg>
            </div>
          </div>
          <div class="preview-audio-wave">
            <div class="preview-wave-bars">
              <span></span><span></span><span></span><span></span>
            </div>
            <span>♫ Trilha original imersiva • Som masterizado</span>
          </div>
        </div>
      `,
      dialogTitle: "Vídeo Institucional",
      dialogBody: "<p>O vídeo institucional é a peça central da presença audiovisual da sua empresa. Mostramos quem está por trás do negócio, a infraestrutura e o cuidado em cada processo com iluminação de cinema e edição com ritmo envolvente.</p><p>Ideal para página inicial do site, apresentações comerciais de alto padrão e campanhas de branding.</p>"
    },
    {
      title: "Depoimento de Clientes",
      desc: "Histórias reais de quem confia na sua marca gerando prova social e autoridade instantânea.",
      iconBg: "linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(29, 78, 216, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(37, 99, 235, 0.72) 0%, rgba(10, 16, 32, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(37, 99, 235, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #3b82f6; top: 12%; left: 20%;"></div>
        <div class="preview-quote-card">
          <div class="preview-stars-row">★★★★★</div>
          <p class="preview-quote-text">“A melhor decisão estratégica que tomamos para consolidar a nossa marca perante o mercado.”</p>
          <div class="preview-reels-header">
            <span class="preview-author-pill">
              <span class="preview-author-dot">D</span>
              <span>Diretoria Executiva</span>
              <svg class="preview-verified-chk" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </span>
            <span class="preview-badge-pill">CASE REAL</span>
          </div>
        </div>
      `,
      dialogTitle: "Depoimento de Clientes",
      dialogBody: "<p>Clientes contando resultados com suas próprias palavras eliminam qualquer dúvida de novos compradores. Entrevistas conduzidas com direção humana para obter respostas autênticas e inspiradoras.</p>"
    },
    {
      title: "Apresentação de Equipe",
      desc: "Humanize seu negócio destacando os especialistas e talentos por trás de cada entrega.",
      iconBg: "linear-gradient(135deg, rgba(147, 51, 234, 0.25) 0%, rgba(126, 34, 206, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(147, 51, 234, 0.72) 0%, rgba(18, 10, 32, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(147, 51, 234, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(168, 85, 247, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #a855f7; top: 15%; right: 20%;"></div>
        <div class="preview-viewfinder">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot"></span>BASTIDORES</span>
            <span class="preview-badge-pill">CULTURA & TALENTOS</span>
          </div>
          <div class="preview-stage" style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(30, 20, 45, 0.7) 100%);">
            <div style="font-size: 11px; font-weight: 600; color: #f3e8ff; display: flex; gap: 8px;">
              <span class="preview-badge-pill">LIDERANÇA</span>
              <span class="preview-badge-pill">ENGENHARIA</span>
              <span class="preview-badge-pill">DESIGN</span>
            </div>
          </div>
          <div class="preview-audio-wave">
            <div class="preview-wave-bars">
              <span style="background:#c084fc"></span><span style="background:#c084fc"></span><span style="background:#c084fc"></span><span style="background:#c084fc"></span>
            </div>
            <span>Entrevistas dinâmicas de 30 a 60 segundos</span>
          </div>
        </div>
      `,
      dialogTitle: "Apresentação de Equipe e Cultura",
      dialogBody: "<p>Vídeos que fortalecem o employer branding e transmitem a paixão da equipe pelo trabalho. Essenciais para atrair talentos e encantar parceiros institucionais.</p>"
    },
    {
      title: "Manifesto da Marca",
      desc: "Posicionamento impactante e emocional para inspirar clientes de alto padrão e investidores.",
      iconBg: "linear-gradient(135deg, rgba(217, 119, 6, 0.25) 0%, rgba(180, 83, 9, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(217, 119, 6, 0.72) 0%, rgba(24, 16, 8, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(217, 119, 6, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(245, 158, 11, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #fbbf24; top: 10%; left: 30%;"></div>
        <div class="preview-viewfinder">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot" style="background:#fbbf24; box-shadow:0 0 8px #fbbf24;"></span>MANIFESTO</span>
            <span class="preview-badge-pill">ANAMÓRFICO 2.39:1</span>
          </div>
          <div class="preview-stage" style="background: #0a0a0c;">
            <div style="font-size: 14px; font-weight: 800; letter-spacing: 2px; color: #fff; text-shadow: 0 0 16px rgba(251, 191, 36, 0.6);">
              O FUTURO É AGORA
            </div>
            <div style="position: absolute; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, #38bdf8, transparent); opacity: 0.8;"></div>
          </div>
          <div class="preview-audio-wave">
            <div class="preview-wave-bars">
              <span style="background:#fbbf24"></span><span style="background:#fbbf24"></span><span style="background:#fbbf24"></span><span style="background:#fbbf24"></span>
            </div>
            <span>Locução profissional marcante + Trilha épica</span>
          </div>
        </div>
      `,
      dialogTitle: "Manifesto da Marca",
      dialogBody: "<p>Vídeo com visão audaciosa, texto autoral e trilha sonora grandiosa. A declaração de propósito que coloca a sua marca na liderança do segmento.</p>"
    }
  ],
  "reels": [
    {
      title: "Reels Dinâmicos",
      desc: "Ganchos fortes nos primeiros 3s, ritmo acelerado e edição pensada para reter a atenção.",
      iconBg: "linear-gradient(135deg, rgba(219, 39, 119, 0.25) 0%, rgba(190, 24, 93, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f472b6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line><polygon points="10 8 15 11 10 14 10 8"></polygon></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(219, 39, 119, 0.72) 0%, rgba(24, 8, 22, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(219, 39, 119, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #ec4899; top: 12%; right: 20%;"></div>
        <div class="preview-reels-mock">
          <div class="preview-reels-header">
            <span class="preview-author-pill">
              <span class="preview-author-dot">F</span>
              <span>sua.empresa</span>
              <svg class="preview-verified-chk" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </span>
            <span class="preview-badge-pill" style="background:#ec4899; border-color:#f472b6;">EM ALTA</span>
          </div>
          <div class="preview-reels-stage">
            <span class="preview-caption-pill">Gere desejo e retenção nos primeiros 3 segundos 🔥</span>
            <div class="preview-reels-actions-col">
              <span>♥ 38.4k</span>
              <span>💬 1.2k</span>
              <span>↗ 450</span>
            </div>
          </div>
          <div class="preview-audio-wave">
            <div class="preview-wave-bars">
              <span style="background:#ec4899"></span><span style="background:#ec4899"></span><span style="background:#ec4899"></span><span style="background:#ec4899"></span>
            </div>
            <span>♫ Áudio em alta no Instagram</span>
          </div>
        </div>
      `,
      dialogTitle: "Reels Dinâmicos",
      dialogBody: "<p>Vídeos verticais 9:16 com motion design, legendas estéticas e cortes no tempo certo da trilha. Formatados para o algoritmo do Instagram e TikTok entregarem com máximo alcance orgânico.</p>"
    },
    {
      title: "Pílulas de Conteúdo",
      desc: "Dúvidas do público transformadas em vídeos objetivos que constroem autoridade diária.",
      iconBg: "linear-gradient(135deg, rgba(8, 145, 178, 0.25) 0%, rgba(14, 116, 144, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path><line x1="9" y1="21" x2="15" y2="21"></line></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(8, 145, 178, 0.72) 0%, rgba(6, 20, 28, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(8, 145, 178, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(6, 182, 212, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #06b6d4; top: 12%; left: 15%;"></div>
        <div class="preview-reels-mock">
          <div class="preview-reels-header">
            <span class="preview-author-pill">
              <span class="preview-author-dot" style="background:#06b6d4">E</span>
              <span>Especialista</span>
              <svg class="preview-verified-chk" viewBox="0 0 24 24" fill="#06b6d4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </span>
            <span class="preview-badge-pill">AUTORIDADE</span>
          </div>
          <div class="preview-reels-stage" style="background: linear-gradient(135deg, rgba(8, 145, 178, 0.2) 0%, rgba(5, 30, 40, 0.7) 100%);">
            <span class="preview-caption-pill" style="font-size:11px;">“Qual é o maior erro das empresas no audiovisual?”</span>
          </div>
          <div class="preview-audio-wave">
            <div class="preview-wave-bars">
              <span style="background:#22d3ee"></span><span style="background:#22d3ee"></span><span style="background:#22d3ee"></span><span style="background:#22d3ee"></span>
            </div>
            <span>Legendas automáticas estilizadas e dinâmicas</span>
          </div>
        </div>
      `,
      dialogTitle: "Pílulas de Conteúdo e Autoridade",
      dialogBody: "<p>Vídeos educativos em que você ou sua equipe respondem dúvidas reais de clientes. O formato perfeito para criar conexão direta, ser salvo pelo público e gerar dezenas de leads qualificados.</p>"
    },
    {
      title: "Formatos em Alta (Trends)",
      desc: "Trends e memes em alta adaptados com elegância para o perfil corporativo da sua marca.",
      iconBg: "linear-gradient(135deg, rgba(234, 88, 12, 0.25) 0%, rgba(194, 65, 12, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fb923c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(234, 88, 12, 0.72) 0%, rgba(28, 12, 8, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(234, 88, 12, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(249, 115, 22, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #f97316; top: 15%; right: 25%;"></div>
        <div class="preview-reels-mock">
          <div class="preview-reels-header">
            <span class="preview-author-pill">
              <span class="preview-author-dot" style="background:#f97316">T</span>
              <span>Trending Feed</span>
            </span>
            <span class="preview-badge-pill" style="background:#f97316; color:#fff;">VIRAL</span>
          </div>
          <div class="preview-reels-stage" style="background: linear-gradient(135deg, rgba(234, 88, 12, 0.3) 0%, rgba(40, 16, 8, 0.7) 100%);">
            <span class="preview-caption-pill">Transição no beat + Visual premium 🚀</span>
          </div>
          <div class="preview-audio-wave">
            <div class="preview-wave-bars">
              <span style="background:#fb923c"></span><span style="background:#fb923c"></span><span style="background:#fb923c"></span><span style="background:#fb923c"></span>
            </div>
            <span>+24.5k criações com este formato</span>
          </div>
        </div>
      `,
      dialogTitle: "Formatos em Alta (Trends)",
      dialogBody: "<p>Aproveitar o timing de tendências sem perder a classe da sua empresa. Filtramos apenas o que fortalece sua marca e produzimos com rapidez para não perder a onda.</p>"
    },
    {
      title: "Stories Estratégicos",
      desc: "Sequências estruturadas para engajar a comunidade e gerar conversas no Direct.",
      iconBg: "linear-gradient(135deg, rgba(124, 58, 237, 0.25) 0%, rgba(109, 40, 217, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(124, 58, 237, 0.72) 0%, rgba(16, 10, 32, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(124, 58, 237, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(139, 92, 246, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #8b5cf6; top: 12%; left: 20%;"></div>
        <div class="preview-reels-mock">
          <div style="display:flex; gap:4px; width:100%; margin-bottom:4px;">
            <div style="flex:1; height:3px; background:#fff; border-radius:2px;"></div>
            <div style="flex:1; height:3px; background:#fff; border-radius:2px;"></div>
            <div style="flex:1; height:3px; background:rgba(255,255,255,0.4); border-radius:2px;"></div>
            <div style="flex:1; height:3px; background:rgba(255,255,255,0.2); border-radius:2px;"></div>
          </div>
          <div class="preview-reels-stage" style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.25) 0%, rgba(20, 12, 40, 0.8) 100%);">
            <span class="preview-badge-pill" style="background:#fff; color:#000; font-weight:700;">ENVIAR MENSAGEM →</span>
          </div>
          <div class="preview-audio-wave">
            <span style="font-size:11px; color:#d8b4fe;">98% de retenção na sequência</span>
          </div>
        </div>
      `,
      dialogTitle: "Stories Estratégicos",
      dialogBody: "<p>Vídeos gravados e diagramados em sequência de 3 a 5 takes com enquetes, perguntas e chamadas diretas para ação que transformam visualizações em orçamentos no WhatsApp.</p>"
    }
  ],
  "produtos": [
    {
      title: "Showcase 360°",
      desc: "Close-ups detalhados, texturas e iluminação de estúdio que valorizam cada ângulo do produto.",
      iconBg: "linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(16, 185, 129, 0.72) 0%, rgba(6, 24, 16, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(16, 185, 129, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(16, 185, 129, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #10b981; top: 10%; right: 25%;"></div>
        <div class="preview-product-pedestal">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot" style="background:#10b981; box-shadow:0 0 8px #10b981;"></span>MACRO 4K</span>
            <span class="preview-badge-pill">[ 360° ROTATION ]</span>
          </div>
          <div class="preview-pedestal-stage">
            <div class="preview-pedestal-light"></div>
            <svg class="preview-cube-icon" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" stroke-width="1.6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
          <div class="preview-audio-wave">
            <span style="font-size:11px; color:#a7f3d0;">Iluminação de estúdio macro 60 FPS</span>
          </div>
        </div>
      `,
      dialogTitle: "Showcase 360° de Produto",
      dialogBody: "<p>Vídeos criados em mesa giratória com lentes macro especializadas e iluminação controlada para evidenciar textura, encaixes e materiais do seu produto.</p>"
    },
    {
      title: "Demonstração Prática",
      desc: "Elimine objeções mostrando o produto funcionando em situações reais do cotidiano.",
      iconBg: "linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(3, 105, 161, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(2, 132, 199, 0.72) 0%, rgba(8, 18, 30, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(2, 132, 199, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(2, 132, 199, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #0284c7; top: 12%; left: 20%;"></div>
        <div class="preview-product-pedestal">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot" style="background:#38bdf8; box-shadow:0 0 8px #38bdf8;"></span>EM AÇÃO</span>
            <span class="preview-badge-pill">+45% CONVERSÃO</span>
          </div>
          <div class="preview-pedestal-stage" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(4, 20, 36, 0.7) 100%);">
            <div style="display:flex; flex-direction:column; gap:6px; width:80%;">
              <span class="preview-badge-pill" style="text-align:left;">1. Instalação rápida</span>
              <span class="preview-badge-pill" style="text-align:left;">2. Resultado imediato</span>
            </div>
          </div>
          <div class="preview-audio-wave">
            <span style="font-size:11px; color:#bae6fd;">Passo a passo didático sem enrolação</span>
          </div>
        </div>
      `,
      dialogTitle: "Demonstração Prática de Uso",
      dialogBody: "<p>Vídeos estilo tutorial que tiram todas as dúvidas antes da compra. Reduzem taxa de devolução e chamados de suporte ao mesmo tempo em que aceleram a decisão do comprador.</p>"
    },
    {
      title: "Teaser de Lançamento",
      desc: "Gere expectativa, mistério e fila de espera antes mesmo do produto chegar ao estoque.",
      iconBg: "linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(147, 51, 234, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d8b4fe" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(168, 85, 247, 0.72) 0%, rgba(20, 8, 32, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(168, 85, 247, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(168, 85, 247, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #a855f7; top: 10%; right: 20%;"></div>
        <div class="preview-product-pedestal">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot" style="background:#a855f7; box-shadow:0 0 8px #a855f7;"></span>TEASER</span>
            <span class="preview-badge-pill">VIP ACCESS</span>
          </div>
          <div class="preview-pedestal-stage">
            <div style="font-size: 13px; font-weight: 700; color: #fff; background: rgba(0,0,0,0.6); padding: 6px 12px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2);">
              LANÇAMENTO EM 03 DIAS
            </div>
          </div>
          <div class="preview-audio-wave">
            <span style="font-size:11px; color:#e9d5ff;">Campanha de contagem regressiva</span>
          </div>
        </div>
      `,
      dialogTitle: "Teaser de Lançamento",
      dialogBody: "<p>Vídeos misteriosos de 15 a 30 segundos que revelam silhuetas e detalhes cruciais, criando sensação de escassez e fazendo a comunidade contar os dias para a estreia.</p>"
    },
    {
      title: "Lookbook & Varejo",
      desc: "Vitrines vivas com cores apetitosas, movimento fluido e apelo comercial irresistível.",
      iconBg: "linear-gradient(135deg, rgba(217, 119, 6, 0.25) 0%, rgba(180, 83, 9, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(217, 119, 6, 0.72) 0%, rgba(26, 14, 8, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(217, 119, 6, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(245, 158, 11, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #f59e0b; top: 12%; left: 25%;"></div>
        <div class="preview-product-pedestal">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot" style="background:#f59e0b; box-shadow:0 0 8px #f59e0b;"></span>COLEÇÃO 2026</span>
            <span class="preview-badge-pill">VAREJO & MODA</span>
          </div>
          <div class="preview-pedestal-stage" style="background: linear-gradient(135deg, rgba(217, 119, 6, 0.25) 0%, rgba(30, 16, 6, 0.7) 100%);">
            <div style="font-size: 11px; font-weight: 600; color: #fef3c7; display: flex; gap: 6px;">
              <span class="preview-badge-pill">CORES VIVAS</span>
              <span class="preview-badge-pill">CAIMENTO</span>
            </div>
          </div>
          <div class="preview-audio-wave">
            <span style="font-size:11px; color:#fde68a;">Transições fluidas com modelos e texturas</span>
          </div>
        </div>
      `,
      dialogTitle: "Lookbook e Varejo Dinâmico",
      dialogBody: "<p>Vídeos pensados para marcas de vestuário, calçados, joias e gastronomia. A luz certa para dar água na boca ou valorizar o caimento e o tecido das peças.</p>"
    }
  ],
  "eventos": [
    {
      title: "Aftermovie de Evento",
      desc: "A emoção, os melhores momentos e o impacto do seu evento resumidos com energia contagiante.",
      iconBg: "linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fde047" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(245, 158, 11, 0.72) 0%, rgba(24, 16, 6, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(245, 158, 11, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(245, 158, 11, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #f59e0b; top: 10%; right: 20%;"></div>
        <div class="preview-event-card">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot" style="background:#f59e0b; box-shadow:0 0 8px #f59e0b;"></span>AFTERMOVIE</span>
            <span class="preview-badge-pill">+2.500 PRESENTES</span>
          </div>
          <div class="preview-event-stage">
            <div class="preview-stage-beams"></div>
            <div class="preview-play-halo">
              <svg viewBox="0 0 24 24"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.5-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14z"/></svg>
            </div>
          </div>
          <div class="preview-audio-wave">
            <div class="preview-wave-bars">
              <span style="background:#fbbf24"></span><span style="background:#fbbf24"></span><span style="background:#fbbf24"></span><span style="background:#fbbf24"></span>
            </div>
            <span>Palco, iluminação e vibração contagiante</span>
          </div>
        </div>
      `,
      dialogTitle: "Aftermovie Oficial de Evento",
      dialogBody: "<p>Mais do que um registro: uma peça de marketing poderosa que revive a energia da celebração e já garante a venda de ingressos ou patrocínios para a próxima edição.</p>"
    },
    {
      title: "Feiras & Convenções",
      desc: "Destaque seu estande, fluxo de visitantes e reuniões de negócios com rapidez e agilidade.",
      iconBg: "linear-gradient(135deg, rgba(13, 148, 136, 0.25) 0%, rgba(15, 118, 110, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(13, 148, 136, 0.72) 0%, rgba(8, 22, 22, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(13, 148, 136, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(20, 184, 166, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #14b8a6; top: 12%; left: 20%;"></div>
        <div class="preview-event-card">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot" style="background:#14b8a6; box-shadow:0 0 8px #14b8a6;"></span>ESTANDE</span>
            <span class="preview-badge-pill">NETWORKING B2B</span>
          </div>
          <div class="preview-event-stage" style="background: linear-gradient(135deg, rgba(13, 148, 136, 0.25) 0%, rgba(6, 24, 24, 0.8) 100%);">
            <span class="preview-badge-pill">3 DIAS • 120 CONEXÕES GERADAS</span>
          </div>
          <div class="preview-audio-wave">
            <span style="font-size:11px; color:#99f6e4;">Entregas rápidas durante o próprio evento</span>
          </div>
        </div>
      `,
      dialogTitle: "Feiras e Convenções Corporativas",
      dialogBody: "<p>Cobertura dinâmica do seu estande e das ativações com clientes. Podemos entregar cortes no mesmo dia para postagens em tempo real no feed e nos stories.</p>"
    },
    {
      title: "Palestras & Keynotes",
      desc: "Captação multi-câmera com áudio broadcast para eternizar mensagens e apresentações.",
      iconBg: "linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(29, 78, 216, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(37, 99, 235, 0.72) 0%, rgba(10, 18, 36, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(37, 99, 235, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #3b82f6; top: 10%; right: 25%;"></div>
        <div class="preview-event-card">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot" style="background:#60a5fa; box-shadow:0 0 8px #60a5fa;"></span>MULTICÂMERA</span>
            <span class="preview-badge-pill">96kHz 24-BIT</span>
          </div>
          <div class="preview-event-stage" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(10, 18, 40, 0.8) 100%);">
            <div style="font-size: 11px; font-weight: 600; color: #dbeafe; display:flex; gap:6px;">
              <span class="preview-badge-pill">ORADOR</span>
              <span class="preview-badge-pill">SLIDES SINCRONIZADOS</span>
            </div>
          </div>
          <div class="preview-audio-wave">
            <div class="preview-wave-bars">
              <span style="background:#60a5fa"></span><span style="background:#60a5fa"></span><span style="background:#60a5fa"></span><span style="background:#60a5fa"></span>
            </div>
            <span>Microfones sem fio com captação cristalina</span>
          </div>
        </div>
      `,
      dialogTitle: "Palestras e Keynotes",
      dialogBody: "<p>Registro com 2 ou 3 câmeras e gravação de áudio direto da mesa do evento. Entregamos a palestra na íntegra além de dezenas de nuggets/cortes para redes sociais.</p>"
    },
    {
      title: "Bastidores & Making Of",
      desc: "Mostre a preparação, a técnica e a dedicação da equipe antes do palco acender.",
      iconBg: "linear-gradient(135deg, rgba(225, 29, 72, 0.25) 0%, rgba(190, 18, 60, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fb7185" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(225, 29, 72, 0.72) 0%, rgba(22, 8, 14, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(225, 29, 72, 0.15)",
      previewHtml: `
        <div class="preview-mesh-backdrop" style="background: radial-gradient(circle at 50% 40%, rgba(244, 63, 94, 0.3) 0%, transparent 70%);"></div>
        <div class="preview-lens-glow" style="background: #f43f5e; top: 12%; left: 20%;"></div>
        <div class="preview-director-card">
          <div class="preview-hud-row">
            <span class="preview-rec-tag"><span class="preview-rec-dot" style="background:#f43f5e; box-shadow:0 0 8px #f43f5e;"></span>DIRECTOR HUD</span>
            <span class="preview-badge-pill">ISO 800 • 1/50 • f/2.8</span>
          </div>
          <div class="preview-stage" style="background: #0d0a0d;">
            <div style="font-size: 11px; font-weight: 700; color: #fecdd3; border: 1px dashed rgba(255,255,255,0.3); padding: 6px 14px; border-radius: 8px;">
              [ + ] FOCO MANUAL CINEMA
            </div>
          </div>
          <div class="preview-audio-wave">
            <span style="font-size:11px; color:#fda4af;">Imagens cinematográficas espontâneas</span>
          </div>
        </div>
      `,
      dialogTitle: "Bastidores e Making Of",
      dialogBody: "<p>O que acontece nos bastidores gera curiosidade e fideliza o público. Mostramos a montagem de estrutura, o aquecimento dos palestrantes e a recepção VIP dos convidados.</p>"
    }
  ]
};

/* ==========================================================================
   3D Cylindrical Carousel in #library (Full-Size Convex Carousel)
   ========================================================================== */
const niche3dScene = document.getElementById('niche3dScene');
const niche3dTrack = document.getElementById('niche3dTrack');

const nicheCategoriesOrder = ['institucional', 'reels', 'produtos', 'eventos'];
const allNicheCards = [];
const allNicheCardElements = [];

const sampleVideos = [
  previewVideos[0],
  previewVideos[6],
  previewVideos[8],
  previewVideos[5],
  previewVideos[4],
  previewVideos[7],
  previewVideos[1],
  previewVideos[9],
  previewVideos[10],
  previewVideos[2],
  previewVideos[3],
  previewVideos[11]
];

const samplePosters = [
  realPosters[0],
  realPosters[6],
  realPosters[8],
  realPosters[5],
  realPosters[4],
  realPosters[7],
  realPosters[1],
  realPosters[9],
  realPosters[10],
  realPosters[2],
  realPosters[3],
  realPosters[11]
];

nicheCategoriesOrder.forEach((catKey) => {
  const items = (frameNicheCategoriesData[catKey] || []).slice(0, 3);
  items.forEach((item, idx) => {
    allNicheCards.push({
      ...item,
      categoryKey: catKey,
      indexInCategory: idx
    });
  });
});

const TOTAL_NICHE_CARDS = allNicheCards.length; // 12

if (niche3dTrack && niche3dScene) {
  niche3dTrack.style.setProperty('--n', TOTAL_NICHE_CARDS);

  allNicheCards.forEach((cardData, i) => {
    const card = document.createElement('article');
    card.className = 'niche-3d-card';
    card.style.setProperty('--i', i);

    const videoSrc = sampleVideos[i % sampleVideos.length];
    const posterSrc = samplePosters[i % samplePosters.length];

    card.innerHTML = `
      <video class="niche-full-video" src="${videoSrc}" poster="${posterSrc}" autoplay muted loop playsinline preload="auto"></video>
    `;

    niche3dTrack.appendChild(card);
    allNicheCardElements.push(card);

    // Start video playback
    const cardVideo = card.querySelector('.niche-full-video');
    if (cardVideo) {
      cardVideo.muted = true;
      cardVideo.play().catch(() => {});
    }
  });
}

  // Initial setup: start at angle 0 facing front
  setNicheRotation(0, false);
}

// Preloader (Uiverse.io by ZacharyCrespin)
(function initSitePreloader() {
  const preloader = document.getElementById('sitePreloader');
  if (!preloader) return;
  document.body.classList.add('preload-active');
  const minDuration = 1800;

  function finish() {
    preloader.classList.add('is-complete');
    document.body.classList.remove('preload-active');
    setTimeout(() => {
      preloader.remove();
    }, 700);
  }

  if (document.readyState === 'complete') {
    setTimeout(finish, minDuration);
  } else {
    const timer = setTimeout(finish, minDuration + 500);
    window.addEventListener('load', () => {
      clearTimeout(timer);
      setTimeout(finish, 400);
    }, { once: true });
  }
})();

// Card 3: Celular Realista Giratório (Formatos 9:16 vs 16:9)
const phoneScopeStage = document.getElementById('phoneScopeStage');
if (phoneScopeStage) {
  let isLandscape = false;
  setInterval(() => {
    isLandscape = !isLandscape;
    phoneScopeStage.classList.toggle('is-landscape', isLandscape);
  }, 4200);
  phoneScopeStage.addEventListener('click', () => {
    isLandscape = !isLandscape;
    phoneScopeStage.classList.toggle('is-landscape', isLandscape);
  });
}

export interface CorporateVideo {
  title: string
  category: string
  desc: string
  video: string
  poster: string
  duration: string
  glow?: string
  accent?: string
  artGradient?: string
  flare?: string
  format?: string
  clientName?: string
  clientHandle?: string
  clientLogo?: string
  instagramUrl?: string
  likes: string
  comments: string
}

export interface NicheCardItem {
  title: string
  desc: string
  iconBg: string
  iconSvg: string
  bg: string
  shadow: string
  glow?: string
  accent?: string
  dialogTitle?: string
  dialogBody?: string
  video?: string
  poster?: string
  categoryKey?: string
}

export const b2Videos = [
  "/videos/SaveClip.App_AQMNVo8LajO0LJTSY76RRJEGqHnQeqsG9ugyp2D5T7xlOkdE1ocT4ehV5aVNQGr57WGZajNi6O3ZMVlQoqjsZ0TwzL6j8qWxJYjbg_s.mp4",
  "/videos/SaveClip.App_AQMN_ghxUvwuqApzkIr-Z6b-ZYvc-bKBCTmHtCIuyuzfUqMny-HWB6WQKY-u-pjfTT9Iq-olPr1S9FWYQpC3Yox8goeZYi5PqMGMhgk.mp4",
  "/videos/SaveClip.App_AQMmOOCjSxnuygrzK13fNthyOPuCPQWMvYb7Mjsnkk7OrVqIereZuD-d65AWAo-i95cWXzs3NbYrCa5fJsFqj6KI0gxXqHNjfu_qK1w.mp4",
  "/videos/SaveClip.App_AQPQ1fVM98RYBmuqhhKs2yi9zzCfj1x_Ft2YgpP0uRXGXKRepU7_BRKGAgMo7iZd1pkDVT-6hiVH4NRBUX5-76WjGcWL1EYyNL39jdY.mp4",
  "/videos/SaveClip.App_AQNGq58JUv8zOkRaZXfabpjaUuXvESLZ1r8rEzaZ1I7quPApxcdexwLCpBKtzv0Yx1AbjIpmLbfUs2zERdCDWozBDQ.mp4",
  "/videos/snapinsta-1795041811996.mp4",
  "/videos/SaveClip.App_AQO-R00O2pvXQfpkhqkh1VjCER-0D5Vww6kX5n7hDIj_dTK1IVarf9RPvOuwpNr6WLKXS80UTwPSgLm3pcmKVeljh5BX5q-WbjLaU3Y.mp4",
  "/videos/snapinsta-1795039920790.mp4",
  "/videos/snapinsta-1795039939758.mp4",
  "/videos/snapinsta-1795039967501.mp4",
  "/videos/snapinsta-1795039990353.mp4",
  "/videos/snapinsta-1795040018071.mp4"
];

export const previewVideos = [
  "/videos/preview/preview-0.mp4",
  "/videos/preview/preview-1.mp4",
  "/videos/preview/preview-2.mp4",
  "/videos/preview/preview-3.mp4",
  "/videos/preview/preview-4.mp4",
  "/videos/preview/preview-5.mp4",
  "/videos/preview/preview-6.mp4",
  "/videos/preview/preview-7.mp4",
  "/videos/preview/preview-8.mp4",
  "/videos/preview/preview-9.mp4",
  "/videos/preview/preview-10.mp4",
  "/videos/preview/preview-11.mp4"
];

export const realPosters = [
  "/videos/posters/poster-0.jpg",
  "/videos/posters/poster-1.jpg",
  "/videos/posters/poster-2.jpg",
  "/videos/posters/poster-3.jpg",
  "/videos/posters/poster-4.jpg",
  "/videos/posters/poster-5.jpg",
  "/videos/posters/poster-6.jpg",
  "/videos/posters/poster-7.jpg",
  "/videos/posters/poster-8.jpg",
  "/videos/posters/poster-9.jpg",
  "/videos/posters/poster-10.jpg",
  "/videos/posters/poster-11.jpg"
];

export const corporateVideos: CorporateVideo[] = [
  {
    title: "Apresentação Institucional",
    category: "Instagram",
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
    instagramUrl: "https://www.instagram.com/reel/DbOhwF_oWp8/",
    likes: "2.4k",
    comments: "142"
  },
  {
    title: "Lançamento de Produto",
    category: "Instagram",
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
    instagramUrl: "https://www.instagram.com/reel/DfXins6zCvr/",
    likes: "3.8k",
    comments: "286"
  },
  {
    title: "Cobertura de Evento",
    category: "Instagram",
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
    instagramUrl: "https://www.instagram.com/reel/DY715pnpOU3/",
    likes: "1.9k",
    comments: "98"
  },
  {
    title: "Bastidores da Operação",
    category: "Instagram",
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
    instagramUrl: "https://www.instagram.com/reel/DcZmC5UhD_O/",
    likes: "1.2k",
    comments: "64"
  },
  {
    title: "Depoimento de Cliente",
    category: "Instagram",
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
    instagramUrl: "https://www.instagram.com/reel/DU50AFvEalM/",
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
    instagramUrl: "https://www.instagram.com/reel/DdUu-rOB7Of/",
    likes: "5.4k",
    comments: "420"
  },
  {
    title: "Tour pelas Instalações",
    category: "Instagram",
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
    instagramUrl: "https://www.instagram.com/reel/DbbqplHBgvE/",
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
    instagramUrl: "https://www.instagram.com/reel/DfQb3N_x32C/",
    likes: "3.2k",
    comments: "194"
  },
  {
    title: "Cultura e Equipe",
    category: "Instagram",
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
    instagramUrl: "https://www.instagram.com/reel/Dc14JmYRSNC/",
    likes: "1.5k",
    comments: "91"
  },
  {
    title: "Demonstração Prática",
    category: "Instagram",
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
    instagramUrl: "https://www.instagram.com/reel/DbmFLtyRiT4/",
    likes: "2.8k",
    comments: "163"
  },
  {
    title: "Case de Sucesso",
    category: "Instagram",
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
    instagramUrl: "https://www.instagram.com/reel/DaxiLqxRnJS/",
    likes: "4.1k",
    comments: "250"
  },
  {
    title: "Aftermovie de Celebração",
    category: "Instagram",
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
    instagramUrl: "https://www.instagram.com/reel/DaOVqd7xm74/",
    likes: "3.6k",
    comments: "210"
  }
];

export const frameNicheCategoriesData: Record<string, NicheCardItem[]> = {
  "institucional": [
    {
      title: "Vídeo Institucional",
      desc: "Apresente a história, estrutura e valores da sua empresa com estética cinematográfica.",
      iconBg: "linear-gradient(135deg, rgba(225, 29, 72, 0.25) 0%, rgba(159, 18, 57, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ff4d6d" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="3" ry="3"></rect><circle cx="8.5" cy="12" r="2.5"></circle></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(185, 28, 68, 0.72) 0%, rgba(12, 10, 20, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(185, 28, 68, 0.15)",
      glow: "rgba(255, 77, 109, 0.4)",
      accent: "#ff4d6d",
      video: previewVideos[0],
      poster: realPosters[0],
      dialogTitle: "Vídeo Institucional",
      dialogBody: "<p>O vídeo institucional é a peça central da presença audiovisual da sua empresa. Mostramos quem está por trás do negócio, a infraestrutura e o cuidado em cada processo com iluminação de cinema e edição com ritmo envolvente.</p><p>Ideal para página inicial do site, apresentações comerciais de alto padrão e campanhas de branding.</p>"
    },
    {
      title: "Tour pelas Instalações",
      desc: "Imagens com movimentos fluidos apresentando o ambiente moderno da sua sede.",
      iconBg: "linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(29, 78, 216, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(37, 99, 235, 0.72) 0%, rgba(10, 16, 32, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(37, 99, 235, 0.15)",
      glow: "rgba(59, 130, 246, 0.4)",
      accent: "#3b82f6",
      video: previewVideos[6],
      poster: realPosters[6],
      dialogTitle: "Tour pelas Instalações",
      dialogBody: "<p>Apresentação dos ambientes com câmera estabilizada em gimbal, mostrando cada detalhe para transmitir confiança antes mesmo da primeira visita presencial do cliente.</p>"
    },
    {
      title: "Cultura e Equipe",
      desc: "Humanize seu negócio destacando os especialistas e talentos por trás de cada entrega.",
      iconBg: "linear-gradient(135deg, rgba(147, 51, 234, 0.25) 0%, rgba(126, 34, 206, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(147, 51, 234, 0.72) 0%, rgba(18, 10, 32, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(147, 51, 234, 0.15)",
      glow: "rgba(168, 85, 247, 0.4)",
      accent: "#a855f7",
      video: previewVideos[8],
      poster: realPosters[8],
      dialogTitle: "Apresentação de Equipe e Cultura",
      dialogBody: "<p>Vídeos que fortalecem o employer branding e transmitem a paixão da equipe pelo trabalho. Essenciais para atrair talentos e encantar parceiros institucionais.</p>"
    }
  ],
  "reels": [
    {
      title: "Formatos em Alta / Reels",
      desc: "Trends e memes em alta adaptados com elegância para o perfil corporativo da sua empresa.",
      iconBg: "linear-gradient(135deg, rgba(236, 72, 153, 0.25) 0%, rgba(219, 39, 119, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f472b6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(219, 39, 119, 0.72) 0%, rgba(24, 10, 20, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(219, 39, 119, 0.15)",
      glow: "rgba(236, 72, 153, 0.4)",
      accent: "#ec4899",
      video: previewVideos[5],
      poster: realPosters[5],
      dialogTitle: "Formatos em Alta para Instagram",
      dialogBody: "<p>Aproveite os algoritmos do Instagram com vídeos verticais criados especificamente para retenção. Unimos formatos dinâmicos com linguagem profissional para viralizar sem perder a elegância.</p>"
    },
    {
      title: "Pílulas de Conteúdo",
      desc: "Dúvidas do público transformadas em vídeos objetivos que constroem autoridade diária.",
      iconBg: "linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(2, 132, 199, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(2, 132, 199, 0.72) 0%, rgba(8, 18, 30, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(2, 132, 199, 0.15)",
      glow: "rgba(14, 165, 233, 0.4)",
      accent: "#0ea5e9",
      video: previewVideos[4],
      poster: realPosters[4],
      dialogTitle: "Pílulas de Conteúdo e Autoridade",
      dialogBody: "<p>Vídeos educativos em que você ou sua equipe respondem dúvidas reais de clientes. O formato perfeito para criar conexão direta, ser salvo pelo público e gerar dezenas de leads qualificados.</p>"
    },
    {
      title: "Série Educativa & Dicas",
      desc: "Conteúdos periódicos que transformam seguidores em defensores e compradores fiéis da marca.",
      iconBg: "linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(5, 150, 105, 0.72) 0%, rgba(8, 24, 18, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(5, 150, 105, 0.15)",
      glow: "rgba(16, 185, 129, 0.4)",
      accent: "#10b981",
      video: previewVideos[7],
      poster: realPosters[7],
      dialogTitle: "Série de Dicas e Tutoriais",
      dialogBody: "<p>Planejamento de esteira de conteúdo em séries temáticas. Cada vídeo funciona individualmente e ao mesmo tempo constrói um acervo valioso para seu perfil.</p>"
    }
  ],
  "produtos": [
    {
      title: "Lançamento de Produto",
      desc: "Close-ups detalhados, iluminação de cinema e ritmo que valoriza cada detalhe.",
      iconBg: "linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(217, 119, 6, 0.72) 0%, rgba(24, 16, 8, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(217, 119, 6, 0.15)",
      glow: "rgba(245, 158, 11, 0.4)",
      accent: "#f59e0b",
      video: previewVideos[1],
      poster: realPosters[1],
      dialogTitle: "Lançamento de Produto",
      dialogBody: "<p>Vídeos comerciais que criam desejo imediato. Destacamos acabamento, textura, usabilidade e benefícios com lentes de cinema e iluminação de estúdio.</p>"
    },
    {
      title: "Demonstração Prática",
      desc: "Passo a passo visual e didático mostrando a facilidade e eficiência da sua solução.",
      iconBg: "linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(8, 145, 178, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(8, 145, 178, 0.72) 0%, rgba(6, 20, 28, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(8, 145, 178, 0.15)",
      glow: "rgba(6, 182, 212, 0.4)",
      accent: "#06b6d4",
      video: previewVideos[9],
      poster: realPosters[9],
      dialogTitle: "Demonstração Prática",
      dialogBody: "<p>Indicado para produtos técnicos, maquinários ou comércios. Elimina o atrito de vendas demonstrando visualmente a excelência do atendimento e produto.</p>"
    },
    {
      title: "Case de Sucesso",
      desc: "Narrativa com métricas de resultados e transformação antes e depois.",
      iconBg: "linear-gradient(135deg, rgba(244, 63, 94, 0.25) 0%, rgba(225, 29, 72, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fb7185" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(225, 29, 72, 0.72) 0%, rgba(24, 8, 14, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(225, 29, 72, 0.15)",
      glow: "rgba(244, 63, 94, 0.4)",
      accent: "#f43f5e",
      video: previewVideos[10],
      poster: realPosters[10],
      dialogTitle: "Case de Sucesso",
      dialogBody: "<p>Apresentação visual de cases reais com clientes satisfeitos, transmitindo a segurança e os benefícios reais da sua marca.</p>"
    }
  ],
  "eventos": [
    {
      title: "Cobertura de Evento",
      desc: "A energia das palestras, o público e o networking captados no momento certo.",
      iconBg: "linear-gradient(135deg, rgba(234, 88, 12, 0.25) 0%, rgba(194, 65, 12, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fb923c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(194, 65, 12, 0.72) 0%, rgba(26, 12, 6, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(194, 65, 12, 0.15)",
      glow: "rgba(234, 88, 12, 0.4)",
      accent: "#ea580c",
      video: previewVideos[2],
      poster: realPosters[2],
      dialogTitle: "Cobertura de Evento",
      dialogBody: "<p>Registro cinematográfico das apresentações, movimentação dos convidados e conexões criadas durante sua convenção ou conferência.</p>"
    },
    {
      title: "Bastidores da Operação",
      desc: "Mostre o cuidado da equipe e os processos que tornam sua entrega impecável.",
      iconBg: "linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(29, 78, 216, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(29, 78, 216, 0.72) 0%, rgba(8, 14, 30, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(29, 78, 216, 0.15)",
      glow: "rgba(37, 99, 235, 0.4)",
      accent: "#2563eb",
      video: previewVideos[3],
      poster: realPosters[3],
      dialogTitle: "Bastidores da Operação",
      dialogBody: "<p>O que acontece nos bastidores gera curiosidade e fideliza o público. Mostramos a montagem de estrutura, o aquecimento dos palestrantes e a recepção VIP dos convidados.</p>"
    },
    {
      title: "Aftermovie de Celebração",
      desc: "Os melhores momentos de comemorações e premiações corporativas com ritmo eletrizante.",
      iconBg: "linear-gradient(135deg, rgba(225, 29, 72, 0.25) 0%, rgba(190, 18, 60, 0.4) 100%)",
      iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fb7185" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>`,
      bg: "radial-gradient(135% 85% at 50% 25%, rgba(225, 29, 72, 0.72) 0%, rgba(22, 8, 14, 0.88) 100%)",
      shadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), 0px 30px 60px rgba(0, 0, 0, 0.45), 0px 4px 24px rgba(225, 29, 72, 0.15)",
      glow: "rgba(244, 63, 94, 0.4)",
      accent: "#f43f5e",
      video: previewVideos[11],
      poster: realPosters[11],
      dialogTitle: "Aftermovie de Celebração",
      dialogBody: "<p>O vídeo oficial para eternizar convenções, lançamentos, feiras e festas corporativas. Cria lembrança afetiva com os participantes e serve de material de venda para as próximas edições.</p>"
    }
  ]
};

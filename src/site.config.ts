// Impostazioni generali del sito. Quasi tutto quello che serve cambiare sta qui.

export const SITE = {
  name: 'TastoReset',
  tagline: 'Tecnologia, videogiochi e soluzioni ai problemi di tutti i giorni',
  description:
    'Notizie tech, guide pratiche, tutorial e soluzioni ai problemi di smartphone, PC, console e videogiochi. Spiegati semplice, senza giri di parole.',
  lang: 'it',
  locale: 'it_IT',
  author: 'Redazione TastoReset',
};

// Modulo "Diventa tester".
// provider: 'google-apps-script' (consigliato, gratis, risposte su Google Fogli)
//           'formspree' (servizio esterno, piano gratuito limitato)
// endpoint: URL fornito dal servizio. Istruzioni complete in docs/MODULO-TESTER.md
export const TESTER_FORM = {
  provider: 'formspree' as 'google-apps-script' | 'formspree',
  endpoint: 'https://formspree.io/f/mzezkjwg',
};

// Modulo "Contatti": invia una notifica email a ogni messaggio.
// Istruzioni complete in docs/MODULO-CONTATTI.md
export const CONTACT_FORM = {
  provider: 'formspree' as 'google-apps-script' | 'formspree',
  endpoint: 'https://formspree.io/f/mzezkjwg',
};

export const CATEGORIE = {
  smartphone: { nome: 'Smartphone e tablet', breve: 'Smartphone', colore: '#7c5cff', icona: 'phone' },
  pc: { nome: 'PC e Windows', breve: 'PC', colore: '#2f8cff', icona: 'monitor' },
  gaming: { nome: 'Videogiochi', breve: 'Gaming', colore: '#ff5c8a', icona: 'gamepad' },
  console: { nome: 'Console', breve: 'Console', colore: '#ff8a3d', icona: 'console' },
  app: { nome: 'App e Internet', breve: 'App', colore: '#18c29c', icona: 'grid' },
  sicurezza: { nome: 'Sicurezza e privacy', breve: 'Sicurezza', colore: '#e5484d', icona: 'shield' },
  ai: { nome: 'Intelligenza artificiale', breve: 'AI', colore: '#b35cff', icona: 'spark' },
} as const;

export type CategoriaId = keyof typeof CATEGORIE;

export const TIPI = {
  notizia: { nome: 'Notizia', plurale: 'Notizie' },
  approfondimento: { nome: 'Approfondimento', plurale: 'Approfondimenti' },
  'guida-acquisto': { nome: "Guida all'acquisto", plurale: "Guide all'acquisto" },
  tutorial: { nome: 'Tutorial', plurale: 'Tutorial' },
  problema: { nome: 'Ho un problema', plurale: 'Problemi e soluzioni' },
} as const;

export type TipoId = keyof typeof TIPI;

// Dispositivi usati per filtrare la sezione "Ho un problema"
export const DISPOSITIVI = {
  android: 'Android',
  iphone: 'iPhone e iPad',
  windows: 'PC Windows',
  console: 'Console',
  rete: 'Wi-Fi e rete',
  app: 'App e account',
  accessori: 'Accessori',
} as const;

export type DispositivoId = keyof typeof DISPOSITIVI;

// Canali YouTube italiani consigliati (link verificati)
export const CANALI_YOUTUBE = [
  { nome: 'HDblog', url: 'https://www.youtube.com/@HDblog', temi: 'Smartphone, recensioni, novità tech' },
  { nome: 'TuttoTech', url: 'https://www.youtube.com/@Tuttotech', temi: 'Recensioni e guide su smartphone e PC' },
  { nome: 'TechDale', url: 'https://www.youtube.com/@TechDale', temi: 'Tecnologia spiegata semplice' },
  { nome: 'iSpazio', url: 'https://www.youtube.com/@iSpazio', temi: 'iPhone, iPad, Mac e mondo Apple' },
  { nome: 'Techprincess', url: 'https://www.youtube.com/@TechPrincess', temi: 'Tech, gadget e lifestyle digitale' },
  { nome: 'Everyeye', url: 'https://www.youtube.com/@Everyeye', temi: 'Videogiochi, recensioni e anteprime' },
  { nome: 'Multiplayer.it', url: 'https://www.youtube.com/@multiplayer', temi: 'Videogiochi, console e PC gaming' },
  { nome: 'DDay.it', url: 'https://www.youtube.com/@DDAYit', temi: 'TV, audio, smart home e tecnologia' },
  { nome: 'NintendoItalia', url: 'https://www.youtube.com/@NintendoItalia', temi: 'Canale ufficiale Nintendo Italia' },
  { nome: 'XBOX Italia', url: 'https://www.youtube.com/@XboxItalia', temi: 'Canale ufficiale Xbox Italia' },
  { nome: 'Geopop', url: 'https://www.youtube.com/@Geopop', temi: 'Scienza e tecnologia spiegate bene' },
];

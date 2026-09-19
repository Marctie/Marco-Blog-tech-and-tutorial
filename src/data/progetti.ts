// I progetti del laboratorio. Nessun link di download: le app sono in fase di test.

export interface Progetto {
  slug: string;
  nome: string;
  slogan: string;
  sintesi: string;
  colore: string;
  piattaforma: string;
  stato: string;
  cercaTester: boolean;
  categoria: string;
  descrizione: string[];
  funzioni: { titolo: string; testo: string }[];
  privacy: string;
  tecnologia: string[];
  screenshot: { file: string; didascalia: string }[];
  copertina?: string;
}

export const PROGETTI: Progetto[] = [
  {
    slug: 'finanzai',
    nome: 'FinanzAI',
    slogan: 'Le tue finanze, sotto controllo',
    sintesi: 'Spese, entrate, budget mensili e obiettivi di risparmio in un’unica app. Tutto resta sul telefono, niente account e niente pubblicità.',
    colore: '#2b7fd4',
    piattaforma: 'Android',
    stato: 'Test chiuso in corso',
    cercaTester: true,
    categoria: 'Finanza personale',
    descrizione: [
      'FinanzAI nasce da un problema che abbiamo tutti: arrivare a fine mese e chiedersi "ma dove sono finiti i soldi?". Le app di finanza che si trovano in giro spesso chiedono di collegare il conto corrente, creare un account o accettare pubblicità ovunque. Noi volevamo l’opposto.',
      'Con FinanzAI segni una spesa in pochi secondi, la metti in una categoria e l’app fa il resto: grafici sull’andamento del mese, avvisi quando stai sforando il budget e un riepilogo che ti dice in parole semplici come stai andando rispetto al mese prima.',
      'I dati restano solo sul tuo dispositivo. Se cambi telefono puoi esportare un backup completo e ripristinarlo in un attimo, e l’app ne fa uno di sicurezza da sola a ogni avvio.',
    ],
    funzioni: [
      { titolo: 'Spese ed entrate', testo: 'Importo, categoria, metodo di pagamento e note. Si inserisce tutto in pochi tocchi.' },
      { titolo: 'Categorie personalizzate', testo: 'Usa quelle già pronte o creane di nuove con icona e colore a tua scelta.' },
      { titolo: 'Budget mensili', testo: 'Imposta un tetto per categoria e ricevi un avviso all’80% e al 100%.' },
      { titolo: 'Obiettivi di risparmio', testo: 'Vacanza, fondo emergenze, un acquisto importante: segui i progressi con i tuoi versamenti.' },
      { titolo: 'Analisi chiare', testo: 'Grafici sull’andamento, ripartizione per categoria e confronto tra mesi.' },
      { titolo: 'Backup e CSV', testo: 'Esporta tutto in un file di backup verificato o in CSV da aprire con un foglio di calcolo.' },
    ],
    privacy: 'Nessun account, nessun server esterno, nessuna pubblicità. I dati sono salvati esclusivamente sul dispositivo.',
    tecnologia: ['Ionic', 'Angular', 'Capacitor', 'Chart.js'],
    copertina: 'copertina.webp',
    screenshot: [
      { file: 'dashboard.webp', didascalia: 'La home con il saldo del mese e il riepilogo' },
      { file: 'budget.webp', didascalia: 'Budget per categoria con le barre di avanzamento' },
      { file: 'insights.webp', didascalia: 'Le analisi del mese spiegate in parole semplici' },
      { file: 'nuova-transazione.webp', didascalia: 'Inserire una spesa richiede pochi secondi' },
    ],
  },
  {
    slug: 'device-test-pro',
    nome: 'Device Test Pro',
    slogan: 'Diagnostica completa per smartphone e tablet',
    sintesi: 'Controlla schermo, sensori, fotocamere, audio, batteria e connessioni di qualsiasi telefono Android e genera un report PDF. Pensata per chi ripara e per chi compra usato.',
    colore: '#1e6fd9',
    piattaforma: 'Android',
    stato: 'Test chiuso in corso',
    cercaTester: true,
    categoria: 'Strumenti',
    descrizione: [
      'Device Test Pro è nata pensando ai negozi di assistenza, dove ogni giorno bisogna capire in fretta se un telefono funziona davvero tutto. Poi ci siamo resi conto che serve anche a chi compra o vende uno smartphone usato: in dieci minuti sai se c’è qualcosa che non va.',
      'Puoi lanciare il test completo, che ti guida componente per componente, oppure fare solo i test che ti interessano. Alla fine l’app calcola un punteggio di salute del dispositivo, da 0 a 100 con un voto da A a F, e crea un report PDF da condividere.',
      'Non richiede nemmeno il permesso di accesso a internet: tutto quello che succede resta sul telefono.',
    ],
    funzioni: [
      { titolo: 'Schermo e touch', testo: 'Colori a tutto schermo per trovare pixel morti e macchie, test del touch e del multitouch.' },
      { titolo: 'Sensori', testo: 'Accelerometro, giroscopio, prossimità, luminosità, bussola, barometro e GPS con valori in tempo reale.' },
      { titolo: 'Audio e vibrazione', testo: 'Microfono con indicatore di livello, altoparlante con tono di prova e motore di vibrazione.' },
      { titolo: 'Fotocamere', testo: 'Anteprima della fotocamera posteriore e frontale e prova del flash.' },
      { titolo: 'Connettività e sistema', testo: 'Wi-Fi, Bluetooth, NFC, SIM, batteria con stima dello stato di salute, memoria e RAM.' },
      { titolo: 'Report PDF', testo: 'Riepilogo finale con punteggio di salute, da salvare o condividere con un tocco.' },
    ],
    privacy: 'Nessuna pubblicità, nessun tracciamento e nessuna connessione a internet. Il report viene creato e resta sul dispositivo.',
    tecnologia: ['Kotlin', 'Jetpack Compose', 'Material 3'],
    copertina: 'copertina.webp',
    screenshot: [
      { file: 'home.webp', didascalia: 'Schermata iniziale: test completo, test singoli e manuale' },
      { file: 'test-singoli.webp', didascalia: 'I test divisi per categoria' },
      { file: 'test-schermo.webp', didascalia: 'Il test dei colori per trovare pixel difettosi' },
    ],
  },
  {
    slug: 'dispensina-digitale',
    nome: 'Dispensina Digitale',
    slogan: 'La dispensa sotto controllo, senza sprechi',
    sintesi: 'Tieni traccia di cosa hai in dispensa, frigo e freezer, ricevi un avviso prima che le cose scadano e crea la lista della spesa in automatico.',
    colore: '#3d7d47',
    piattaforma: 'Android',
    stato: 'In arrivo, test chiuso in preparazione',
    cercaTester: true,
    categoria: 'Casa e stile di vita',
    descrizione: [
      'Quante volte hai buttato uno yogurt scaduto trovato in fondo al frigo? Dispensina Digitale serve proprio a evitarlo. Aggiungi i prodotti, anche scansionando il codice a barre, e l’app ti avvisa qualche giorno prima della scadenza.',
      'Quando qualcosa finisce o è scaduto, finisce da solo nella lista della spesa. C’è anche una sezione ricette che ti suggerisce cosa cucinare con quello che hai già in casa, e qualche statistica per capire quanto stai sprecando.',
      'Come le altre nostre app funziona offline e senza account. L’unica eccezione, facoltativa, è la ricerca anonima del codice a barre su Open Food Facts quando aggiungi un prodotto nuovo.',
    ],
    funzioni: [
      { titolo: 'Scanner codice a barre', testo: 'Inquadri il codice e il prodotto viene riconosciuto da solo quando possibile.' },
      { titolo: 'Avvisi di scadenza', testo: 'Notifiche con preavviso regolabile, così consumi le cose in tempo.' },
      { titolo: 'Lista della spesa automatica', testo: 'I prodotti finiti o scaduti entrano nella lista senza doverli riscrivere.' },
      { titolo: 'Ricette', testo: 'Idee per cucinare con quello che è già in dispensa.' },
      { titolo: 'Categorie e posizioni', testo: 'Dispensa, frigo, freezer e categorie personalizzabili, con filtri veloci.' },
      { titolo: 'Statistiche', testo: 'Valore dei prodotti sprecati, categorie più presenti e prodotti più ricomprati.' },
    ],
    privacy: 'Funziona offline, senza account e senza pubblicità. I dati restano sul dispositivo, con backup automatico interno.',
    tecnologia: ['Ionic', 'Angular', 'Capacitor', 'ML Kit'],
    copertina: 'copertina.webp',
    screenshot: [
      { file: 'home.webp', didascalia: 'La home con prodotti in scadenza e avvisi' },
      { file: 'dispensa.webp', didascalia: 'Tutta la dispensa con filtri per posizione e scadenza' },
      { file: 'dispensa-scura.webp', didascalia: 'Anche in tema scuro' },
      { file: 'ricette.webp', didascalia: 'Ricette suggerite in base a cosa hai in casa' },
      { file: 'spesa.webp', didascalia: 'La lista della spesa si compila da sola' },
      { file: 'impostazioni.webp', didascalia: 'Impostazioni, notifiche e statistiche' },
    ],
  },
  {
    slug: 'scoutsafe',
    nome: 'ScoutSafe',
    slogan: 'La sicurezza del tuo campo scout',
    sintesi: 'Un aiuto per i capi scout nella preparazione dei campi: posizione su mappa, rischi meteo e sismici con dati reali, nodi consigliati e un rapporto di sicurezza in PDF.',
    colore: '#386641',
    piattaforma: 'Web app installabile',
    stato: 'In sviluppo',
    cercaTester: false,
    categoria: 'Outdoor e sicurezza',
    descrizione: [
      'ScoutSafe è un progetto a cui teniamo in modo particolare. Chi ha fatto scout lo sa: preparare un campo significa pensare a mille cose, e la sicurezza dei ragazzi viene prima di tutto.',
      'Si parte scegliendo la posizione del campo sulla mappa, col GPS o inserendo le coordinate. L’app recupera le previsioni meteo dei giorni successivi e i dati sui terremoti recenti della zona e li trasforma in un livello di rischio semplice da leggere: alluvione, vento, temperatura, neve e attività sismica.',
      'C’è poi un consigliere di nodi: descrivi la situazione (ancoraggio della tenda, sollevamento, tipo di corda, vento, esperienza del gruppo) e ti propone i tre nodi più adatti, con i passaggi per farli. Alla fine tutto finisce in un rapporto di sicurezza esportabile in PDF.',
    ],
    funzioni: [
      { titolo: 'Campo su mappa', testo: 'Posizione tramite GPS o coordinate manuali, con mappa OpenStreetMap.' },
      { titolo: 'Rischi ambientali', testo: 'Alluvione, vento, temperatura, neve e sismicità con dati Open-Meteo e USGS.' },
      { titolo: 'Consigliere di nodi', testo: 'I tre nodi migliori tra quindici classici, scelti in base a sette parametri.' },
      { titolo: 'Rapporto di sicurezza', testo: 'Riepilogo con note personali, esportabile in PDF.' },
      { titolo: 'Storico', testo: 'Le sessioni salvate restano sul dispositivo e si possono riesportare.' },
      { titolo: 'Funziona offline', testo: 'Si installa come un’app e continua a funzionare anche senza campo.' },
    ],
    privacy: 'Le sessioni vengono salvate sul dispositivo. Le uniche richieste esterne servono a scaricare meteo e dati sismici della zona scelta.',
    tecnologia: ['Ionic', 'Angular', 'Leaflet', 'PWA'],
    copertina: 'copertina.webp',
    screenshot: [
      { file: 'campo.webp', didascalia: 'Impostazione del campo con la mappa' },
      { file: 'nodi.webp', didascalia: 'Il consigliere di nodi con i passaggi' },
      { file: 'rischi.webp', didascalia: 'Rischi ambientali calcolati con dati meteo reali' },
      { file: 'rapporto.webp', didascalia: 'Il rapporto di sicurezza finale' },
      { file: 'storico.webp', didascalia: 'Lo storico delle sessioni salvate' },
    ],
  },
];

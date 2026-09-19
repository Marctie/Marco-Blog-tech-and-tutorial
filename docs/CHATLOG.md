# CHATLOG — TastoReset

Registro delle sessioni di lavoro sul sito. Da leggere per primo quando si riprende.
File interno al repository: non viene pubblicato sul sito (Astro pubblica solo `src/pages` e `public/`).

---

## Sessione 1 — 19 settembre 2026

### Richiesta iniziale

Creare un sito info/news in italiano su informatica, gaming, console e tecnologie recenti, prendendo come
riferimento il portfolio in `../marco.peluso` ma **senza dati personali o lavorativi**. Requisiti:

- sezioni: Home, **Ho un problema**, **Articoli divisi per categoria**, più altre a scelta;
- pagine **progetti personali** per Dispence, FinanzAI, Device Test Pro (cartella `../Play Store`) e ScoutSafe
  (cartella `../Scousafe GitHub/ScoutSafe`), con presentazione, screenshot e loghi, **senza link di download**;
- **modulo per i tester del test chiuso Android** (requisito Google Play: 12 tester per 14 giorni);
- tanti articoli già pronti, recenti al 19/09/2026, con tutorial ispirati a fonti affidabili, immagini e
  rimandi a **canali YouTube italiani**;
- poche emoji, linguaggio semplice, **mai far capire che il sito è fatto con l'IA**, nessun riferimento
  all'utente o all'assistente;
- nome e logo a scelta; deve girare su GitHub Pages e essere pronto per un dominio futuro.

### Decisioni prese

| Tema | Decisione | Motivo |
|---|---|---|
| Nome | **TastoReset** ("hai provato a spegnere e riaccendere?") | Tech + gaming + assistenza, facile da ricordare |
| Logo | Tasto (keycap) con gradiente viola→turchese e freccia di riavvio | Coerente con la palette del portfolio di riferimento |
| Tecnologia | **Astro 7** (statico) invece di Ionic/Angular | Una pagina HTML vera per articolo = SEO molto migliore, adatto a GitHub Pages/Cloudflare |
| Stile | Ripreso dal portfolio: sfondo scuro, viola `#7c5cff` + turchese `#18d6c4`, font Space Grotesk + Inter | Richiesta "prendere come riferimento" |
| Tema | Scuro di default, chiaro automatico da sistema + pulsante per cambiarlo | Leggibilità |
| Immagini articoli | Copertine **generate da script** (niente foto di terzi) | Nessun problema di diritti, stile coerente |
| YouTube | Solo **canali verificati** o **ricerche YouTube** mirate, mai link a singoli video non verificati | Evitare link rotti o inventati |
| Firma articoli | "Redazione TastoReset", nessun nome di persona | Anonimato richiesto |
| Dispence | Presentata con il nome reale dell'app: **Dispensina Digitale** | È il nome usato nella scheda Play Store |

### Cosa è stato costruito

**Pagine** (75 in totale nella build):

- `/` Home: articolo in evidenza, ultime notizie, box "Qualcosa non funziona?" con ricerca e chip per dispositivo,
  tutorial, problemi risolti, gaming + prossime uscite, approfondimenti, progetti, banner tester, categorie,
  canali YouTube. Ogni articolo compare una sola volta nella home.
- `/notizie/` con filtro per categoria.
- `/articoli/` archivio con riquadri categoria, filtro per tipo e ricerca; `/articoli/categoria/<id>/` per le 7 categorie.
- `/articoli/<slug>/` pagina articolo: briciole, scheda dispositivo/difficoltà/tempo, copertina, indice laterale,
  box "Da guardare su YouTube", "Fonti e approfondimenti", tag, pulsanti condivisione (WhatsApp, Telegram,
  Facebook, X, copia link), "Non hai risolto?" per i problemi, articoli correlati, banner tester.
- `/ho-un-problema/` con riquadri per dispositivo, "regola d'oro" del riavvio, filtri e ricerca (legge `?q=` e `?d=`).
- `/tutorial/` con filtro per categoria e ricerca.
- `/uscite/` **calendario uscite** (extra): giochi, dispositivi, aggiornamenti; nasconde lato browser le date passate.
- `/progetti/` e `/progetti/<slug>/`: presentazione, funzioni, box privacy e tecnologia, galleria con ingrandimento, CTA tester.
- `/diventa-tester/`: 4 passaggi, modulo, FAQ (con dati strutturati FAQPage).
- `/canali-consigliati/` (extra), `/chi-siamo/`, `/privacy/` (GDPR, modulo tester), `/cerca/`, `404`.
- `/rss.xml`, `/sitemap-index.xml`, `/robots.txt`, `/manifest.webmanifest`, `/search-index.json`.

**SEO**: title/description, canonical, Open Graph + Twitter con immagine per ogni articolo, JSON-LD
(NewsArticle/Article, BreadcrumbList, WebSite con SearchAction, FAQPage).

**Contenuti: 51 articoli** in `src/content/articoli/` (date dal 12/08 al 19/09/2026)

- *Notizie (10)*: iPhone 18 Pro prezzi Italia; iPhone Duo; GTA 6 (19/11); Nintendo Direct settembre;
  State of Play settembre; One UI 9 / Android 17; Pixel 11; Galaxy Z Fold8/Flip8; Call of Duty MW4; Gears of War E-Day.
- *Approfondimenti (6)*: caro RAM 2026; Steam Machine; pieghevoli a confronto; Siri AI/Gemini/Galaxy AI in Italia;
  truffe online 2026; giochi dell'autunno 2026.
- *Guide all'acquisto (2)*: quale console comprare; come scegliere uno smartphone.
- *Tutorial (13)*: iOS 27; SSD PS5; Switch→Switch 2; Android↔iPhone; chiavetta Windows 11; Windows 10 ESU;
  controllo parentale; screenshot ovunque; WhatsApp verifica in due passaggi; passkey; chatbot AI per studio e lavoro;
  10 cose da fare col telefono nuovo; (+ liberare spazio iPhone classificato come problema).
- *Ho un problema (20)*: batteria Android; iPhone batteria dopo aggiornamento; spazio iPhone; memoria Android;
  Wi-Fi senza internet; PC lento all'avvio; schermata blu; Windows Update bloccato; PS5 luce blu; drift controller;
  NAT console; cuffie Bluetooth; telefono non carica; Play Store in sospeso; backup WhatsApp; gioco Steam non parte;
  chiavetta USB; stampante offline; account hackerato; telefono in acqua; iPhone schermo nero.

**Fatti verificati online** (fonti linkate negli articoli): evento Apple 9/9 (iPhone 18 Pro da 1.489 €, Pro Max da
1.639 €, uscita 18/9; iPhone Duo da 2.369 €, preordini 16/10, uscita 23/10); iOS 27 dal 14/9, compatibile da iPhone 11,
**Siri AI non disponibile in UE e non in italiano**; GTA 6 19/11 solo PS5/Xbox, 79,99 € standard, preload 12/11;
Nintendo Direct 9/9 (Metroid Ravenous 28/01/27, Kirby World Beyond primavera 2027, MH Wilds Switch 2 04/12,
Witcher 3 Switch 2 29/09, FF7 Revelation 08/04/27); State of Play 3/9 (Until Dawn 2 28/01/27, Metro 2039 04/02/27,
Gundam Rogue Orbit 05/03/27); One UI 9 a fasi dal 21/9; Pixel 11 da 999 €; Fold8 da 2.099 €, Fold8 Ultra 2.299 €,
Flip8 1.379 €; Steam Machine da 1.039 €; PS5 649,99 € / Digital 599,99 € / Pro 899,99 € (dal 2/4/26);
Xbox Series X 799,99 € (dal 1/8/26); Switch 2 499,99 € (dal 1/9/26); Windows 10 ESU per privati prorogato al 12/10/2027;
CoD MW4 23/10 anche su Switch 2; Gears E-Day 6/10 Xbox/PC.

**Canali YouTube verificati** (esistenza controllata): HDblog, TuttoTech, TechDale, iSpazio, Techprincess,
Everyeye, Multiplayer.it (@multiplayer), DDay.it, NintendoItalia, XBOX Italia, Geopop. Andrea Galeazzi non inserito
(handle non trovato).

**Progetti** (`src/data/progetti.ts`, immagini in `public/img/progetti/`):

- FinanzAI — test chiuso in corso; 4 screenshot. **Escluso lo screenshot "Movimenti"** perché nei dati demo compare
  "Progetto Web Marco R.".
- Device Test Pro — test chiuso in corso; 3 screenshot italiani (esclusi quelli in inglese).
- Dispensina Digitale — "in arrivo, test chiuso in preparazione"; 6 screenshot (chiaro e scuro).
- ScoutSafe — web app in sviluppo, non cerca tester; screenshot catturati dalla build `dist/` con Chrome headless
  (campo di esempio in Val di Fassa, utente demo `capo.reparto@esempio.it`); copertina 1024×500 generata.
  Nota: nel codice di ScoutSafe ci sono credenziali in chiaro, ma l'utente ha confermato che è **solo dimostrativo**:
  nessuna azione necessaria.

**Modulo tester** (`src/pages/diventa-tester.astro`): nome, Gmail del Play Store, app (checkbox, preselezione con
`?app=<slug>`), modello telefono, versione Android, note, honeypot anti-spam, due consensi obbligatori.
Provider configurabile in `src/site.config.ts` → `TESTER_FORM` (`google-apps-script` o `formspree`).
**Endpoint ancora vuoto**: il modulo mostra "in manutenzione". Guida e codice Apps Script pronti in
`docs/MODULO-TESTER.md`. Testato end-to-end con server finto: validazioni, messaggio manutenzione, invio e
messaggio di conferma funzionano.

**Strumenti**

- `npm run dev` / `npm run build` / `npm run preview`
- `npm run nuovo -- "Titolo" [tipo] [categoria]` crea un articolo con frontmatter pronto.
- `scripts/covers.mjs` (gira in `prebuild`): genera `public/covers/<slug>.webp` e `public/og/<slug>.jpg`
  solo se mancano (`npm run covers -- --tutte` per rifarle). Le copertine sono committate apposta, così la
  build su un altro server non le rigenera con font diversi.
- `docs/LINEA-EDITORIALE.md`: regole di scrittura. `README.md`: comandi, struttura, dominio.

### Controlli fatti

- Build pulita: 75 pagine, nessun errore; nessun errore JavaScript in console.
- Link interni: tutti validi (l'unico segnalato dal controllo è un falso positivo dentro il JS di `/cerca/`).
- Link esterni: tutti 200, tranne WhatsApp FAQ e facebook.com/hacked che bloccano i controlli automatici
  (validi da browser). Corretti 3 link ufficiali sbagliati (Apple "iPhone non risponde", PlayStation modalità
  provvisoria, Nintendo filtro famiglia).
- Verifica visiva desktop, mobile (390 px, nessuno scorrimento orizzontale) e tema chiaro.
- Build simulata con sottocartella GitHub Pages (`/Marco-Blog-tech-and-tutorial/`): link corretti.
- Nessun riferimento a "Marco", "Peluso", "Marctie" o all'IA nei sorgenti del sito.

Bug trovati e corretti durante i controlli: paragrafi degli articoli senza spazio; copertina deformata su mobile
(`height:auto` mancante); `.section` che azzerava il margine laterale di `.wrap`; "1 soluzioni"; "15 Minuti" con
maiuscola; articoli duplicati nella home; griglia "Le ultime" con un buco; dato errato sullo spazio utile PS5;
parser del frontmatter nello script copertine; immagini social passate da PNG (12 MB) a JPEG (2,4 MB).

### Git e pubblicazione

- Repo: `github.com/Marctie/Marco-Blog-tech-and-tutorial`, **privato**, branch `main`.
- Commit `11fd9d9` "Prima versione del sito TastoReset" e `7103913` "Pubblicazione solo manuale per ora".
- **GitHub Pages volutamente NON attivo** (decisione dell'utente, per questo il repo è privato). Il primo push aveva
  avviato il workflow ed è fallito proprio per Pages non attivo; ora `.github/workflows/deploy.yml` parte **solo a mano**
  (`workflow_dispatch`).
- I commit usano l'identità git globale dell'utente (nome/email personali): ok finché il repo è privato; se diventa
  pubblico valutare un'identità generica con `git config user.name/user.email` locali.
- Sito avviato in locale con `astro preview` su http://localhost:4321 (si ferma con `npx astro preview stop`).

### Hosting: consiglio dato

**Cloudflare Pages**: gratis, banda illimitata, HTTPS, funziona con repo privato, deploy automatico a ogni push.
Impostazioni: build `npm run build`, output `dist`, variabile `NODE_VERSION=24` (Astro 7 richiede Node ≥ 22.12).
Dominio: `.com` comprabile su Cloudflare a prezzo di costo; **i `.it` Cloudflare non li vende** → comprarli su un
registrar italiano (Aruba, Register.it, OVH) e puntare i DNS su Cloudflare. Con Cloudflare il workflow GitHub non serve.
Quando si sceglie il dominio: aggiornare il valore di riserva `site` in `astro.config.mjs` (oggi `https://www.tastoreset.it`)
oppure impostare la variabile `SITE_URL` su Cloudflare.

### Da fare (prossima sessione)

1. Decidere il **dominio** e configurare **Cloudflare Pages** (collegamento repo, variabili, dominio personalizzato).
2. Creare lo script **Google Apps Script** e incollare l'URL in `TESTER_FORM.endpoint` per attivare il modulo tester.
3. Facoltativo: un'**email di contatto generica** del sito (oggi la privacy rimanda all'email di invito al test o al modulo).
4. Rivedere eventuali testi o progetti (stato di Dispensina/FinanzAI/Device Test Pro se nel frattempo è cambiato).
5. Continuare a pubblicare articoli seguendo `docs/LINEA-EDITORIALE.md` e aggiornare `src/data/uscite.ts`.

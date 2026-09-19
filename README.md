# TastoReset

Sito di notizie, guide e soluzioni ai problemi su smartphone, PC, console e videogiochi.
Costruito con [Astro](https://astro.build): ogni pagina è HTML statico, veloce e indicizzabile, pubblicato su GitHub Pages.

## Comandi

```bash
npm install        # installa le dipendenze (una volta sola)
npm run dev        # sito in locale su http://localhost:4321
npm run build      # genera le copertine mancanti e costruisce il sito in dist/
npm run preview    # anteprima della build
npm run nuovo -- "Titolo" tipo categoria   # crea un nuovo articolo
npm run covers -- --tutte                   # rigenera tutte le copertine
```

## Struttura

| Percorso | Cosa contiene |
|---|---|
| `src/content/articoli/*.md` | Tutti gli articoli (notizie, approfondimenti, guide, tutorial, problemi) |
| `src/site.config.ts` | Nome del sito, categorie, dispositivi, canali YouTube, **modulo tester** |
| `src/data/progetti.ts` | Le schede dei progetti (app) |
| `src/data/uscite.ts` | Il calendario delle uscite |
| `public/img/progetti/` | Loghi e screenshot delle app |
| `public/covers/`, `public/og/` | Copertine e immagini social generate da `scripts/covers.mjs` |
| `docs/` | Guide operative (modulo tester, linee editoriali) |

## Pubblicare un articolo

1. `npm run nuovo -- "Il mio titolo" tutorial pc`
2. Scrivi il testo nel file creato in `src/content/articoli/`.
3. `npm run build` per controllare che sia tutto a posto (genera anche la copertina).
4. Commit e push su `main`: il sito si aggiorna da solo in un paio di minuti.

Le regole di scrittura sono in [docs/LINEA-EDITORIALE.md](docs/LINEA-EDITORIALE.md).

Campi utili nel frontmatter:

- `tipo`: `notizia`, `approfondimento`, `guida-acquisto`, `tutorial`, `problema`
- `categoria`: `smartphone`, `pc`, `gaming`, `console`, `app`, `sicurezza`, `ai`
- `dispositivo` (per problemi e tutorial): `android`, `iphone`, `windows`, `console`, `rete`, `app`, `accessori`
- `evidenza: true` mette l'articolo in primo piano in home
- `copertina`: la parola grande stampata sull'immagine di copertina
- `fonti` e `video`: elenchi di link mostrati in fondo all'articolo

Box speciali utilizzabili nel testo:

```html
<div class="box box-tip"><strong>Consiglio</strong> Testo del consiglio.</div>
<div class="box box-warn"><strong>Attenzione</strong> Testo dell'avviso.</div>
<span class="percorso">Impostazioni › Sistema › Archiviazione</span>
<kbd>Ctrl</kbd> + <kbd>C</kbd>
```

## Modulo "Diventa tester"

Va collegato a un servizio che riceve le risposte. Istruzioni passo passo (Google Fogli, gratis) in
[docs/MODULO-TESTER.md](docs/MODULO-TESTER.md).

## Pubblicazione su GitHub Pages

1. Su GitHub: **Settings › Pages › Build and deployment › Source: GitHub Actions**.
2. Push su `main`. Il workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) costruisce e pubblica.

Il workflow ricava in automatico indirizzo e sottocartella dal repository, quindi funziona sia sull'indirizzo
`*.github.io/nome-repo/` sia con un dominio personalizzato.

## Collegare un dominio

1. Compra il dominio (per esempio `tastoreset.it`).
2. Dal pannello del registrar crea i record DNS:
   - dominio principale: quattro record **A** verso `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: record **CNAME** verso `<utente>.github.io`
3. Su GitHub: **Settings › Pages › Custom domain**, inserisci `www.tastoreset.it` e attiva **Enforce HTTPS** quando disponibile.
4. Rilancia il workflow (Actions › Pubblica il sito › Run workflow): link, sitemap e immagini social useranno il nuovo dominio.

Se cambi nome al sito, aggiorna anche il valore di riserva di `site` in [astro.config.mjs](astro.config.mjs).

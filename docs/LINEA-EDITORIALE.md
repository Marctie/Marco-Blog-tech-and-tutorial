# Linea editoriale di TastoReset

Brief da seguire per scrivere nuovi articoli, a mano o con l'aiuto di qualcuno.

## Tono

- Si scrive come un amico appassionato che dà consigli: **diretto, semplice, concreto**.
- Si usa il "tu" con il lettore e il "noi" per la redazione.
- Parole normali. Niente termini ricercati o frasi da manuale ("è fondamentale", "in conclusione", "immergiamoci").
- Se un prodotto non convince, lo si dice. Niente toni da comunicato stampa.
- Emoji: al massimo una o due, e solo se servono davvero.
- Il sito non parla mai di come vengono prodotti i contenuti e non cita persone della redazione per nome.

## Argomenti

Tecnologia consumer: smartphone e tablet, PC e Windows, videogiochi, console, app e internet, sicurezza per
utenti comuni, intelligenza artificiale "da usare". Niente politica, niente programmazione per addetti ai lavori.

## Formati

| Tipo | Quando | Lunghezza |
|---|---|---|
| `notizia` | Lanci, prezzi, date, aggiornamenti | 400-700 parole |
| `approfondimento` | Spiegare un fenomeno o confrontare prodotti | 700-1200 parole |
| `guida-acquisto` | Aiutare a scegliere cosa comprare | 700-1200 parole |
| `tutorial` | Passo passo per fare qualcosa | 500-1000 parole |
| `problema` | Qualcosa non funziona: soluzioni dalla più semplice alla più drastica | 500-900 parole |

## Regole pratiche

- **Notizie**: sempre almeno una fonte affidabile nel campo `fonti`. Prezzi **italiani** e date precise quando esistono.
- **Tutorial e problemi**: percorsi esatti delle impostazioni con `<span class="percorso">`, difficoltà e tempo stimato.
  Chiudere con "quando andare in assistenza" se ha senso.
- **Video**: collegare canali YouTube italiani verificati (vedi `CANALI_YOUTUBE` in `src/site.config.ts`)
  oppure una ricerca YouTube mirata. Mai inventare link a video specifici senza averli controllati.
- **Link interni**: collegare sempre 2-3 articoli correlati, con link relativi tipo `../slug-articolo/`.
- Almeno una citazione `>` per articolo, e intestazioni `##` chiare (diventano l'indice laterale).
- Se si aggiorna un articolo, aggiungere `updated: AAAA-MM-GG` nel frontmatter.
- Quando esce un gioco o un dispositivo importante, aggiungerlo anche a `src/data/uscite.ts`.

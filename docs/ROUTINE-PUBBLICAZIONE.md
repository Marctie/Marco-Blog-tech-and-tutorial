# Routine di pubblicazione automatica

Istruzioni per l'agente che scrive e pubblica **1 articolo alle 9:00 e 1 alle 18:00** (Europe/Rome).
Leggi anche `docs/LINEA-EDITORIALE.md` (tono, formati, regole) e `docs/CHATLOG.md`.

## Regole non negoziabili

1. **Anonimato**: nessun riferimento a persone della redazione, all'autore del sito o al fatto che i contenuti siano prodotti con l'IA. Firma sempre "Redazione TastoReset" (è il valore predefinito del sito).
2. **Niente link di download alle app** dei progetti personali.
3. **Fatti verificati**: cerca sul web prima di scrivere. Ogni notizia ha almeno una fonte reale nel campo `fonti`, con URL che hai effettivamente letto. Cifre e date attribuite alla fonte. Se le fonti si contraddicono o non trovi conferma, **non affermare**: attenua o scegli un altro argomento. Mai inventare prezzi, date o link.
   **Se una pagina non si apre** (l'ambiente cloud può bloccare alcuni siti, errore `EGRESS_BLOCKED`): prova altre fonti; cita in `fonti` solo URL che hai davvero letto o che sono comparsi nei risultati di ricerca; per le **notizie** non pubblicare cifre, prezzi o date che trovi in una sola fonte non letta. Se non riesci a confermare almeno due elementi chiave da fonti diverse, cambia argomento (meglio un evergreen che conosci bene) oppure non pubblicare. L'attendibilità viene prima della frequenza di pubblicazione.
4. **Video**: solo canali di `CANALI_YOUTUBE` in `src/site.config.ts` oppure una ricerca YouTube mirata. Mai link a singoli video non verificati.
5. **Data dell'articolo** = data reale di oggi (fuso Europe/Rome). Non retrodatare e non usare date future.
6. **Niente duplicati**: prima di scrivere elenca `src/content/articoli/` e scegli un argomento non ancora coperto (per gli aggiornamenti di notizie già presenti, usa `updated:` e non un nuovo articolo).
7. Poche emoji (idealmente zero), linguaggio semplice, "tu" al lettore.
8. Non toccare altro che: il nuovo articolo, le sue copertine generate, `src/data/uscite.ts` (se serve) e `docs/REGISTRO-ROUTINE.md`.

## Cosa pubblicare

| Slot | Tipo | Come scegliere l'argomento |
|---|---|---|
| **9:00** | `notizia` (a volte `approfondimento`) | La notizia più utile delle ultime 24 ore per un lettore italiano nelle categorie del sito |
| **18:00** | `tutorial`, `problema`, `guida-acquisto` oppure `approfondimento` | Un contenuto che serva anche fra sei mesi, legato a ciò che è successo di recente (es. un aggiornamento appena uscito) |

**Rotazione delle categorie** (`smartphone`, `pc`, `gaming`, `console`, `app`, `sicurezza`, `ai`): guarda le ultime 6 date in `src/content/articoli/` e scegli la categoria **meno recente**. Nessuna categoria deve mancare per più di tre giorni. Almeno 1 articolo su 3 deve essere un `tutorial` o un `problema` (sono quelli che portano più visite da ricerca).

Argomenti: solo tecnologia consumer (vedi linea editoriale). Niente politica, niente cronaca, niente programmazione per addetti ai lavori.

## Come si scrive un articolo

1. Cerca notizie e conferme sul web (più fonti, meglio se ufficiali o testate italiane note).
2. Crea il file con `npm run nuovo -- "Titolo" tipo categoria`, poi compila. Frontmatter completo: `title`, `description`, `date`, `tipo`, `categoria`, `tags`, `copertina` (parola breve), `fonti`, `video`; per `tutorial` e `problema` anche `dispositivo`, `difficolta`, `tempo`.
3. Lunghezza secondo il formato (vedi linea editoriale). Almeno un'intestazione `##` per sezione, almeno una citazione `>`, 2-3 **link interni** a articoli esistenti con `../slug/` (controlla che gli slug esistano).
4. Percorsi delle impostazioni con `<span class="percorso">Impostazioni → ...</span>`. Se non sei certo del percorso esatto, descrivilo in modo generico.
5. Se esce un gioco o un dispositivo importante, aggiungilo a `src/data/uscite.ts`.

## Verifica e pubblicazione

1. `npm run build` deve finire senza errori. Le copertine (`public/covers`, `public/og`) si generano da sole: **vanno committate** insieme all'articolo.
2. Rileggi l'articolo: nessun nome personale, nessuna frase in prima persona singolare, nessun dato non supportato dalle fonti.
3. Aggiungi una riga a `docs/REGISTRO-ROUTINE.md` con: data, ora, titolo, slug, categoria, tipo.
4. Commit con messaggio `Articolo: <titolo>` e push su `main`.
5. Se la build fallisce o non trovi un argomento affidabile, **non pubblicare nulla**: scrivi nel registro il motivo e termina.
6. Un solo articolo per esecuzione.

# Attivare il modulo "Diventa tester"

Il sito è statico (GitHub Pages), quindi le risposte del modulo devono essere inviate a un servizio esterno.
Finché non configuri un indirizzo, il modulo mostra il messaggio "in manutenzione" e **non perde dati per strada**.

La configurazione sta in [`src/site.config.ts`](../src/site.config.ts):

```ts
export const TESTER_FORM = {
  provider: 'google-apps-script', // oppure 'formspree'
  endpoint: '',                    // incolla qui l'URL
};
```

---

## Opzione consigliata: Google Fogli + Apps Script (gratis, senza limiti pratici)

Le risposte finiscono in un foglio Google e ricevi un'email a ogni iscrizione.

1. Vai su [sheets.new](https://sheets.new) e crea un foglio chiamato ad esempio **Tester**.
2. Nella prima riga scrivi le intestazioni:
   `Data | Nome | Email | App | Dispositivo | Android | Note | Pagina`
3. Menu **Estensioni › Apps Script**. Cancella il codice presente e incolla questo:

```js
// Riceve le iscrizioni dal sito e le salva nel foglio.
const EMAIL_NOTIFICA = ''; // opzionale: la tua email per ricevere un avviso a ogni iscrizione

function doPost(e) {
  const p = e.parameter;
  const foglio = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  // controlli minimi anti-spam
  if (!p.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) {
    return ContentService.createTextOutput('errore');
  }
  const pulisci = (v) => String(v || '').slice(0, 600).replace(/^[=+\-@]/, "'");

  foglio.appendRow([
    new Date(),
    pulisci(p.nome),
    pulisci(p.email),
    pulisci(p.app),
    pulisci(p.dispositivo),
    pulisci(p.android),
    pulisci(p.note),
    pulisci(p.pagina),
  ]);

  if (EMAIL_NOTIFICA) {
    MailApp.sendEmail(EMAIL_NOTIFICA, 'Nuovo tester: ' + pulisci(p.nome),
      'Email: ' + p.email + '\nApp: ' + p.app + '\nDispositivo: ' + p.dispositivo + ' (' + p.android + ')\nNote: ' + p.note);
  }
  return ContentService.createTextOutput('ok');
}
```

4. Clicca **Esegui il deployment › Nuovo deployment**.
   - Tipo: **App web**
   - Esegui come: **Me**
   - Chi ha accesso: **Chiunque**
5. Autorizza lo script quando Google lo chiede (è il tuo script, puoi procedere).
6. Copia l'**URL dell'app web** (finisce con `/exec`) e incollalo in `endpoint` dentro `src/site.config.ts`.
7. Fai commit e push: il sito si aggiorna da solo.

> Se in futuro modifichi lo script, ricordati di fare **Gestisci deployment › Modifica › Nuova versione**, altrimenti resta attiva quella vecchia.

Nota: con Apps Script il browser non può leggere la risposta del server (limite di Google), quindi il sito mostra
"richiesta ricevuta" appena l'invio parte. Controlla il foglio dopo il primo test.

---

## Alternativa: Formspree

1. Crea un account su [formspree.io](https://formspree.io) e un nuovo form.
2. Copia l'endpoint (tipo `https://formspree.io/f/abcdwxyz`).
3. In `src/site.config.ts` imposta `provider: 'formspree'` e incolla l'endpoint.

Il piano gratuito ha un limite mensile di invii, per un test chiuso di solito basta.

---

## Dopo l'iscrizione: aggiungere i tester su Google Play

1. **Play Console › [app] › Test › Test chiuso › Tester**.
2. Aggiungi le email in una lista (oppure usa un Google Gruppo e aggiungi lì gli indirizzi).
3. Copia il **link di partecipazione** (compare dopo l'approvazione della release di test) e mandalo ai nuovi tester.
4. Ricorda il requisito per gli account sviluppatore personali: **almeno 12 tester iscritti per 14 giorni consecutivi** prima di poter chiedere l'accesso alla produzione.

Per privacy, cancella i dati dal foglio quando il test finisce (così dice anche la pagina Privacy del sito).

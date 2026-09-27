# Attivare il modulo "Contatti"

Il sito è statico, quindi i messaggi devono passare da un servizio esterno gratuito. Finché non configuri
un indirizzo, il modulo mostra "in manutenzione" e non perde messaggi per strada.

La configurazione sta in [`src/site.config.ts`](../src/site.config.ts):

```ts
export const CONTACT_FORM = {
  provider: 'formspree',
  endpoint: '', // incolla qui l'URL
};
```

## Formspree (il più semplice, 5 minuti, nessun codice da scrivere)

1. Vai su [formspree.io](https://formspree.io) e crea un account gratuito (basta un'email o l'accesso con Google).
2. Clicca **+ New Form**, dagli un nome (es. "TastoReset Contatti") e come email di destinazione metti
   **dev.marco.lino99@gmail.com**.
3. Formspree ti manda una email di conferma su quell'indirizzo: apri l'email e clicca il link per confermarlo
   (altrimenti non riceverai i messaggi).
4. Nella pagina del form appena creato copia l'**endpoint**, un indirizzo del tipo:
   `https://formspree.io/f/abcdwxyz`
5. Incollalo nel campo `endpoint` di `CONTACT_FORM` in `src/site.config.ts`, al posto delle virgolette vuote.
6. Fai commit e push: il sito si aggiorna da solo.

Da quel momento, ogni volta che qualcuno compila il modulo su `/contatti/`, ricevi una email su
**dev.marco.lino99@gmail.com** con nome, email di chi scrive, motivo e messaggio.

Il piano gratuito di Formspree ha un limite di 50 invii al mese: per un modulo contatti normalmente basta.

Nota: come per il modulo tester, il browser non può leggere la risposta del server in caso di errore CORS
particolari, ma con Formspree la conferma funziona correttamente (a differenza di Apps Script) e il sito
mostra "messaggio inviato" solo se l'invio è andato davvero a buon fine.

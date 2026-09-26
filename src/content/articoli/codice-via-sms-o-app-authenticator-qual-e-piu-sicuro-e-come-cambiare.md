---
title: "Codice via SMS o app authenticator: qual è più sicuro (e come cambiare)"
description: "Il codice di verifica via SMS non è più la scelta migliore per proteggere i tuoi account. Ecco perché un'app authenticator è più sicura e come attivarla in pochi minuti."
date: 2026-09-26
tipo: tutorial
categoria: sicurezza
tags: [Sicurezza, 2FA, SIM Swap, Google, Microsoft]
copertina: "2FA"
dispositivo: app
difficolta: facile
tempo: "10 minuti"
fonti:
  - titolo: "Banca d'Italia - La truffa SIM swap"
    url: "https://economiapertutti.bancaditalia.it/notizie/la-truffa-sim-swap/"
  - titolo: "Microsoft - Come aggiungere gli account a Microsoft Authenticator"
    url: "https://support.microsoft.com/it-it/account-billing/come-aggiungere-gli-account-a-microsoft-authenticator-92544b53-7706-4581-a142-30344a2a2a57"
video:
  - titolo: "Cerca 'app authenticator come funziona' su YouTube"
    url: "https://www.youtube.com/results?search_query=app+authenticator+come+funziona+autenticazione+due+fattori"
  - titolo: "Tecnologia spiegata su TechDale"
    url: "https://www.youtube.com/@TechDale"
    canale: "TechDale"
---

Ricevi un SMS con un codice ogni volta che accedi a Google, Instagram o alla tua banca e pensi di essere già al sicuro. Nella maggior parte dei casi va bene così, ma esiste un punto debole che in pochi conoscono: se qualcuno riesce a farsi intestare un duplicato della tua SIM (la cosiddetta truffa **SIM swap**), quei codici arrivano dritti a lui, non a te. Non serve rinunciare alla verifica in due passaggi: basta spostarla da SMS a un'app authenticator, gratuita e più difficile da aggirare.

## Perché lo SMS è il punto più debole

Il codice via SMS resta meglio di niente, ma dipende dalla rete telefonica. Un truffatore che ha già raccolto i tuoi dati personali (con phishing, un documento falsificato o un finto smarrimento) può chiedere a un operatore un duplicato della tua SIM. Se ci riesce, per qualche ora riceve lui i tuoi SMS, compresi i codici di accesso a email, social e conto in banca. È un attacco mirato e più raro di un semplice phishing, ma quando succede è veloce: i truffatori agiscono nel giro di poche ore dall'attivazione del duplicato.

Un'app authenticator elimina il problema alla radice: il codice non viaggia sulla rete telefonica. Viene generato **direttamente sul telefono**, offline, e cambia ogni 30 secondi. Anche chi clona la tua SIM non vede nulla.

## Come funziona un'app authenticator

Le più diffuse sono Google Authenticator, Microsoft Authenticator e Authy, disponibili gratis su Android e iPhone. Il funzionamento è identico:

1. Colleghi l'app a un account (Google, Microsoft, Instagram, un gestionale di lavoro...) inquadrando un QR code mostrato dal sito.
2. Da quel momento l'app mostra un codice di 6-8 cifre che si rinnova da solo ogni mezzo minuto.
3. Quando accedi da un computer o un dispositivo nuovo, oltre alla password ti verrà chiesto quel codice: lo apri dall'app e lo digiti, senza bisogno di connessione internet o rete telefonica.

> Un'app authenticator funziona anche in aereo, senza SIM e senza campo: il codice è calcolato dal telefono, non ricevuto dalla rete.

## Come attivarla passo per passo

Il percorso cambia leggermente da servizio a servizio, ma la logica è sempre la stessa:

1. Installa Google Authenticator o Microsoft Authenticator dal Play Store o dall'App Store (funzionano anche con account di provider diversi: puoi usare Microsoft Authenticator per il tuo account Google, per esempio).
2. Sul sito o nell'app del servizio da proteggere, entra nelle impostazioni dell'account e cerca la voce <span class="percorso">Sicurezza → Verifica in due passaggi</span> (a volte chiamata "autenticazione a due fattori" o "2FA").
3. Scegli l'opzione "app di autenticazione" e inquadra il QR code con l'app appena installata.
4. Conferma inserendo il primo codice generato: da qui in poi quell'account userà l'app invece (o oltre) dello SMS.
5. **Salva i codici di backup** che il servizio ti propone a fine configurazione: servono se perdi il telefono o lo cambi, e sono l'unico modo per rientrare nell'account senza l'app.

Se cambi telefono, ricordati di trasferire l'app authenticator prima di resettare il vecchio dispositivo: sia Google Authenticator sia Microsoft Authenticator hanno una funzione di trasferimento o backup nel cloud legata al tuo account, proprio per evitare di restare fuori da tutto.

## Non serve fare tutto subito

Non devi convertire ogni account in un pomeriggio. Comincia da quelli che aprirebbero le porte a tutto il resto se venissero rubati: email principale, Google o Apple ID, e l'app della banca. Per WhatsApp il discorso è un po' diverso e lo trovi spiegato in modo specifico nella <a href="../whatsapp-verifica-due-passaggi-proteggere-account/">guida alla verifica in due passaggi di WhatsApp</a>. Se invece vuoi fare un passo oltre l'app authenticator, esistono anche le <a href="../passkey-cosa-sono-come-attivarle/">passkey</a>, che tolgono di mezzo pure la password. E se temi che un account sia già compromesso, la procedura da seguire è quella che trovi nella guida su <a href="../account-hackerato-cosa-fare-subito/">cosa fare quando ti hanno hackerato un account</a>.

Dieci minuti oggi, e la parte più delicata dei tuoi account non dipende più da un SMS che chiunque, in teoria, potrebbe intercettare.

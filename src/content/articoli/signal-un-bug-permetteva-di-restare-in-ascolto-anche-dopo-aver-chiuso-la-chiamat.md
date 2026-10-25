---
title: "Signal, un bug permetteva di restare in ascolto anche dopo aver chiuso la chiamata"
description: "Una falla in RingRTC, la libreria che gestisce le chiamate di Signal, poteva impedire la disconnessione del microfono: ecco cosa sappiamo e perché conviene aggiornare l'app."
date: 2026-10-25
tipo: notizia
categoria: sicurezza
tags: [Signal, privacy, sicurezza, chiamate, aggiornamento]
copertina: "Signal bug chiamate"
fonti:
  - titolo: "RedHotCyber - Signal, premi \"chiudi\" ma non chiudi: l'interlocutore potrebbe continuare ad ascoltarti"
    url: "https://www.redhotcyber.com/post/signal-premi-chiudi-ma-non-chiudi-linterlocutore-potrebbe-continuare-ad-ascoltarti/"
  - titolo: "Malwarebytes IT - Un bug di Signal poteva far continuare l'ascolto dopo la chiusura della chiamata"
    url: "https://www.malwarebytes.com/it/blog/bugs/2026/10/signal-bug-could-let-someone-keep-listening-after-you-hang-up"
video: []
---

Se usi Signal per le chiamate vocali o video, conviene controllare che l'app sia aggiornata: una falla in RingRTC, la libreria open source che gestisce le chiamate dell'app, poteva impedire la disconnessione corretta a fine conversazione, lasciando il microfono (e forse la videocamera) ancora attivi dal lato di chi stava ascoltando.

## Cos'è successo

Il problema riguarda il momento in cui una chiamata viene chiusa. Un partecipante già presente nella conversazione poteva saturare la coda interna degli eventi di RingRTC, interferendo con i passaggi che dovrebbero interrompere la connessione. Il risultato è che il programma poteva non chiudere subito i canali audio (e, secondo alcune fonti, anche quelli video), lasciando chi aveva "in ascolto" la possibilità di continuare a sentire quello che succedeva dall'altra parte anche dopo che la persona pensava di aver terminato la chiamata.

> Non sono noti casi di sfruttamento in corso: la falla è stata scoperta e corretta prima che se ne avesse notizia pubblica.

È importante chiarire cosa questa falla **non** riguarda: secondo Malwarebytes, la crittografia end-to-end delle conversazioni di Signal non è stata compromessa, e il bug non ha dato accesso a password, account o alla cronologia dei messaggi. Il rischio era limitato all'audio (ed eventualmente al video) della chiamata in corso, e richiedeva che l'attaccante fosse già un partecipante attivo: non bastava conoscere il numero di telefono di qualcuno o inviare un messaggio per attivare il problema.

## Gravità e correzione

La vulnerabilità è registrata come **CVE-2026-113380**, con un punteggio di gravità di **9,3 su 10**, quindi classificata come critica. Riguarda tutte le versioni di RingRTC precedenti alla 2.72.0, distribuita a settembre 2026: gli sviluppatori hanno reso più solida la procedura di chiusura della chiamata, in modo che funzioni anche quando la coda degli eventi è piena o un altro passaggio della disconnessione fallisce.

Non è ancora confermato pubblicamente quando la correzione sia arrivata su ciascuna piattaforma (Android, iPhone, desktop), perché Signal non ha diffuso una nota dedicata: la falla è diventata di dominio pubblico solo il 20 ottobre, circa un mese dopo la patch sulla libreria.

## Cosa conviene fare

Il consiglio pratico è semplice: aggiorna Signal su tutti i dispositivi su cui lo usi.

- Su **Android**: <span class="percorso">Play Store → la tua icona profilo → Gestisci app e dispositivo</span>, cerca Signal e aggiorna se è disponibile un aggiornamento.
- Su **iPhone**: <span class="percorso">App Store → la tua icona profilo</span>, scorri fino a Signal e tocca Aggiorna.
- Su **desktop** (Windows, Mac, Linux): apri l'app, vai nelle impostazioni e controlla se è segnalato un aggiornamento disponibile, oppure scarica di nuovo l'installer dal sito ufficiale.

Non serve cambiare app o abbandonare Signal: resta una delle soluzioni più attente alla privacy tra le app di messaggistica, anche perché i problemi di questo tipo vengono corretti rapidamente quando emergono. Vale comunque la regola generale che vale per qualsiasi app di comunicazione: non rimandare gli aggiornamenti, soprattutto quando riguardano la sicurezza delle chiamate o dei messaggi. Lo stesso principio si applica ad altri strumenti che usi ogni giorno, dal [browser](../chrome-due-aggiornamenti-di-sicurezza-in-poche-settimane-perche-conviene-riavvia/) a [WhatsApp](../whatsapp-verifica-due-passaggi-proteggere-account/), fino a un [password manager](../password-manager-quale-scegliere/) per non riusare le stesse credenziali ovunque.

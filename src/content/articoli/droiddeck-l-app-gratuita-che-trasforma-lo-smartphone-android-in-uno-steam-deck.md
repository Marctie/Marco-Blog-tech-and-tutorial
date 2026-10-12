---
title: "DroidDeck: l'app gratuita che trasforma lo smartphone Android in uno Steam Deck"
description: "DroidDeck porta il client Steam vero e proprio, con Proton incluso, su smartphone e tablet Android. La versione 0.3.0 aggiunge controlli in stile Steam Deck e riduce drasticamente i tempi di avvio, ma funziona solo su una parte dei telefoni."
date: 2026-10-12
tipo: notizia
categoria: app
tags: [Android, Steam, DroidDeck, PC gaming, app]
copertina: "DroidDeck"
fonti:
  - titolo: "Notebookcheck Italia - DroidDeck 0.3.0 porta su Android controlli in stile Steam Deck"
    url: "https://www.notebookcheck.it/DroidDeck-0-3-0-porta-su-Android-controlli-in-stile-Steam-Deck-e-generazione-dei-frame-mentre-l-avvio-di-Steam-scende-da-31-a-6-secondi.1415190.0.html"
  - titolo: "Pocket Tactics - This new Android app makes your gaming handheld feel more like a Steam Deck"
    url: "https://www.pockettactics.com/droiddeck-android"
  - titolo: "Everyeye - SteamOS su Android è realtà! Basta un'app gratis per giocare su mobile ai titoli PC di Steam"
    url: "https://www.everyeye.it/notizie/steamos-android-realta-app-gratis-giocare-mobile-titoli-pc-steam-905412.html"
video:
  - titolo: "Cerca 'DroidDeck Android Steam' su YouTube"
    url: "https://www.youtube.com/results?search_query=droiddeck+android+steam"
    canale: "Everyeye"
---

Si chiama DroidDeck ed è un'app Android gratuita e open source che fa una cosa che fino a poco tempo fa sembrava impossibile senza root o modifiche al telefono: eseguire il client Steam vero di Valve, con Proton incluso, per giocare ai titoli PC della tua libreria direttamente su smartphone o tablet. Non è uno streaming dal PC e non è un emulatore: il gioco viene eseguito sul dispositivo. L'ultima versione, la 0.3.0, aggiunge controlli in stile Steam Deck e tempi di avvio molto più rapidi, ma la lista di telefoni compatibili resta corta.

## Come funziona, senza root

DroidDeck gira sopra Android come una normale app, senza bisogno di permessi di root. Al suo interno porta il client Steam ARM64 di Valve in modalità Big Picture e usa Proton ARM64 per far funzionare i giochi pensati per Windows. In pratica: installi l'app, la configuri in base al tuo hardware, accedi con il tuo account Steam e installi i giochi che possiedi già nella tua libreria. Serve spazio libero: circa 3 GB per il runtime di base, più un altro 1,1 GB se attivi i componenti opzionali per l'ambiente desktop Linux.

> Uno degli sviluppatori del progetto lo descrive così: "È un'app che vogliamo far sembrare un sistema operativo."

## Le novità della versione 0.3.0

L'aggiornamento più recente introduce l'emulazione del controller in stile Steam Deck, con pulsante Quick Access e supporto al giroscopio del telefono, e su dispositivi a doppio schermo lascia usare il secondo display come impugnature posteriori o trackpad. C'è anche un overlay con uso di CPU e GPU, temperature, batteria e tempi di frame. La novità più evidente però riguarda la velocità: secondo gli sviluppatori l'avvio di Steam è sceso da circa 31 secondi a circa 6, un taglio di circa l'80%. Si aggiunge la generazione di frame tramite Lossless Scaling (con obiettivi di 60, 90 e 120 fotogrammi al secondo), anche se va presa dalla libreria Steam dell'utente e acquistata separatamente.

## Attenzione ai requisiti: non va su tutti i telefoni

Qui arriva la parte che conta di più prima di provare: DroidDeck richiede Android 9 o versioni successive e, soprattutto, una GPU Adreno di fascia alta, indicata come Adreno 730 o più recente (quindi i chip Qualcomm Snapdragon più potenti). Le GPU Mali, Xclipse, PowerVR e la stessa Adreno 710 non sono supportate: restano fuori buona parte degli smartphone Samsung con chip Exynos e molti dispositivi con processori MediaTek. Chi ha provato l'app su una GPU non supportata ha segnalato blocchi già all'avvio.

Vale anche la pena essere chiari sui limiti: il software è ancora in fase beta, la compatibilità con i singoli giochi non è garantita (alcuni titoli non partono per via di sistemi anticheat o componenti Windows specifici che mancano) e, alla domanda se l'app faccia girare tutti i giochi compatibili con Steam Deck, uno sviluppatore ha risposto di non poter dire "tutti".

## Da dove si scarica

DroidDeck è distribuito gratuitamente, con licenza open source GPL-3.0, dalla pagina ufficiale del progetto su GitHub (Droid-Deck/DroidDeck): non è disponibile sul Play Store. Il progetto precisa di non essere affiliato a Valve, anche se usa software originale dell'azienda (il client Steam e Proton). Se possiedi già una libreria Steam con giochi leggeri e un telefono con GPU Adreno recente, è un modo economico per provare il PC gaming in mobilità; se invece pensi a qualcosa di più stabile e già pronto all'uso, la strada più semplice resta un dispositivo dedicato: ne abbiamo parlato nella nostra prova della [Steam Machine](../steam-machine-prezzo-italia-vale-la-pena/). Chi segue le classifiche di gioco su PC può interessarsi anche al recente record di giocatori raggiunto da [The Witcher 3 Remastered su Steam](../the-witcher-3-remastered-rompe-il-record-di-giocatori-su-steam/), mentre se un titolo della tua libreria non si avvia nemmeno sul PC trovi i passaggi utili nella nostra guida su [cosa fare quando un gioco Steam non parte o crasha](../gioco-steam-non-si-avvia-soluzioni/).

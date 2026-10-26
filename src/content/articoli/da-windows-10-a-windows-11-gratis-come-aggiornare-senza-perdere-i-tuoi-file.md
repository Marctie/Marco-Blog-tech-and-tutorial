---
title: "Da Windows 10 a Windows 11 gratis: come aggiornare senza perdere i tuoi file"
description: "Windows 10 è ormai fuori supporto standard e anche Nvidia sta riducendo gli aggiornamenti per chi resta indietro. Ecco come passare a Windows 11 gratis, tenendo file e programmi, passo per passo."
date: 2026-10-26
tipo: tutorial
categoria: pc
tags: [Windows 10, Windows 11, Aggiornamento, PC]
copertina: "Windows 10 → 11"
dispositivo: windows
difficolta: facile
tempo: "30-60 minuti"
fonti:
  - titolo: "Microsoft Learn - Windows 11 requirements"
    url: "https://learn.microsoft.com/en-us/windows/whats-new/windows-11-requirements"
  - titolo: "Microsoft Learn - Plan for Windows 11 (PC Health Check, disponibilità tramite Windows Update)"
    url: "https://learn.microsoft.com/en-us/windows/whats-new/windows-11-plan"
  - titolo: "Dell - How to Roll Back Windows 11 and Downgrade to Windows 10"
    url: "https://www.dell.com/support/kbdoc/000192019/how-to-roll-back-windows-11-upgrade-to-a-previous-operating-system"
video:
  - titolo: "Guide Windows su TuttoTech"
    url: "https://www.youtube.com/@Tuttotech"
    canale: "TuttoTech"
  - titolo: "Cerca 'aggiornare Windows 10 a Windows 11' su YouTube"
    url: "https://www.youtube.com/results?search_query=aggiornare+windows+10+a+windows+11+gratis"
---

Se hai ancora un PC con Windows 10, probabilmente hai già letto che il supporto standard di Microsoft è finito e che anche aziende come Nvidia stanno [riducendo gli aggiornamenti per chi non passa a Windows 11](../nvidia-ultimo-mese-di-nuovi-driver-game-ready-per-windows-10-cosa-cambia-da-nove/). La buona notizia è che l'aggiornamento a Windows 11 resta **gratuito** per chi ha un PC compatibile, e si fa senza cancellare file, programmi o impostazioni: è diverso da un'installazione pulita, è un passaggio "sul posto".

Vediamo come controllare se il tuo PC può farlo e come procedere senza sorprese.

## Il tuo PC è compatibile?

Secondo i requisiti ufficiali pubblicati da Microsoft, per installare Windows 11 servono almeno:

- un **processore a 64 bit** con due o più core da 1 GHz, di generazione recente (in pratica dal 2018 in poi);
- **4 GB di RAM** e **64 GB di spazio libero** su disco;
- firmware **UEFI con Secure Boot** supportato;
- **TPM 2.0** attivo.

Il modo più semplice per saperlo senza controllare manualmente ogni voce è scaricare l'app ufficiale **Controllo integrità PC** (PC Health Check) dal sito Microsoft: la trovi nella pagina dedicata a Windows 11, pulsante "Controlla ora". L'app ti dice subito se il PC è idoneo e, se non lo è, indica il motivo (di solito TPM, Secure Boot o processore non supportato).

<div class="box box-tip">
<strong>TPM disattivato, non assente</strong>
Molti PC degli ultimi anni hanno il TPM 2.0 già a bordo ma spento di fabbrica nel BIOS/UEFI. Se l'app segnala TPM mancante, prima di considerare il PC incompatibile vale la pena entrare nelle impostazioni del BIOS (di solito premendo un tasto all'accensione, diverso per ogni produttore) e cercare una voce legata a sicurezza o TPM da attivare.
</div>

Se il PC risulta davvero non compatibile, non sei obbligato a cambiarlo subito: puoi restare su Windows 10 in sicurezza grazie al [programma ESU gratuito per i privati, esteso fino a ottobre 2027](../windows-10-aggiornamenti-sicurezza-2027-esu/).

## Prima di aggiornare: i controlli utili

Un aggiornamento "sul posto" di solito mantiene file, programmi e impostazioni, ma qualche imprevisto può sempre capitare. Prima di partire:

- fai un **backup** di documenti, foto e cartelle importanti su un disco esterno o su un servizio cloud;
- controlla di avere **almeno 20-30 GB liberi** in più rispetto al minimo richiesto, per lo spazio temporaneo usato durante l'installazione;
- collega il **caricatore** se è un portatile, e verifica di avere una connessione internet stabile;
- annota le password che usi meno spesso e verifica di poter accedere al tuo **account Microsoft**.

## Come aggiornare tramite Windows Update

Questo è il metodo pensato per la maggior parte delle persone: non serve scaricare nulla a parte quello che Windows propone da solo.

1. Apri <span class="percorso">Impostazioni → Windows Update</span>.
2. Clicca su **Verifica disponibilità aggiornamenti**.
3. Se il tuo PC è idoneo, dovrebbe comparire una voce con scritto **Windows 11 è pronto per il tuo dispositivo**, con un pulsante **Scarica e installa**.
4. Clicca, accetta i termini di licenza e lascia che il download proceda. In base alla connessione può volerci da 20 minuti a un paio d'ore.
5. Quando richiesto, riavvia il PC: l'installazione finale avviene durante il riavvio e può durare altri 20-40 minuti, con il PC che si riavvia più volte da solo.

Se la voce di Windows 11 non compare nonostante il PC risulti compatibile, non è un errore: Microsoft distribuisce l'aggiornamento in modo graduale, a scaglioni, e non tutti i PC idonei lo vedono subito in Windows Update.

## Cosa fare se l'offerta non arriva

Se non vuoi aspettare il tuo turno, esistono due alternative ufficiali, sempre gratuite:

- lo strumento **Assistente di installazione di Windows 11**, scaricabile dalla pagina ufficiale Microsoft, che avvia l'aggiornamento "sul posto" senza aspettare la distribuzione automatica;
- la **chiavetta USB di installazione**, utile soprattutto se vuoi fare un'installazione pulita invece che un aggiornamento: trovi tutti i passaggi nella [guida per creare la chiavetta d'installazione di Windows 11](../creare-chiavetta-installazione-windows-11/). Attenzione: quella strada cancella tutto, quindi va bene solo se stai già pianificando un backup completo.

## Dopo l'aggiornamento

A installazione completata, Windows ti chiederà di rivedere alcune impostazioni su privacy e account: vale la pena leggerle con calma invece di cliccare "Avanti" di fretta. Poi:

1. Apri di nuovo **Windows Update** e installa eventuali aggiornamenti rimasti, riavviando finché non ne restano.
2. Controlla **Gestione dispositivi**: se vedi un punto esclamativo giallo su qualche periferica, scarica il driver aggiornato dal sito del produttore del PC o della scheda video.
3. Verifica che i tuoi programmi principali (posta, browser, antivirus) funzionino come prima.

> Il passaggio "sul posto" tiene tutto quello che avevi, ma proprio per questo può portarsi dietro anche vecchie lentezze. Se dopo l'aggiornamento il PC parte più lento del solito, qui trovi [come velocizzare l'avvio su Windows 11](../pc-lento-avvio-windows-11/).

Hai circa 10 giorni di tempo dopo l'aggiornamento per tornare a Windows 10, se qualcosa non ti convince: la funzione si trova in <span class="percorso">Impostazioni → Sistema → Ripristino</span>, alla voce "Indietro". Passato questo periodo Windows elimina automaticamente i file della versione precedente per liberare spazio, e il ritorno ufficiale non è più disponibile.

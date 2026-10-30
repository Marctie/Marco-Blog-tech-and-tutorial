---
title: "Windows 11 affina l'ibernazione adattiva: la batteria del portatile dura di più in standby"
description: "Un aggiornamento opzionale perfeziona la funzione che decide da sola quando ibernare il PC per risparmiare batteria. Cos'è, come funziona e chi la riceve per primo."
date: 2026-10-30
tipo: notizia
categoria: pc
tags: [Windows 11, Microsoft, batteria, aggiornamenti]
copertina: "Ibernazione"
fonti:
  - titolo: "TecnoAndroid - Windows 11, ibernazione adattiva più efficiente con KB127936"
    url: "https://www.tecnoandroid.it/news/windows-11-ibernazione-adattiva-piu-efficiente-con-kb127936-2005244/"
  - titolo: "Windows Latest - Windows 11 users were right about Modern Standby, and Microsoft is fixing it with hibernation"
    url: "https://www.windowslatest.com/2026/08/08/windows-11-users-were-right-about-modern-standby-and-microsoft-is-fixing-it-with-hibernation/"
  - titolo: "IlSoftware.it - Windows 11 corregge Modern Standby: parziale ritorno all'ibernazione"
    url: "https://www.ilsoftware.it/windows-11-corregge-modern-standby-ibernazione-torna-attuale/"
video:
  - titolo: "Cerca 'Windows 11 ibernazione batteria' su YouTube"
    url: "https://www.youtube.com/results?search_query=windows+11+ibernazione+batteria"
---

Hai mai chiuso il portatile con la batteria quasi piena e ritrovarlo scarico il giorno dopo? È uno dei difetti più noti di Windows 11 quando il PC resta in "standby moderno" invece di spegnersi davvero. Microsoft sta continuando a correggerlo, e nelle ultime ore ha distribuito un aggiornamento opzionale che rende la correzione più efficace.

## Cos'è l'ibernazione adattiva

Dallo scorso agosto Windows 11 può passare da solo tra due stati diversi quando chiudi il coperchio o lasci inattivo il PC:

- **Standby moderno (S0)**: il PC resta "sveglio" a basso consumo, pronto a riprendere il lavoro in un istante e a ricevere notifiche. È comodo, ma su alcuni portatili può far calare la batteria anche di oltre il 15% durante la notte.
- **Ibernazione (S4)**: Windows salva tutto su disco e si spegne quasi completamente. Consuma pochissimo, ma la ripresa è più lenta, quasi come un'accensione da zero.

La novità, descritta per la prima volta da Microsoft nelle note della build Insider 28120.2630, è che il sistema scelga da solo quale dei due usare in base alla carica rimasta: sopra l'80% privilegia lo standby moderno, per riprendere il lavoro all'istante; sotto il 10% passa all'ibernazione prima, per non rischiare di ritrovare il PC spento del tutto, secondo quanto riportato da Windows Latest.

> Non è un ritorno al vecchio standby S3 dei PC di qualche anno fa: Windows continua a usare lo standby moderno come stato predefinito, cambia solo quando e con che frequenza passa all'ibernazione.

## La novità di questi giorni: l'aggiornamento KB127936

Secondo TecnoAndroid, Microsoft ha ora distribuito l'aggiornamento opzionale **KB127936**, che perfeziona proprio questo meccanismo sui PC con standby moderno: l'obiettivo è ridurre ulteriormente il consumo durante la sospensione e velocizzare la ripresa quando la batteria ha ancora carica sufficiente. Per ora la distribuzione è partita nel canale **Release Preview** del programma Windows Insider, quindi non è ancora visibile a tutti; la stessa fonte si aspetta che l'aggiornamento arrivi a tutti gli utenti di Windows 11 con il prossimo Patch Tuesday, ma si tratta di una previsione, non di una data confermata da Microsoft.

## Come vedere se il tuo PC usa già questa funzione

Non serve installare nulla per controllare lo stato attuale: apri il **Prompt dei comandi** o **Terminale** e digita:

- `powercfg /a`: se tra gli stati disponibili vedi "S0 Low Power Idle", il tuo PC usa lo standby moderno.
- `powercfg /sleepstudy /duration 28`: genera un report delle ultime settimane su quanto tempo il PC ha passato in standby e quanta batteria ha consumato, utile per capire se il problema ti riguarda davvero.

Se il tuo portatile si scarica troppo durante la notte già oggi, l'aggiornamento KB127936 potrebbe non essere ancora arrivato sul tuo PC: in <span class="percorso">Impostazioni → Windows Update → Opzioni avanzate → Ricevi altri aggiornamenti non appena disponibili</span> puoi attivare la ricezione più rapida degli aggiornamenti opzionali, ma la build potrebbe comunque non essere ancora disponibile per il tuo dispositivo.

Chi ha un PC fisso o un portatile sempre collegato alla corrente non noterà grandi differenze: la funzione entra in gioco solo quando il dispositivo funziona a batteria. Se invece stai valutando un portatile nuovo e la durata della batteria è la tua priorità, trovi i consigli pratici nella nostra [guida alla scelta di un PC portatile](../come-scegliere-un-pc-portatile-nel-2026-quanta-ram-ssd-e-processore-servono-davv/).

Per restare aggiornato sulle altre novità di Windows 11 di questo mese, puoi leggere anche l'articolo sull'[aggiornamento di ottobre con le correzioni a Bluetooth e giochi](../windows-11-l-aggiornamento-di-ottobre-e-arrivato-bluetooth-piu-stabile-niente-pi/) e la guida su [come scaricare l'ultima versione 26H2](../windows-11-26h2-e-arrivato-le-novita-e-come-scaricarlo-subito/).

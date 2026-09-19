---
title: "Chiavetta USB o disco esterno non riconosciuto da Windows: come risolvere"
description: "Inserisci la chiavetta e non compare niente, oppure Windows dice che va formattata? Prima di perdere i file, prova questi passaggi."
date: 2026-08-14
tipo: problema
categoria: pc
tags: [USB, Hard disk, Windows 11, Recupero dati]
copertina: "USB"
dispositivo: windows
difficolta: media
tempo: "15 minuti"
video:
  - titolo: "Cerca 'chiavetta usb non riconosciuta windows' su YouTube"
    url: "https://www.youtube.com/results?search_query=chiavetta+usb+non+riconosciuta+windows+11"
---

Inserisci la chiavetta con le foto delle vacanze o il disco esterno con il backup, e il PC fa finta di niente. Oppure compare il messaggio che fa gelare il sangue: **"È necessario formattare il disco prima di poterlo usare"**.

Prima regola: **non formattare**. Se lo fai perdi tutto. Proviamo a capire cosa succede.

## 1. Prova un'altra porta e un altro PC

- Cambia **porta USB**, preferibilmente una sul retro del PC (collegata direttamente alla scheda madre).
- Evita **hub e prolunghe**.
- Prova su un **altro computer**. Se non va nemmeno lì, il problema è la chiavetta.
- Per i dischi esterni grandi, prova un altro **cavo**: sono spesso loro il punto debole.

## 2. Guarda in Gestione disco

A volte la chiavetta c'è, ma Windows non le assegna una lettera (D:, E:...).

1. Clic destro sul tasto Start › **Gestione disco**.
2. Cerca la chiavetta nell'elenco in basso (riconoscibile dalla dimensione).
3. Se la vedi **senza lettera**: clic destro sulla partizione › **Cambia lettera e percorso di unità** › **Aggiungi**, scegli una lettera.

Se la vedi come **"Non allocato"** o **"RAW"**, i dati potrebbero essere ancora lì ma il file system è danneggiato. Non formattare, passa al punto 5.

## 3. Driver USB

1. Clic destro su Start › **Gestione dispositivi**.
2. Espandi **Unità disco** e **Controller USB (Universal Serial Bus)**.
3. Se vedi la chiavetta con un **punto esclamativo giallo**, clic destro › **Disinstalla dispositivo**, poi scollegala e ricollegala.

Controlla anche che non sia attiva la **sospensione selettiva USB** nelle opzioni risparmio energia, che a volte "spegne" le porte.

## 4. Controlla e ripara il file system

Se la chiavetta ha una lettera ma dà errori quando la apri:

1. Apri **Esplora file**, clic destro sulla chiavetta › **Proprietà**.
2. Scheda **Strumenti** › **Controlla**.

Oppure dal **Terminale come amministratore** (sostituisci E: con la lettera della chiavetta):

```
chkdsk E: /f
```

## 5. Recupero dei dati

Se la chiavetta risulta RAW, chiede di essere formattata o i file sono spariti, prova un programma di recupero dati **prima di qualsiasi altra operazione**. Esistono strumenti gratuiti affidabili, come **PhotoRec** o **Windows File Recovery** di Microsoft (dal Microsoft Store). Recupera i file **su un altro disco**, mai sulla stessa chiavetta.

## 6. Quando è da buttare

Se la chiavetta:

- non viene vista da **nessun computer**;
- si scalda molto appena la inserisci;
- in Gestione disco risulta da 0 MB o con dimensioni assurde;

è probabilmente guasta. Per i dati molto importanti esistono laboratori di recupero professionale, ma costano parecchio.

> La lezione che impariamo tutti prima o poi: una chiavetta non è un backup. I file importanti devono stare **almeno in due posti diversi**, per esempio su un disco e su un servizio cloud.

Se devi preparare una chiavetta per reinstallare Windows, ecco la guida per [creare la chiavetta di Windows 11](../creare-chiavetta-installazione-windows-11/).

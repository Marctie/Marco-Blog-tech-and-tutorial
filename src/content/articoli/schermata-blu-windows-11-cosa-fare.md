---
title: "Schermata blu (o nera) su Windows 11: cosa significa e come risolvere"
description: "Il PC si riavvia all'improvviso mostrando un errore? Ecco come leggere il codice, trovare la causa e sistemare il problema, passo dopo passo."
date: 2026-08-22
tipo: problema
categoria: pc
tags: [Windows 11, BSOD, Errori, Driver]
copertina: "BSOD"
dispositivo: windows
difficolta: media
tempo: "30 minuti"
fonti:
  - titolo: "Supporto Microsoft - Risolvere gli errori della schermata blu"
    url: "https://support.microsoft.com/it-it/windows/risoluzione-degli-errori-di-schermata-blu-5c62726c-6489-52da-a372-3f73142c14ad"
video:
  - titolo: "Cerca 'schermata blu windows 11 soluzione' su YouTube"
    url: "https://www.youtube.com/results?search_query=schermata+blu+windows+11+soluzione"
---

La famigerata **schermata blu**, quella con la faccina triste e la scritta "Il PC ha riscontrato un problema e deve essere riavviato". Negli ultimi aggiornamenti di Windows 11 Microsoft l'ha resa più sobria e in alcuni casi è diventata **nera**, ma il significato è lo stesso: qualcosa ha mandato in crisi il sistema.

Non farti prendere dal panico. Una singola schermata blu può capitare. Se succede spesso, invece, bisogna indagare.

## Prima cosa: annota il codice

Nella schermata c'è sempre un **codice di arresto** (Stop code), per esempio:

- `IRQL_NOT_LESS_OR_EQUAL`
- `PAGE_FAULT_IN_NONPAGED_AREA`
- `MEMORY_MANAGEMENT`
- `CRITICAL_PROCESS_DIED`
- `SYSTEM_SERVICE_EXCEPTION`
- `DPC_WATCHDOG_VIOLATION`

A volte è indicato anche il **file** che ha causato il problema, tipo `nvlddmkm.sys` (driver NVIDIA) o `atikmdag.sys` (driver AMD). Fai una foto col telefono: è l'indizio più importante.

## Le cause più comuni

- **Driver** difettosi o aggiornati male (scheda video, Wi-Fi, audio).
- **Aggiornamenti di Windows** installati male.
- **RAM** difettosa o mal inserita.
- **Disco** con problemi.
- **Surriscaldamento**.
- **Overclock** troppo spinto.
- Programmi che lavorano a basso livello: alcuni antivirus e software anti-cheat dei giochi.

## Soluzioni, dalla più semplice

### 1. Cosa hai cambiato di recente?

La schermata blu è iniziata dopo aver installato un programma, un driver o una periferica? Parti da lì: disinstalla o scollega e prova.

### 2. Aggiorna (o torna indietro con) i driver

- Scarica i driver della **scheda video** dal sito NVIDIA, AMD o Intel.
- Se il problema è iniziato **dopo** un aggiornamento dei driver, torna alla versione precedente: <span class="percorso">Gestione dispositivi › [dispositivo] › Proprietà › Driver › Ripristina driver</span>.

### 3. Controlla Windows Update

Installa tutti gli aggiornamenti. Se invece il problema è iniziato proprio dopo un aggiornamento, puoi disinstallarlo da <span class="percorso">Impostazioni › Windows Update › Cronologia aggiornamenti › Disinstalla aggiornamenti</span>.

### 4. Ripara i file di sistema

Apri il **Terminale come amministratore** (clic destro sul tasto Start) e lancia questi due comandi, uno dopo l'altro:

```
DISM /Online /Cleanup-Image /RestoreHealth
sfc /scannow
```

Il primo ripara l'immagine di Windows, il secondo controlla i file di sistema. Ci vuole qualche minuto.

### 5. Controlla la RAM

Cerca **Diagnostica memoria Windows** nel menu Start e scegli di riavviare e controllare. Se trova errori, la RAM è il problema: prova a togliere un banco alla volta per capire quale.

### 6. Controlla il disco

Nel terminale come amministratore:

```
chkdsk C: /f /r
```

Ti chiederà di programmare il controllo al prossimo riavvio. Rispondi **S** e riavvia.

### 7. Temperature

Se le schermate blu arrivano quando giochi o fai lavori pesanti, controlla le temperature con un programma come HWMonitor. Pulisci le ventole dalla polvere, soprattutto sui portatili.

## Se Windows non parte più

Se il PC va in schermata blu già all'avvio, dopo due o tre tentativi falliti Windows dovrebbe aprire l'**Ambiente di ripristino**. Da lì puoi:

- avviare in **Modalità provvisoria** (Risoluzione dei problemi › Opzioni avanzate › Impostazioni di avvio) e disinstallare il driver colpevole;
- usare **Ripristino configurazione di sistema** per tornare a un punto precedente;
- **disinstallare l'ultimo aggiornamento**.

> Se le schermate blu continuano anche dopo una reinstallazione pulita di Windows, il problema è quasi sicuramente **hardware** (RAM, disco, alimentatore). A quel punto conviene un tecnico.

Se il PC non va in blocco ma è solo lento, prova le soluzioni in [PC lento all'avvio](../pc-lento-avvio-windows-11/).

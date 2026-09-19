---
title: "Come creare una chiavetta USB per installare Windows 11 (e reinstallarlo da zero)"
description: "Il modo ufficiale e gratuito per preparare una chiavetta d'installazione di Windows 11 e fare un'installazione pulita, passo passo."
date: 2026-08-27
tipo: tutorial
categoria: pc
tags: [Windows 11, Installazione, USB]
copertina: "Windows 11 USB"
dispositivo: windows
difficolta: media
tempo: "1 ora"
fonti:
  - titolo: "Microsoft - Scarica Windows 11"
    url: "https://www.microsoft.com/it-it/software-download/windows11"
video:
  - titolo: "Cerca 'installazione pulita Windows 11 chiavetta' su YouTube"
    url: "https://www.youtube.com/results?search_query=installazione+pulita+windows+11+chiavetta+usb"
  - titolo: "Guide Windows su TuttoTech"
    url: "https://www.youtube.com/@Tuttotech"
    canale: "TuttoTech"
---

Il PC è diventato lentissimo, pieno di programmi che non ricordi di aver installato, e nessuna pulizia sembra funzionare? A volte la soluzione migliore è la più drastica: **reinstallare Windows da zero**. Si chiama "installazione pulita" e, fatta bene, ridà vita a un computer.

Serve una chiavetta USB preparata con lo strumento ufficiale di Microsoft. Vediamo come.

## Cosa ti serve

- Una **chiavetta USB da almeno 8 GB** (verrà cancellata completamente).
- Un PC con Windows funzionante per creare la chiavetta (può essere anche un altro computer).
- La connessione a internet.
- Un **backup dei tuoi file**. Non stiamo scherzando: l'installazione pulita cancella tutto.

## Il PC è compatibile con Windows 11?

Windows 11 richiede tra le altre cose un processore abbastanza recente (in genere dal 2018 in poi), **TPM 2.0** e **Secure Boot**. Per controllare, scarica l'app **Controllo integrità PC** dal sito Microsoft.

Se il PC non è compatibile e hai Windows 10, puoi comunque tenerlo al sicuro con gli [aggiornamenti ESU gratuiti fino al 2027](../windows-10-aggiornamenti-sicurezza-2027-esu/).

## Passo 1: crea la chiavetta

1. Vai sulla pagina ufficiale **Scarica Windows 11** di Microsoft (il link è in fondo all'articolo).
2. Nella sezione **Crea supporto di installazione di Windows 11**, clicca **Scarica ora** per ottenere lo strumento *Media Creation Tool*.
3. Inserisci la chiavetta e avvia lo strumento.
4. Accetta le condizioni, lascia **Italiano** e **Windows 11** come lingua ed edizione.
5. Scegli **Unità flash USB** e seleziona la tua chiavetta.
6. Aspetta: lo strumento scarica Windows (qualche GB) e prepara la chiavetta. Ci vuole da 15 a 40 minuti a seconda della connessione.

## Passo 2: prepara il PC

Prima di installare:

- **Backup** di documenti, foto, desktop e download su un disco esterno o sul cloud.
- Segnati le **password** importanti (browser, Wi-Fi) e controlla di poter accedere al tuo **account Microsoft**.
- Se hai programmi a pagamento, recupera i **codici di licenza**.
- Sui portatili, collega il **caricatore**.

## Passo 3: avvia il PC dalla chiavetta

1. Con la chiavetta inserita, riavvia il PC.
2. Appena si accende, premi ripetutamente il tasto del **menu di avvio**. Cambia in base al produttore: di solito **F12**, **F11**, **F8** o **Esc**. Su molti portatili HP è **F9**, su Lenovo spesso **F12**.
3. Nel menu scegli la chiavetta USB.

<div class="box box-tip">
<strong>Scorciatoia da Windows</strong>
Se Windows funziona ancora, vai in Impostazioni › Sistema › Ripristino › Avvio avanzato › Riavvia ora, poi scegli "Usa un dispositivo" e seleziona la chiavetta. Niente tasti da indovinare.
</div>

## Passo 4: installa Windows

1. Scegli lingua e layout della tastiera (Italiano) e clicca **Avanti**.
2. Seleziona **Installa Windows 11** e conferma che i file verranno cancellati.
3. Se ti chiede il **codice Product Key**, clicca **Non ho un codice Product Key**: se il PC aveva già Windows 10 o 11 attivato, la licenza si riattiva da sola una volta online.
4. Scegli l'**edizione** corretta (Home o Pro), la stessa che avevi prima.
5. Nella schermata dei dischi, **elimina le partizioni del disco principale** (di solito "Unità 0") e installa sullo spazio non allocato. Se hai un secondo disco con dati, **non toccarlo**.
6. Aspetta. Il PC si riavvierà più volte da solo.

## Passo 5: configurazione iniziale

Windows ti chiederà regione, tastiera, rete e account Microsoft. Quando arrivi alle opzioni sulla privacy, leggile con calma e disattiva quello che non ti serve (pubblicità personalizzate, diagnostica facoltativa).

Poi:

1. Apri **Windows Update** e installa tutto, riavviando finché non ci sono più aggiornamenti.
2. Controlla in **Gestione dispositivi** che non ci siano periferiche con il punto esclamativo giallo. Se ci sono, scarica i driver dal sito del produttore del PC.
3. Reinstalla solo i programmi che usi davvero.

> Il PC appena reinstallato è velocissimo. Per tenerlo così, installa poca roba e diffida dei programmi "pulisci PC" che promettono miracoli. Qui trovi [come tenerlo veloce all'avvio](../pc-lento-avvio-windows-11/).

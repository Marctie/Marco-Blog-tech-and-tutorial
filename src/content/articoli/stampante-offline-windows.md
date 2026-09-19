---
title: "Stampante offline su Windows: come rimetterla in linea"
description: "La stampante è accesa e collegata, ma Windows continua a dire 'Offline'. Ecco la procedura per sbloccarla, sia in Wi-Fi sia con il cavo USB."
date: 2026-08-13
tipo: problema
categoria: pc
tags: [Stampante, Windows 11, Wi-Fi]
copertina: "Stampante"
dispositivo: windows
difficolta: facile
tempo: "15 minuti"
video:
  - titolo: "Cerca 'stampante offline windows 11' su YouTube"
    url: "https://www.youtube.com/results?search_query=stampante+offline+windows+11+soluzione"
---

Devi stampare un documento urgente, premi Stampa e non succede niente. Vai a controllare e Windows dice: **"Stampante offline"**. Eppure è lì, accesa, con le luci verdi. La stampante offline è probabilmente il problema da ufficio più classico di sempre.

## 1. I controlli di base

- **Spegni e riaccendi** la stampante. Aspetta che finisca la sua routine di avvio.
- Se è **Wi-Fi**, controlla sul suo display (se ce l'ha) che sia connessa alla **stessa rete** del PC. Dopo un cambio di router o di password del Wi-Fi, la stampante resta collegata alla vecchia rete.
- Se è **USB**, prova un'altra porta e un altro cavo.
- **Riavvia il PC.**

## 2. Togli la spunta "Usa stampante offline"

A volte Windows mette la stampante in modalità offline per conto suo.

1. Vai in <span class="percorso">Impostazioni › Bluetooth e dispositivi › Stampanti e scanner</span>.
2. Clicca sulla stampante › **Apri coda di stampa**.
3. Nel menu **Stampante**, se è spuntata **Usa stampante offline**, togli la spunta.

Già che ci sei, nel menu **Stampante** scegli **Annulla tutti i documenti**: un documento bloccato in coda può bloccare anche tutti gli altri.

## 3. Riavvia lo spooler di stampa

Lo **spooler** è il servizio di Windows che gestisce le stampe. Quando si incastra, niente esce dalla stampante.

1. Premi <kbd>Win</kbd> + <kbd>R</kbd>, scrivi `services.msc` e premi Invio.
2. Cerca **Spooler di stampa**, clic destro › **Riavvia**.

Se la coda resta bloccata: arresta lo spooler, vai nella cartella `C:\Windows\System32\spool\PRINTERS`, cancella il contenuto (non la cartella) e riavvia lo spooler.

## 4. Stampanti Wi-Fi: l'indirizzo IP è cambiato

Le stampanti di rete ricevono un **indirizzo IP** dal router. Se il router si riavvia, può dargliene uno diverso e Windows continua a cercarla al vecchio indirizzo.

**Soluzione rapida**: rimuovi la stampante da Windows (<span class="percorso">Stampanti e scanner › [stampante] › Rimuovi</span>) e aggiungila di nuovo con **Aggiungi dispositivo**.

**Soluzione definitiva**: nel pannello del router assegna alla stampante un **IP fisso** (cerca "DHCP statico" o "prenotazione indirizzo"). Così non cambierà più.

## 5. Driver e app del produttore

- Scarica il **driver più recente** dal sito del produttore (HP, Epson, Canon, Brother). Evita i driver generici.
- Molti produttori hanno un'app di diagnostica (per esempio HP Smart o Epson Connect) che trova e sistema da sola i problemi di connessione.

## 6. Lo strumento di Windows

Vai in <span class="percorso">Impostazioni › Sistema › Risoluzione dei problemi › Altri strumenti di risoluzione dei problemi</span> e avvia quello della **Stampante**. Non sempre funziona, ma provare costa un minuto.

> Se la stampante è anche lenta a rispondere in Wi-Fi, avvicinala al router. Le stampanti hanno antenne Wi-Fi piuttosto scarse e soffrono molto le distanze.

Se il problema è l'intera rete e non solo la stampante, leggi [Wi-Fi connesso ma internet non funziona](../wifi-connesso-ma-internet-non-funziona/).

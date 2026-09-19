---
title: "Il gioco su Steam non si avvia o crasha: le soluzioni da provare"
description: "Clicchi Gioca, compare 'In esecuzione' per un secondo e poi niente? Ecco cosa fare, dalla verifica dei file ai driver, su PC e Steam Deck."
date: 2026-08-16
tipo: problema
categoria: gaming
tags: [Steam, PC gaming, Steam Deck, Crash]
copertina: "Steam"
dispositivo: windows
difficolta: facile
tempo: "15-30 minuti"
fonti:
  - titolo: "Assistenza Steam"
    url: "https://help.steampowered.com/it/"
video:
  - titolo: "Cerca 'gioco steam non si avvia' su YouTube"
    url: "https://www.youtube.com/results?search_query=gioco+steam+non+si+avvia+soluzione"
  - titolo: "PC gaming su Multiplayer.it"
    url: "https://www.youtube.com/@multiplayer"
    canale: "Multiplayer.it"
---

Hai aspettato il download per un'ora, premi **Gioca**, il pulsante diventa verde per un secondo con scritto "In esecuzione", poi torna tutto come prima. Il gioco non parte. Oppure parte e crasha al menu. Ecco le soluzioni in ordine, dalla più veloce.

## 1. Riavvia Steam (e il PC)

Chiudi Steam completamente: clic destro sull'icona vicino all'orologio › **Esci**. Riaprilo. Se non basta, riavvia il PC. Sembra banale ma risolve un sacco di casi, soprattutto dopo un aggiornamento di Steam.

## 2. Verifica l'integrità dei file

È la soluzione principe. Controlla che tutti i file del gioco siano integri e riscarica quelli rovinati.

1. Nella **Libreria**, clic destro sul gioco › **Proprietà**.
2. Vai in **File installati**.
3. Clicca **Verifica integrità dei file di gioco**.

Può richiedere qualche minuto. Alla fine prova ad avviare di nuovo.

## 3. Aggiorna i driver della scheda video

Molti giochi nuovi richiedono driver recenti e alcuni non partono proprio con driver vecchi.

- **NVIDIA**: app NVIDIA o sito ufficiale.
- **AMD**: AMD Software: Adrenalin Edition.
- **Intel Arc**: Intel Driver & Support Assistant.

Fai un'installazione pulita se il programma lo permette.

## 4. Controlla i requisiti

Sulla pagina del gioco su Steam trovi i **requisiti minimi**. Alcuni giochi recenti richiedono per esempio schede video con supporto a funzioni specifiche (ray tracing, DirectX 12 Ultimate) e semplicemente non partono su hardware più vecchio.

## 5. Installa i componenti mancanti

Molti giochi hanno bisogno di **Visual C++ Redistributable** e **DirectX**. Di solito Steam li installa al primo avvio, ma a volte qualcosa va storto. Scarica i pacchetti Visual C++ più recenti (x86 e x64) dal sito Microsoft e installali.

## 6. Antivirus e overlay

- Alcuni **antivirus** bloccano i file dei giochi, soprattutto quelli con sistemi anti-cheat. Prova ad aggiungere la cartella di Steam alle eccezioni.
- Gli **overlay** (Discord, GeForce Experience, MSI Afterburner, Steam stesso) possono creare conflitti. Disattivali uno alla volta.

## 7. Opzioni di avvio

Nelle **Proprietà** del gioco, sotto **Generali**, trovi il campo **Opzioni di avvio**. Alcuni comandi utili (dipende dal gioco):

- `-windowed` per avviare in finestra, se il problema è la risoluzione;
- `-dx11` per forzare DirectX 11 su giochi che danno problemi con DirectX 12.

Cerca sui forum del gioco quali opzioni sono supportate.

## 8. Reinstalla

Se niente funziona, disinstalla il gioco, **cancella la sua cartella** rimasta in `Steam\steamapps\common` e reinstallalo. Prima controlla se i salvataggi sono nel cloud di Steam (icona della nuvola nella pagina del gioco).

## Su Steam Deck e Steam Machine

Su SteamOS i giochi Windows girano tramite **Proton**. Se un gioco non parte:

1. **Proprietà › Compatibilità**, spunta **Forza l'uso di uno strumento di compatibilità specifico** e prova una versione di Proton diversa (anche la "Experimental").
2. Controlla la valutazione del gioco: verificato, giocabile o non supportato.
3. I giochi con alcuni sistemi anti-cheat possono non funzionare affatto su Linux. Non è un tuo problema: dipende dal gioco.

> Se stai pensando di prendere una Steam Machine per giocare in salotto, leggi prima il nostro [parere a due mesi dal lancio](../steam-machine-prezzo-italia-vale-la-pena/).

Se il problema è che il PC va in schermata blu mentre giochi, passa alla guida sulla [schermata blu di Windows 11](../schermata-blu-windows-11-cosa-fare/).

---
title: "PS5: l'aggiornamento di sistema si blocca o non si installa, come risolvere"
description: "Download che non parte, barra di avanzamento ferma o errore a metà installazione: ecco cosa provare, in ordine, prima di pensare a un guasto."
date: 2026-10-17
tipo: problema
categoria: console
tags: [PS5, Aggiornamento, Console, Assistenza]
copertina: "PS5"
dispositivo: console
difficolta: facile
tempo: "15 minuti"
fonti:
  - titolo: "PlayStation - Come aggiornare il software di sistema su una console PS5"
    url: "https://www.playstation.com/it-it/support/hardware/ps5/system-software/"
  - titolo: "PlayStation - Come correggere l'errore WS-116522-7"
    url: "https://www.playstation.com/it-it/support/error-codes/ps5/ws-116522-7/"
  - titolo: "MP1st - PS5 System Update 26.06-14.10.00 Rolled Out on October 1"
    url: "https://mp1st.com/?p=315848"
video:
  - titolo: "Cerca 'PS5 aggiornamento bloccato' su YouTube"
    url: "https://www.youtube.com/results?search_query=ps5+aggiornamento+bloccato+non+si+installa"
  - titolo: "Il canale Multiplayer.it"
    url: "https://www.youtube.com/@multiplayer"
    canale: "Multiplayer.it"
---

Sony distribuisce aggiornamenti di sistema PS5 praticamente ogni mese: l'ultimo, la versione 26.06-14.10.00, è arrivato il 1° ottobre con correzioni di sicurezza e migliorie di stabilità. Sono quasi sempre pacchetti piccoli e senza intoppi, ma ogni tanto capita che il download resti fermo, la barra di avanzamento non si muova o la console mostri un errore a metà installazione. Prima di preoccuparti, prova questi passaggi nell'ordine in cui sono scritti.

## 1. Riprova il download dal centro di controllo

È il primo tentativo da fare, e spesso basta.

1. Premi il tasto **PS** sul controller per aprire il centro di controllo.
2. Vai su <span class="percorso">Download/caricamenti</span>.
3. Seleziona l'aggiornamento bloccato, scegli **Visualizza informazioni sull'errore** e poi **Riprova**.

Se il download riparte e arriva alla fine senza fermarsi di nuovo, il problema era solo un intoppo di rete passeggero.

## 2. Controlla la connessione

Molti blocchi dipendono dalla rete, non dalla console:

- se puoi, passa dal **Wi-Fi al cavo di rete**: scarica l'aggiornamento in modo molto più stabile;
- con il Wi-Fi, avvicina la PS5 al router e togli eventuali ostacoli (muri, mobili, altri dispositivi) in mezzo;
- **riavvia router e modem**: spegnili, aspetta almeno 5 minuti, poi riaccendili;
- da <span class="percorso">Impostazioni → Rete → Impostazioni</span> puoi anche rifare da capo la configurazione della connessione.

Se la tua rete dà problemi più in generale, non solo con gli aggiornamenti, qui trovi [cosa fare quando il Wi-Fi è connesso ma internet non funziona](../wifi-connesso-ma-internet-non-funziona/).

## 3. Spazio libero sufficiente

Un aggiornamento di sistema pesa in genere meno di 2 GB, ma se la memoria interna è quasi piena la console può comunque rifiutarsi di procedere. Controlla lo spazio disponibile da <span class="percorso">Impostazioni → Archiviazione</span> e, se serve, disinstalla qualche gioco che non usi (i salvataggi restano, se sono sincronizzati con il cloud o con PS Plus).

## 4. Aggiorna via USB

Se il download da internet continua a fallire, puoi scaricare il file da un computer e installarlo con una chiavetta.

1. Su PC o Mac, formatta una chiavetta USB in **FAT32** o **exFAT**.
2. Crea una cartella chiamata `PS5` e, al suo interno, una sottocartella chiamata `UPDATE`.
3. Scarica il file di aggiornamento dalla pagina ufficiale PlayStation e salvalo nella cartella `UPDATE` con il nome esatto `PS5UPDATE.PUP` (servono circa 1,1 GB liberi sulla chiavetta).
4. Spegni la console e collega la chiavetta.
5. Accendi la PS5 in **modalità provvisoria**: tieni premuto il tasto di accensione e rilascialo dopo il secondo bip (il primo arriva subito, il secondo dopo circa 7 secondi).
6. Collega il DualSense via cavo USB, premi il tasto PS e scegli **Aggiorna software di sistema → Aggiorna da dispositivo di archiviazione USB**.

> Se la console non trova il file, il motivo quasi sempre è il nome della cartella o del file scritto in modo diverso da quello richiesto: Sony consiglia di usare tutto in maiuscolo.

## 5. Errori di rete tipo WS-116522-7

Se compare un codice che inizia con **WS-**, significa che la console non riesce a completare lo scambio dati con i server Sony. Oltre ai passaggi di rete già visti, provare a riavviare completamente la console (tasto di accensione per circa 10 secondi, poi stacca la corrente per un minuto) risolve buona parte dei casi.

## 6. Dalla modalità provvisoria: ripara e ricostruisci

Se il problema non è la rete né lo spazio, entra di nuovo in modalità provvisoria e prova, in ordine:

1. **Ripara archiviazione console**: controlla e corregge errori nella memoria senza cancellare dati.
2. **Cancella cache del software di sistema**.
3. **Ricostruisci database**: risolve molti blocchi legati ad aggiornamenti e avvii, senza toccare giochi o salvataggi.

Questa è la stessa sequenza che consigliamo anche per [la PS5 che non si accende o resta con la luce blu](../ps5-non-si-accende-luce-blu/): i due problemi spesso hanno le stesse cause.

<div class="box box-warn">
<strong>Da evitare</strong>
Non spegnere mai la console mentre un aggiornamento è in corso: puoi danneggiare il software di sistema e rendere necessaria una reinstallazione completa. Evita anche di aggiornare subito prima o dopo un blackout o un'interruzione di corrente.
</div>

## Quando andare in assistenza

Se dopo tutti questi passaggi l'aggiornamento continua a fallire sempre con lo stesso errore, o se la console si spegne da sola durante l'installazione, il problema potrebbe riguardare l'archiviazione interna o l'alimentatore. In questo caso conviene contattare l'assistenza PlayStation prima di provare un ripristino di fabbrica, che cancella tutti i dati della console.

Hai lo spazio sempre pieno anche senza nuovi aggiornamenti? Può aiutarti [la guida all'installazione di un SSD su PS5](../installare-ssd-ps5-espandere-memoria/) per avere più margine.

> Un aggiornamento che si blocca quasi sempre non è un guasto: nella maggior parte dei casi basta rete, spazio o una ricostruzione del database.

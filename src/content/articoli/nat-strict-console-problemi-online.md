---
title: "NAT rigido o di tipo 3 su PS5, Xbox e Switch: come aprirlo per giocare online"
description: "Non riesci a entrare nelle partite, la chat vocale non funziona o gli amici non ti vedono? Probabilmente è colpa del NAT. Ecco come sistemarlo."
date: 2026-08-20
tipo: problema
categoria: console
tags: [NAT, Router, PS5, Xbox, Switch 2, Online]
copertina: "NAT"
dispositivo: rete
difficolta: avanzata
tempo: "20-30 minuti"
fonti:
  - titolo: "Assistenza PlayStation - Porte da usare per PlayStation Network"
    url: "https://www.playstation.com/it-it/support/connectivity/"
  - titolo: "Supporto Xbox - Risolvere i problemi di NAT"
    url: "https://support.xbox.com/it-IT/help/hardware-network/connect-network/xbox-one-nat-error-solution"
video:
  - titolo: "Cerca 'NAT tipo 3 PS5 soluzione' su YouTube"
    url: "https://www.youtube.com/results?search_query=nat+tipo+3+ps5+soluzione+router"
---

Stai per entrare in una partita con gli amici e compare un messaggio poco rassicurante: "NAT rigido", "NAT di tipo 3" o "Tipo NAT: D". Magari riesci a giocare, ma la chat vocale non va, le partite ci mettono una vita a trovarsi o non riesci a ospitare una lobby. Il colpevole è il **NAT**.

## Cos'è il NAT, in due parole

Il router di casa fa da "centralino" tra internet e i tuoi dispositivi. Il **NAT** è il sistema con cui smista le connessioni. Se è troppo restrittivo, la console non riesce a ricevere connessioni dirette dagli altri giocatori.

Ogni console lo chiama in modo diverso:

| | Ottimo | Accettabile | Problemi |
|---|---|---|---|
| **PS5** | Tipo 1 | Tipo 2 | Tipo 3 |
| **Xbox** | Aperto | Moderato | Rigido / Non disponibile |
| **Switch / Switch 2** | A | B | C, D, F |

Su PS5 il tipo 1 compare solo se la console è collegata direttamente senza router: **il tipo 2 va benissimo**.

## Come controllare il tuo NAT

- **PS5**: <span class="percorso">Impostazioni › Rete › Stato della connessione › Test connessione Internet</span>.
- **Xbox**: <span class="percorso">Impostazioni › Generali › Impostazioni di rete › Tipo NAT › Verifica tipo NAT</span>.
- **Switch**: <span class="percorso">Impostazioni di sistema › Internet › Test della connessione</span>.

## Soluzione 1: riavvia tutto

Spegni console e router, aspetta un minuto, accendi prima il router e poi la console. Ripeti il test. A volte basta.

## Soluzione 2: attiva l'UPnP sul router

L'**UPnP** permette alla console di aprire da sola le porte che le servono. È la soluzione più semplice e risolve la maggior parte dei casi.

1. Entra nel pannello del router dal browser. L'indirizzo è di solito `192.168.1.1` o `192.168.0.1`, ed è scritto sull'etichetta sotto il router insieme alla password.
2. Cerca la voce **UPnP** (spesso in "Rete", "Avanzate" o "NAT").
3. **Attivala**, salva e riavvia la console.

## Soluzione 3: IP fisso e apertura delle porte

Se l'UPnP non basta:

1. Nel router assegna alla console un **indirizzo IP fisso** (cerca "DHCP statico" o "prenotazione indirizzo").
2. Nella sezione **Port forwarding** (inoltro porte o "virtual server"), apri le porte verso quell'IP.

Porte principali per **PlayStation Network**: TCP 80, 443, 3478, 3479, 3480 e UDP 3478, 3479, 49152-65535.

Porte principali per **Xbox**: UDP 88, UDP 500, UDP 3074, UDP 3544, UDP 4500, TCP/UDP 53, TCP 80, TCP 3074.

## Soluzione 4: occhio al doppio NAT

Se hai **due router in cascata** (per esempio il modem dell'operatore più un tuo router gaming), il NAT viene applicato due volte e i problemi sono garantiti. Le soluzioni:

- mettere il modem dell'operatore in modalità **bridge**;
- oppure mettere il secondo router nella **DMZ** del primo.

## Soluzione 5: il CG-NAT dell'operatore

Alcuni operatori, soprattutto con le connessioni **FWA** (internet via antenna) o con alcune offerte economiche in fibra, condividono lo stesso indirizzo IP pubblico tra più clienti. Si chiama **CG-NAT** e con questo non c'è impostazione del router che tenga.

Come capirlo: se l'indirizzo "WAN" che vedi nel router inizia con `100.64` fino a `100.127`, oppure è diverso da quello che ti mostra un sito come "qual è il mio IP", sei dietro CG-NAT.

**Cosa fare**: chiama l'operatore e chiedi un **IP pubblico** (a volte è gratis, a volte c'è un piccolo costo mensile).

> La DMZ verso la console risolve quasi sempre, ma espone la console direttamente a internet. È abbastanza sicuro per una console, **mai** farlo verso un PC.

## E il lag?

Il NAT aperto non riduce il ping. Per giocare con meno lag: **cavo di rete** al posto del Wi-Fi, niente download in corso sugli altri dispositivi e router vicino alla console. Se il problema è proprio la connessione che non va, leggi [Wi-Fi connesso ma internet non funziona](../wifi-connesso-ma-internet-non-funziona/).

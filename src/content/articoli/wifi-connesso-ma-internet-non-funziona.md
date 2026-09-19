---
title: "Wi-Fi connesso ma internet non funziona: come risolvere su PC e telefono"
description: "Il simbolo del Wi-Fi è pieno ma le pagine non si aprono? Ecco come capire se il problema è il router, la linea o il dispositivo, e come sistemarlo."
date: 2026-09-07
tipo: problema
categoria: app
tags: [Wi-Fi, Router, Internet, Windows]
copertina: "Wi-Fi"
dispositivo: rete
difficolta: facile
tempo: "15 minuti"
fonti:
  - titolo: "Supporto Microsoft - Risolvere i problemi di connessione Wi-Fi in Windows"
    url: "https://support.microsoft.com/it-it/windows"
video:
  - titolo: "Cerca 'wifi connesso ma senza internet' su YouTube"
    url: "https://www.youtube.com/results?search_query=wifi+connesso+ma+senza+internet+soluzione"
  - titolo: "Rete di casa e smart home su DDay.it"
    url: "https://www.youtube.com/@DDAYit"
    canale: "DDay.it"
---

Il classico: il telefono dice che sei connesso al Wi-Fi, il simbolo è pieno, ma WhatsApp non manda messaggi e le pagine restano bianche. Su Windows magari compare anche la scritta "Nessuna connessione Internet" o il globo con il divieto.

Il trucco per risolverlo in fretta è capire **dove sta il problema**. Andiamo con ordine.

## Passo 1: il problema è di tutti o solo tuo?

Prendi un **altro dispositivo** collegato allo stesso Wi-Fi (un telefono di un familiare, la smart TV).

- **Non funziona nemmeno lui?** Il problema è il **router o la linea**. Vai al passo 2.
- **Lui funziona?** Il problema è il **tuo dispositivo**. Vai al passo 4.

## Passo 2: riavvia il router (nel modo giusto)

1. **Spegni** il router dall'interruttore o staccando l'alimentatore.
2. Aspetta **almeno 30 secondi**. Non tre, trenta.
3. Riaccendilo e aspetta **2-3 minuti** che le luci si stabilizzino.

Guarda le spie: se la spia di **Internet, DSL o Fibra** è spenta, rossa o lampeggia in modo strano, il problema è la linea.

## Passo 3: è un guasto della linea?

- Controlla che il **cavo** tra la presa del muro e il router sia ben inserito.
- Se hai la fibra con un **ONT** separato (una scatoletta bianca vicino alla presa), controlla che anche lui sia acceso e che la spia **LOS** non sia rossa: se lo è, c'è un problema sulla fibra.
- Controlla nell'**app del tuo operatore** o sul suo sito se ci sono **guasti segnalati** nella tua zona.
- Se tutto sembra a posto ma non va, chiama l'assistenza del tuo operatore: dal router possono fare verifiche a distanza.

## Passo 4: il problema è solo il tuo dispositivo

### Su telefono (Android e iPhone)

1. Attiva e disattiva la **modalità aereo**.
2. **Dimentica la rete** Wi-Fi e ricollegati inserendo di nuovo la password.
3. Se usi una **VPN** o un'app "blocca pubblicità", disattivala e riprova.
4. Controlla che data e ora siano automatiche: una data sbagliata fa fallire molte connessioni sicure.
5. Ultima risorsa: **ripristina le impostazioni di rete** (non cancella i dati ma dimentica tutte le reti salvate).

### Su PC Windows

1. Disattiva e riattiva il Wi-Fi, poi riavvia il PC.
2. Vai in <span class="percorso">Impostazioni › Rete e Internet › Impostazioni di rete avanzate › Reimpostazione rete</span>. Riavvia il PC quando richiesto.
3. Se non basta, apri il **Prompt dei comandi come amministratore** e scrivi questi comandi, uno alla volta, premendo Invio:

```
ipconfig /release
ipconfig /renew
ipconfig /flushdns
netsh winsock reset
```

Poi riavvia.

4. Prova a cambiare i **DNS**: in <span class="percorso">Impostazioni › Rete e Internet › Wi-Fi › [la tua rete] › Assegnazione server DNS</span> imposta manualmente `1.1.1.1` e `8.8.8.8`. A volte il DNS dell'operatore fa i capricci.

## Il Wi-Fi funziona, ma è lentissimo?

Quello è un altro problema, spesso legato alla posizione del router o a interferenze:

- metti il router **in alto e al centro** della casa, non chiuso in un mobile;
- usa la rete a **5 GHz** quando sei vicino al router, la **2,4 GHz** se sei lontano;
- per le case grandi valuta un sistema **mesh** o un ripetitore di qualità.

> Se giochi online e il problema è il lag o la "NAT", leggi la guida dedicata alle [console e ai problemi di NAT](../nat-strict-console-problemi-online/).

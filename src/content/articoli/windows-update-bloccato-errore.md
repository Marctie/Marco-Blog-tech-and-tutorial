---
title: "Windows Update bloccato o in errore: come sbloccarlo"
description: "Aggiornamento fermo allo 0%, errori con codici strani o installazioni che falliscono sempre? Ecco la procedura per rimettere in sesto Windows Update."
date: 2026-08-18
tipo: problema
categoria: pc
tags: [Windows 11, Windows Update, Errori]
copertina: "Windows Update"
dispositivo: windows
difficolta: media
tempo: "20-40 minuti"
fonti:
  - titolo: "Supporto Microsoft - Risolvere i problemi di aggiornamento di Windows"
    url: "https://support.microsoft.com/it-it/windows/risolvere-i-problemi-relativi-all-aggiornamento-di-windows-188c2b0f-10a7-d72f-65b8-32d177eb136c"
video:
  - titolo: "Cerca 'windows update bloccato soluzione' su YouTube"
    url: "https://www.youtube.com/results?search_query=windows+update+bloccato+soluzione+windows+11"
---

Windows Update è una di quelle cose che, quando funziona, non ci pensi. Quando si blocca, invece, diventa un incubo: download fermo allo 0%, "Installazione in sospeso" da giorni, oppure errori tipo `0x800f0922`, `0x80070002` o `0x8024a105` che non dicono niente a nessuno.

Ecco la procedura che usiamo noi, dal passaggio più semplice al più tecnico.

## 1. Pazienza (davvero)

Alcuni aggiornamenti, soprattutto quelli grandi di funzionalità, possono restare fermi a una percentuale per **30-60 minuti** e poi ripartire di colpo. Se la spia del disco lampeggia o la ventola gira, il PC sta lavorando. Aspetta almeno un'ora prima di intervenire.

## 2. Riavvia e controlla lo spazio

- **Riavvia** il PC (Riavvia, non Arresta).
- Gli aggiornamenti hanno bisogno di **almeno 20 GB liberi** per stare tranquilli. Controlla in <span class="percorso">Impostazioni › Sistema › Archiviazione</span>.
- Scollega **periferiche USB** non necessarie (dischi esterni, chiavette, hub): a volte confondono l'installazione.

## 3. Usa lo strumento di risoluzione dei problemi

Vai in <span class="percorso">Impostazioni › Sistema › Risoluzione dei problemi › Altri strumenti di risoluzione dei problemi</span> e avvia quello di **Windows Update**. Non è infallibile, ma sistema i casi più semplici in automatico.

## 4. Ripara i file di sistema

Apri il **Terminale (amministratore)** con clic destro sul tasto Start e scrivi, uno alla volta:

```
DISM /Online /Cleanup-Image /RestoreHealth
sfc /scannow
```

Riavvia e riprova l'aggiornamento.

## 5. Svuota la cache di Windows Update

Questo è il passaggio che risolve la maggior parte dei casi "strani". I file scaricati male vengono cancellati e Windows li riscarica da zero.

Nel Terminale come amministratore, esegui questi comandi uno alla volta:

```
net stop wuauserv
net stop bits
net stop cryptsvc
ren C:\Windows\SoftwareDistribution SoftwareDistribution.old
ren C:\Windows\System32\catroot2 catroot2.old
net start cryptsvc
net start bits
net start wuauserv
```

Riavvia il PC e vai di nuovo in Windows Update.

<div class="box box-tip">
<strong>Non preoccuparti</strong>
Rinominare quelle cartelle è sicuro: Windows le ricrea da solo. Perderai solo la cronologia degli aggiornamenti mostrata nelle impostazioni, non gli aggiornamenti già installati.
</div>

## 6. Installa l'aggiornamento a mano

Se un aggiornamento specifico continua a fallire, annota il suo codice (inizia con **KB**, tipo KB5012345). Vai sul **Microsoft Update Catalog**, cerca il codice, scarica la versione per il tuo sistema (di solito x64) e installala con un doppio clic.

## 7. Aggiornamento sul posto (la soluzione definitiva)

Se niente funziona, puoi "reinstallare Windows sopra se stesso" **senza perdere file e programmi**:

1. Scarica **Assistente installazione di Windows 11** dalla pagina ufficiale Microsoft.
2. Avvialo e segui le istruzioni.
3. Il PC verrà aggiornato all'ultima versione mantenendo tutto.

È come una revisione completa di Windows e sistema quasi tutti i problemi di aggiornamento.

## Hai ancora Windows 10?

Se sei ancora su Windows 10, ricordati che gli aggiornamenti di sicurezza arrivano solo se sei iscritto al programma ESU, che ora vale fino a ottobre 2027. Trovi tutti i passaggi in [come attivare gli aggiornamenti ESU gratis](../windows-10-aggiornamenti-sicurezza-2027-esu/).

> Un'ultima cosa: fai sempre un **backup** dei file importanti prima di interventi come l'aggiornamento sul posto. Il 99% delle volte va tutto bene, ma quell'1% fa male.

# Origine e indirizzo del progetto Encrypto

Fonte storica: `dashcode/temp_file/2-3 -Trasparenza.pdf`, presentazione «Trasparenza Privacy & Blockchain» e «La Blockchain per le cedole librarie». Analizzata il 2026-10-06. Questo documento ricostruisce il progetto originario; non verifica l'attualità delle affermazioni normative del PDF e non le assume come requisiti giuridici validati.

## Problema originario

Il progetto nasce nell'ambito della trasparenza amministrativa e delle cedole librarie. La presentazione descrive un percorso avviato nel 2017–2018: elenchi di aventi diritto, non aventi diritto e posizioni sospese, pubblicati con codici identificativi, mantenendo separata la corrispondenza con i richiedenti.

L'obiettivo è ridurre la carta, semplificare il lavoro degli operatori e permettere verifiche sull'integrità dei documenti, gestendo separatamente gli accessi e la pubblicazione dei dati.

## Distinzione tra i tre spazi

1. **Sito di presentazione Encrypto:** spiega progetto, destinatari e benefici. È la landing pubblica attuale.
2. **Gestionale riservato:** archivio, caricamento, hash, certificazione, cartelle, utenti, dipartimenti e registro operazioni. È l'area `/app`, attualmente accessibile soltanto come anteprima senza autenticazione.
3. **Pubblicazione e verifica:** il sito dell'ente o un portale esterno ospita i documenti destinati alla pubblicazione. Il servizio di verifica permette di controllarne l'integrità. Non coincide con la landing commerciale e non comporta la pubblicazione automatica dell'intero archivio.

## Requisiti recuperati dalla presentazione

| Requisito storico | Confronto con la roadmap attuale |
|---|---|
| File conservati fuori dalla blockchain; registrazione dell'impronta per la prova | Coerente con Storage e certificazione hash previsti |
| Amministratore e operatore con facoltà diverse | Già previsto; la roadmap amplia i ruoli |
| Gestione utenti e dipartimenti | Già prevista |
| Cartelle e documenti degli operatori | Già previsti; isolamento da definire nello schema dati |
| Visibilità privata, riservata o pubblica; privata per default | Da esplicitare nella roadmap e progettare prima dell'archivio |
| Registro delle operazioni | Audit log già previsto; vista operativa del registro da definire |
| Controllo integrità tra archivio, impronta registrata e copia sul sito esterno | Verifica hash già prevista; monitoraggio delle copie esterne da esplicitare |
| Avviso a video e via email sulle differenze rilevate | Alert email già previsto; stato e messaggio in UI da definire |
| Verifica comprensibile anche a utenti non tecnici | Da mantenere come criterio trasversale per UI e linguaggio |

## Stati documentali

La presentazione usa bianco per certificato su blockchain, giallo per presente sul server e rosso per una differenza rilevata. Recuperare questa convenzione con etichette testuali e icone: il colore da solo non basta. Lo stato di integrità, lo stato di certificazione e la visibilità devono restare concetti separati: un file certificato può avere successivamente una copia alterata, e un file privato può essere certificato senza essere pubblicato.

## Interpretazione tecnica per la nuova versione

La blockchain registra una prova relativa all'impronta del documento; non impedisce materialmente la modifica o la copia di un file fuori dalla blockchain. Il confronto delle impronte può rilevare una differenza. L'identità dell'operatore non è automaticamente provata da una transazione: va collegata a un processo di autenticazione e alle registrazioni di audit.

La menzione storica di MD5 non orienta il nuovo sviluppo: la roadmap attuale prevede SHA-256. MetaMask era uno strumento della versione originale; non è necessario replicarne il flusso manuale se il nuovo sistema userà la certificazione server-side prevista dalla roadmap.

I riferimenti normativi e le affermazioni su valore legale presenti nella fonte storica richiederanno una verifica su fonti attuali prima di essere usati nei contenuti pubblici o nei certificati.

## Direzione dei contenuti

Presentare Encrypto partendo da gestione dei documenti, trasparenza e verifica dell'integrità. La blockchain è il mezzo per registrare la prova; l'utilità per enti e operatori deve precedere i dettagli tecnologici. Il linguaggio fintech resta una scelta grafica, non una descrizione del settore originario del prodotto.

## Scelte da definire prima delle funzionalità interessate

- Ambito iniziale: enti pubblici soltanto oppure anche organizzazioni private.
- Significato operativo della visibilità riservata e autorizzazioni per pubblicare.
- Pubblicazione tramite portale Encrypto, integrazione nel sito dell'ente oppure entrambi.
- Modalità e frequenza dei controlli sulle copie esterne.

Nessuna nuova funzionalità è stata implementata a seguito di questa analisi. Questi punti documentano le differenze da considerare nei prossimi sprint.

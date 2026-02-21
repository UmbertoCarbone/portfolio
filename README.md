

## Tecnologie principali

- **Node.js**: Runtime JavaScript lato server.
- **TypeScript**: Superset di JavaScript che aggiunge tipizzazione statica.
- **Express**: Framework minimalista per la creazione di API REST.

## Struttura delle cartelle




## Dipendenze installate

- **express**: Per la gestione delle route e delle richieste HTTP.
- **fs** (built-in): Per la lettura e scrittura di file.
- **path** (built-in): Per la gestione dei percorsi dei file.
- **url** (built-in): Per la gestione degli URL e conversione in path.
- **typescript**: Per compilare il codice TypeScript.
- **ts-node**: Per eseguire direttamente file TypeScript senza compilazione manuale.

## Funzionalità implementate

- API REST per la gestione di certificazioni e progetti.
- Lettura dei dati da file JSON.
- Organizzazione delle route in moduli separati.

## Come avviare il progetto

1. Installa le dipendenze:
   ```bash
   npm install
   ```
2. Avvia il server in modalità sviluppo:
   ```bash
   npx ts-node src/index.ts
   ```

## Autore

Umberto I.

## Note aggiuntive

- Il backend è pensato per essere facilmente estendibile.
- I dati sono attualmente salvati in file JSON, ma è possibile integrare un database in futuro.

---

Per domande o suggerimenti, contatta l'autore.

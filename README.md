# ENCRYPTO

Frontend Vue 3 + Vite + Tailwind CSS per la piattaforma di certificazione documenti.

## Sviluppo locale

Node.js 22.12 o successivo.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Aprire `http://localhost:5173`, oppure `http://192.168.1.58:5173` dalla stessa rete.
Dashcode rimane sulla porta 3847: `node dashcode/bin/dashcode.js start` dalla radice.

## Supabase

Inserire in `.env.local` URL e chiave pubblica di un progetto Supabase. Non inserire chiavi service_role o chiavi private nelle variabili VITE_. Riavviare il frontend dopo ogni modifica alle variabili. Senza configurazione il frontend funziona e mostra lo stato da configurare; non effettua richieste al backend.

Il provisioning dei progetti dev/prod, lo schema database e l'autenticazione sono ancora da implementare. La presenza delle variabili non implica che la connessione sia stata verificata.

## Build

`npm run build` genera `dist/`. `npm run preview` serve la build. GitHub Actions esegue una build a ogni push e pull request; nessun deploy è configurato.

`src/views` contiene le pagine, `src/router` le rotte, `src/lib` i client dei servizi, `src/components` i componenti condivisi e `supabase/migrations` ospiterà le migrazioni.

L'app precedente è conservata in `oldapp/`. Dashcode conserva codice e dati nella propria cartella. Entrambi sono esclusi dalla build frontend.

## Navigazione

- `/`: sito di presentazione di Encrypto.
- `/login`: pagina di accesso in preparazione, con collegamento all'anteprima.
- `/app`: dashboard gestionale.
- `/app/documenti`, `/app/certificazioni`, `/app/utenti`, `/app/impostazioni`: aree del gestionale.

Il gestionale è pubblico in anteprima, senza autenticazione attiva. Le pagine operative mostrano lo stato dei servizi in sviluppo; non simulano dati o certificazioni.

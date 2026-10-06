# Architettura ENCRYPTO

Il frontend Vue 3 è nella radice del progetto. Vite compila l'app; Tailwind v4 è integrato tramite il plugin Vite. Vue Router separa il sito pubblico dall'area gestionale.

## Sito pubblico

PublicLayout contiene header, navigazione e footer del sito. La landing `/` presenta il progetto, i benefici e il percorso documento → hash → blockchain. `/login` descrive lo stato dell'accesso e permette di aprire l'anteprima del gestionale; l'autenticazione non è ancora implementata.

## Gestionale

WorkspaceLayout contiene sidebar e header del gestionale. Le rotte sono `/app` (dashboard), `/app/documenti`, `/app/certificazioni`, `/app/utenti` e `/app/impostazioni`. Dashboard e pagine mostrano stati iniziali reali. Le vecchie rotte `/documenti` e `/impostazioni` reindirizzano alle nuove.

| File | Modulo | Responsabilità |
|---|---|---|
| src/main.js | Entrypoint | Avvio Vue, router e CSS |
| src/App.vue | App root | Outlet del router |
| src/layouts/PublicLayout.vue | Sito pubblico | Header e footer istituzionali |
| src/layouts/WorkspaceLayout.vue | Gestionale | Sidebar e struttura operativa |
| src/router/index.js | Router | Rotte, layout, redirect, ancore e titoli |
| src/lib/supabase.js | Client Supabase | Configurazione opzionale con chiave pubblica |
| src/components/AppIcon.vue | Icone | Icone SVG condivise |
| src/views/LandingView.vue | Landing | Presentazione pubblica del progetto |
| src/views/LoginView.vue | Accesso | Stato di preparazione e accesso anteprima |
| src/views/OverviewView.vue | Dashboard | Aree operative, attività e setup |
| src/views/DocumentsView.vue | Archivio | Stato iniziale in attesa del backend |
| src/views/WorkspaceSectionView.vue | Moduli futuri | Stati iniziali certificazioni e utenti |
| src/views/SettingsView.vue | Impostazioni | Stato dei servizi |

L'archivio non contiene dati dimostrativi. Nessuna certificazione o autenticazione viene simulata. Il gestionale è attualmente pubblico in anteprima: la protezione delle rotte verrà implementata con l'autenticazione.

Supabase ospiterà Postgres, Auth e Storage; le operazioni privilegiate verranno eseguite da Edge Functions. Le migrazioni saranno versionate in supabase/migrations. Le chiavi privilegiate non devono essere incluse nel frontend.

oldapp conserva l'app PHP precedente. dashcode ospita la dashboard di sviluppo e dashcode/data contiene i dati ENCRYPTO, distinti da dashcode/dashcode/data del progetto Dashcode originale.

## Design

Tema blu notte con ciano e viola. La landing usa una presentazione visiva e una prova documentale illustrativa. Il gestionale usa una gerarchia compatta orientata alle azioni. CSS in src/assets/main.css; icone SVG locali, senza richieste a servizi esterni.

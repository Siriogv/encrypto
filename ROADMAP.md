# ENCRYPTO — Roadmap di Sviluppo
> Piattaforma di certificazione documenti con valore legale su blockchain
> D.L. 135/2018 art. 8-ter · Reg. UE eIDAS art. 41 · GDPR compliant

---

## Stack Tecnologico

| Layer | Tecnologia |
|---|---|
| Frontend | Vue 3 + Vite + Tailwind CSS |
| Backend / DB | Supabase (PostgreSQL + Auth + Storage) |
| Server logic | Supabase Edge Functions (Deno) |
| Blockchain | Ethers.js v6 + Solidity (Polygon) |
| PDF | pdf-lib |
| Deploy | Vercel (frontend) · Supabase Cloud (backend) |

---

## FASE 1 — Fondamenta
**Durata stimata: 2 settimane**

### Sprint 1.1 · Setup & Infrastruttura
- [x] Inizializzazione repo (Vue 3 + Vite + Tailwind)
- [ ] Setup Supabase project (dev + prod)
- [x] Struttura cartelle progetto
- [x] CI/CD pipeline base (GitHub Actions)
- [x] Variabili d'ambiente e configurazione

### Sprint 1.2 · Database Schema
- [ ] Tabella `tenants` (enti/aziende multi-tenant)
- [ ] Tabella `users` + profili operatori
- [ ] Tabella `roles` + `permissions` (Super Admin / Admin / Responsabile / Operatore)
- [ ] Tabella `departments` (dipartimenti per ente)
- [ ] Row Level Security (RLS) per isolamento tenant
- [ ] Trigger audit log su tutte le tabelle critiche

### Sprint 1.3 · Autenticazione
- [ ] Login / Logout (Supabase Auth)
- [ ] Registrazione ente + primo Admin
- [ ] Gestione sessioni e refresh token
- [ ] 2FA opzionale (TOTP)
- [ ] Reset password via email
- [ ] Middleware route protection (Vue Router guards)

---

## FASE 2 — Cuore del prodotto
**Durata stimata: 3 settimane**

### Sprint 2.1 · Gestione Utenti & Permessi
- [ ] CRUD utenti / operatori
- [ ] Assegnazione ruoli e permessi granulari
- [ ] Gestione dipartimenti
- [ ] Profilo utente (avatar, dati, cambio password)
- [ ] Log accessi e attività per utente

### Sprint 2.2 · Upload & Hashing
- [ ] Componente upload drag-and-drop (qualsiasi formato)
- [ ] **Calcolo SHA-256 lato client** (Web Crypto API — il file non transita se non richiesto)
- [ ] Calcolo hash lato server (Edge Function — verifica incrociata)
- [ ] Salvataggio file su Supabase Storage (path cifrato)
- [ ] Tabella `documents` con hash, timestamp, operatore, tenant

### Sprint 2.3 · Livello 1 — Certificazione Locale
- [ ] Registrazione hash nel DB con marca temporale server
- [ ] Stato documento: **GIALLO** (presente, non ancora blockchain)
- [ ] Verifica integrità: confronto hash file caricato vs hash salvato
- [ ] Stato documento: **ROSSO** (manomissione rilevata)
- [ ] Alert email immediato su manomissione
- [ ] Archivio documenti con cartelle per utente/reparto
- [ ] Ricerca per nome, hash, data, operatore, stato

---

## FASE 3 — Blockchain
**Durata stimata: 3 settimane**

### Sprint 3.1 · Smart Contract
- [ ] Contratto Solidity `DocumentCertifier.sol`
  - `certify(bytes32 hash, string metadata)` → emette evento con timestamp
  - `verify(bytes32 hash)` → restituisce `(bool, timestamp, address)`
  - `batchCertify(bytes32[] hashes)` → Merkle root (ottimizzazione gas)
- [ ] Test unitari contratto (Hardhat)
- [ ] Deploy su Polygon Mumbai (testnet)
- [ ] Deploy su Polygon Mainnet

### Sprint 3.2 · Integrazione Blockchain Backend
- [ ] Edge Function `certify-document`: firma tx con wallet server-side (chiave privata in env sicuro)
- [ ] Edge Function `verify-document`: query on-chain per verifica pubblica
- [ ] Gestione asincrona: tx in coda → webhook su conferma
- [ ] Salvataggio `tx_hash` + `block_number` + `timestamp_onchain` nel DB
- [ ] Stato documento: **BIANCO** (certificato su blockchain)

### Sprint 3.3 · UX Blockchain
- [ ] Visualizzazione stato certificazione in tempo reale
- [ ] Link diretto a Polygonscan per ogni documento
- [ ] Costi gas stimati per ente (dashboard)
- [ ] Configurazione wallet per ente (ogni tenant ha il proprio)

---

## FASE 4 — Verifica Pubblica & Certificati
**Durata stimata: 2 settimane**

### Sprint 4.1 · Pagina Pubblica
- [ ] Route pubblica `/verifica` (nessun login richiesto)
- [ ] **Verifica per upload**: carica documento → calcolo hash → ricerca nel DB + blockchain
- [ ] **Verifica per hash**: incolla SHA-256 → risultato immediato
- [ ] **Verifica per QR code**: scansione da certificato PDF
- [ ] Risultato verifica: ente certificante, operatore, data/ora, tx blockchain
- [ ] Widget JS embeddable per siti terzi (`<script src="encrypto-widget.js">`)

### Sprint 4.2 · Certificato PDF
- [ ] Generazione automatica certificato PDF al completamento blockchain
- [ ] Contenuto certificato: hash, timestamp, tx hash, ente, operatore, QR code
- [ ] QR code che punta a `/verifica?hash=...` (verifica pubblica)
- [ ] Logo e branding dell'ente nel certificato
- [ ] Download certificato dall'archivio in qualsiasi momento

---

## FASE 5 — Multi-tenant & Configurazione
**Durata stimata: 2 settimane**

### Sprint 5.1 · Pannello Super Admin
- [ ] Gestione enti (crea, modifica, sospendi)
- [ ] Statistiche globali (certificazioni totali, per ente, per periodo)
- [ ] Gestione piani/abbonamenti
- [ ] Log di sistema

### Sprint 5.2 · Configurazione per Ente
- [ ] Upload logo + branding personalizzato (white-label)
- [ ] Configurazione SMTP per notifiche email proprie
- [ ] Configurazione wallet blockchain dell'ente
- [ ] Impostazione rete blockchain (Polygon / Ethereum / testnet)
- [ ] Configurazione reCAPTCHA per area pubblica
- [ ] Impostazioni retention policy (durata conservazione documenti)

---

## FASE 6 — API & Integrazioni
**Durata stimata: 2 settimane**

### Sprint 6.1 · API REST Pubblica
- [ ] `POST /api/v1/certify` — certifica un hash via API key
- [ ] `GET /api/v1/verify/{hash}` — verifica pubblica (no auth)
- [ ] `GET /api/v1/certificate/{id}` — scarica certificato PDF
- [ ] `GET /api/v1/documents` — lista documenti (autenticato)
- [ ] Gestione API key per ente
- [ ] Rate limiting
- [ ] Documentazione API (OpenAPI / Swagger)

### Sprint 6.2 · Webhook & Automazioni
- [ ] Webhook configurabile su: certificazione completata, manomissione rilevata, scadenza documento
- [ ] Notifica email al destinatario quando un documento che lo riguarda viene certificato
- [ ] Notifica scadenza documenti con retention policy
- [ ] Export dati archivio (CSV, JSON)

---

## FASE 7 — Hardening & Launch
**Durata stimata: 2 settimane**

### Sprint 7.1 · Sicurezza
- [ ] Security audit OWASP Top 10
- [ ] Penetration test base (SQL injection, XSS, CSRF, auth bypass)
- [ ] Validazione input su tutti gli endpoint
- [ ] Headers di sicurezza (CSP, HSTS, etc.)
- [ ] Rate limiting su API e form pubblici
- [ ] Backup automatico DB

### Sprint 7.2 · Testing & Deploy
- [ ] Test unitari componenti Vue (Vitest)
- [ ] Test E2E flusso certificazione (Playwright)
- [ ] Test smart contract (coverage >90%)
- [ ] Performance test (upload file grandi, batch certification)
- [ ] Deploy production (Vercel + Supabase Cloud)
- [ ] Monitoring (Sentry per errori, uptime check)
- [ ] Documentazione utente finale

---

## ROADMAP FUTURA (post-launch)

### V2 · Form Builder Certificabile
- Creazione moduli dati strutturati (cedole, domande, dichiarazioni, verbali)
- I dati compilati vengono serializzati + hashati + certificati automaticamente
- Template per usi comuni: atti amministrativi, verbali riunioni, dichiarazioni

### V2 · Firma Digitale
- Integrazione SPID per identificazione operatore
- Firma con CIE (Carta d'Identità Elettronica)
- Il certificato riporta identità verificata del firmatario (valore legale rafforzato)

### V2 · Versioning Documenti
- Ogni revisione di un documento genera nuovo hash
- Storico versioni con catena di certificazioni
- Confronto visivo tra versioni

### V3 · Blockchain Proprietaria / Privata
- Deploy nodo Ethereum privato (Geth / Besu) per enti con vincoli di sovranità dati
- Consorzio blockchain per PA locali
- Integrazione con AgID e standard Italia Digitale

### V3 · Smart Contract Avanzati
- Contratti per esecuzione automatica (es. svincolo pagamenti su verifica documenti)
- KYC wallets per gestione economica servizi (buoni, cedole librarie)
- Multisig per approvazioni che richiedono più firmatari

### V3 · Identità Digitale
- Wallet digitale certificato per cittadini/utenti
- Sincronizzazione con CIE e SPID
- Verifiable Credentials (standard W3C)

---

## Timeline di massima

```
Mese 1      Mese 2      Mese 3      Mese 4
├── F1 ────┤├── F2 ─────┤├── F3 ────┤├── F4 ──┤
           ├──────────────────────── F5 ──────┤
                                    ├── F6 ───┤
                                             ├─ F7 ─┤
                                                    ▲
                                               LAUNCH MVP
```

**MVP completo: ~16 settimane (4 mesi)**

---

## Metriche di successo MVP

| KPI | Target |
|---|---|
| Tempo certificazione Livello 1 | < 3 secondi |
| Tempo certificazione Livello 2 (blockchain) | < 60 secondi |
| Disponibilità uptime | > 99.5% |
| Verifica pubblica hash | < 1 secondo |
| Supporto dimensione file | fino a 500 MB |
| Test coverage | > 80% |

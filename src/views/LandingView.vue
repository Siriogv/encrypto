<script setup>
import AppIcon from '../components/AppIcon.vue'
const features = [
  { icon: 'document', title: 'Un archivio, tutto sotto controllo.', text: 'Documenti organizzati per ente e dipartimento, con accessi dedicati a ogni ruolo.' },
  { icon: 'hash', title: 'L’integrità ha una firma unica.', text: 'L’impronta SHA-256 permette di confrontare un file con la sua registrazione e rilevare modifiche.' },
  { icon: 'chain', title: 'Una prova che puoi verificare.', text: 'La registrazione su blockchain collega l’impronta del documento a una traccia consultabile.' },
]
const steps = [
  { number: '01', title: 'Seleziona il documento', text: 'Il punto di partenza è il tuo file originale.' },
  { number: '02', title: 'Registra l’impronta', text: 'Un hash identifica il contenuto esatto del file.' },
  { number: '03', title: 'Certifica e verifica', text: 'L’impronta viene registrata per consentire verifiche successive.' },
]
</script>
<template>
  <section class="landing-hero">
    <div class="landing-hero-copy"><p class="eyebrow"><span class="eyebrow-line"></span>DOCUMENT TRUST PLATFORM</p><h1>I tuoi documenti.<br>Una fiducia <span>verificabile.</span></h1><p class="landing-intro">Dai valore alla certezza. Encrypto unisce gestione documentale, integrità crittografica e certificazione blockchain in un unico spazio.</p><div class="landing-actions"><RouterLink class="button" to="/app">Esplora il gestionale <AppIcon name="arrow" /></RouterLink><a class="secondary-link" href="#come-funziona">Scopri come funziona ↓</a></div><p class="preview-note"><span class="status-dot pending"></span>Anteprima del progetto · Servizi in fase di sviluppo</p></div>
    <div class="proof-preview" aria-label="Schema illustrativo di certificazione"><div class="proof-header"><span><AppIcon name="shield" />DOCUMENT PROOF</span><span class="proof-tag">CONCEPT</span></div><div class="proof-document"><span class="proof-document-icon"><AppIcon name="document" /></span><div><strong>Il tuo documento</strong><small>Un file. Un’impronta unica.</small></div></div><div class="proof-fingerprint"><span>IMPRONTA DIGITALE</span><strong>SHA-256</strong><div class="fingerprint-bars" aria-hidden="true"><i v-for="n in 28" :key="n" :style="{ height: `${16 + (n * 17 % 35)}px`, opacity: .35 + (n % 5) * .13 }"></i></div></div><div class="proof-chain"><span class="proof-chain-node"><AppIcon name="document" /></span><span class="proof-connector"></span><span class="proof-chain-node"><AppIcon name="hash" /></span><span class="proof-connector"></span><span class="proof-chain-node purple"><AppIcon name="cube" /></span></div><div class="proof-bottom"><span>DOCUMENTO → HASH → BLOCKCHAIN</span><small>Schema illustrativo del flusso previsto</small></div></div>
  </section>
  <div class="landing-trustline"><span>PROGETTATO PER LA FIDUCIA</span><div><AppIcon name="hash" />Integrità crittografica</div><div><AppIcon name="shield" />Accessi per ruolo</div><div><AppIcon name="chain" />Tracciabilità blockchain</div></div>
  <section id="piattaforma" class="landing-section"><div class="landing-section-heading"><p class="eyebrow">LA PIATTAFORMA</p><h2>Un sistema completo.<br>Un obiettivo chiaro.</h2><p>Aiutare enti e organizzazioni a gestire i documenti e rendere verificabile la loro integrità.</p></div><div class="landing-feature-grid"><article v-for="feature in features" :key="feature.title"><span class="feature-icon"><AppIcon :name="feature.icon" /></span><h3>{{ feature.title }}</h3><p>{{ feature.text }}</p></article></div></section>
  <section id="come-funziona" class="landing-section process-section"><div class="landing-section-heading"><p class="eyebrow">COME FUNZIONA</p><h2>Dal documento alla prova.</h2><p>Un percorso semplice, costruito su una base crittografica.</p></div><ol class="landing-process"><li v-for="step in steps" :key="step.number"><span>{{ step.number }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></li></ol><p class="process-note">Archivio, autenticazione e certificazione saranno attivati nelle prossime fasi di sviluppo.</p></section>
  <section class="landing-cta"><div><p class="eyebrow">IL TUO SPAZIO OPERATIVO</p><h2>La chiarezza, anche nel lavoro quotidiano.</h2><p>Una dashboard dedicata a documenti, certificazioni e gestione degli accessi.</p></div><RouterLink class="button" to="/app">Esplora il gestionale <AppIcon name="arrow" /></RouterLink></section>
</template>

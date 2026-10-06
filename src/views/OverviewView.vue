<script setup>
import { isSupabaseConfigured } from '../lib/supabase'
import AppIcon from '../components/AppIcon.vue'
const shortcuts = [
  { to: '/app/documenti', icon: 'document', title: 'Documenti', text: 'Organizza e consulta l’archivio.', status: 'In preparazione' },
  { to: '/app/certificazioni', icon: 'chain', title: 'Certificazioni', text: 'Segui le registrazioni dei documenti.', status: 'In programma' },
  { to: '/app/utenti', icon: 'shield', title: 'Utenti e ruoli', text: 'Gestisci gli accessi del tuo ente.', status: 'Da configurare' },
]
</script>
<template>
  <div class="page-heading focused-heading"><div><p class="eyebrow">WORKSPACE ENCRYPTO</p><h1>Dashboard</h1><p class="intro">Una vista d’insieme sul lavoro del tuo ente.</p></div><RouterLink class="button button-secondary" to="/app/impostazioni"><AppIcon name="settings" />Impostazioni</RouterLink></div>
  <section class="dashboard-shortcuts" aria-label="Aree del gestionale"><RouterLink v-for="item in shortcuts" :key="item.to" :to="item.to" class="dashboard-shortcut"><div class="shortcut-heading"><span class="connection-icon"><AppIcon :name="item.icon" /></span><AppIcon name="arrow" /></div><h2>{{ item.title }}</h2><p>{{ item.text }}</p><span class="shortcut-status">{{ item.status }}</span></RouterLink></section>
  <section class="dashboard-grid"><div class="dashboard-panel"><div class="panel-heading"><h2>Attività recenti</h2><span class="badge">In preparazione</span></div><div class="activity-empty"><AppIcon name="document" /><h3>Qui troverai le attività del tuo ente</h3><p>Documenti caricati e certificazioni compariranno in questa sezione quando i servizi saranno attivi.</p><RouterLink class="text-link" to="/app/documenti">Vai all’archivio <AppIcon name="arrow" /></RouterLink></div></div><section class="dashboard-panel dashboard-setup" aria-labelledby="setup-title"><div class="panel-heading"><h2 id="setup-title">Setup del workspace</h2></div><ol class="setup-checklist"><li><span class="setup-check complete">✓</span><div><strong>Interfaccia pronta</strong><small>Dashboard e navigazione disponibili</small></div></li><li><span class="setup-check">2</span><div><strong>{{ isSupabaseConfigured ? 'Verifica il database' : 'Collega il database' }}</strong><small>{{ isSupabaseConfigured ? 'Configurazione presente, da verificare' : 'Prossimo passo' }}</small></div></li><li><span class="setup-check">3</span><div><strong>Attiva accessi e ruoli</strong><small>Da configurare</small></div></li><li><span class="setup-check">4</span><div><strong>Configura la blockchain</strong><small>In programma</small></div></li></ol><RouterLink class="button" to="/app/impostazioni">Continua il setup <AppIcon name="arrow" /></RouterLink></section></section>
</template>

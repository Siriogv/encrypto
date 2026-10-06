<script setup>
import { useRoute } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
const route = useRoute()
const navigation = [
  { to: '/app', label: 'Dashboard', icon: 'grid' },
  { to: '/app/documenti', label: 'Documenti', icon: 'document' },
  { to: '/app/certificazioni', label: 'Certificazioni', icon: 'chain' },
  { to: '/app/utenti', label: 'Utenti e ruoli', icon: 'shield' },
  { to: '/app/impostazioni', label: 'Impostazioni', icon: 'settings' },
]
</script>
<template>
  <a class="skip-link" href="#content">Vai al contenuto</a>
  <div class="app-shell">
    <aside class="sidebar">
      <RouterLink class="brand" to="/app" aria-label="Encrypto, dashboard"><span class="brand-mark"><AppIcon name="cube" /></span>encrypto<span class="brand-dot">.</span></RouterLink>
      <div class="workspace-label"><span class="workspace-avatar">E</span><div>Encrypto Workspace<small>Documenti e certificazioni</small></div><span class="workspace-chevron" aria-hidden="true">⌄</span></div>
      <p class="nav-label">PLATTAFORMA</p>
      <nav aria-label="Navigazione principale"><RouterLink v-for="item in navigation" :key="item.to" :to="item.to" class="nav-item" exact-active-class="selected"><AppIcon :name="item.icon" />{{ item.label }}<span v-if="route.path === item.to" class="nav-active-dot" aria-hidden="true"></span></RouterLink></nav>
      <RouterLink class="back-to-site" to="/">← Sito Encrypto</RouterLink><div class="sidebar-bottom"><span class="status-dot pending"></span> Ambiente di sviluppo <p>ENCRYPTO / v0.1.0</p></div>
    </aside>
    <div class="workspace">
      <header class="topbar"><div class="breadcrumbs">Gestionale <span>/</span><strong>{{ route.meta.title }}</strong></div><div class="topbar-right"><span class="badge"><span class="status-dot pending"></span>Anteprima</span><span class="profile-avatar" aria-label="Workspace Encrypto">E</span></div></header>
      <main id="content" tabindex="-1"><RouterView /></main>
      <footer><span class="footer-brand">ENCRYPTO <span class="footer-divider">/</span> DOCUMENT TRUST PLATFORM</span><span>Infrastruttura in sviluppo <span class="status-dot pending"></span></span></footer>
    </div>
  </div>
</template>

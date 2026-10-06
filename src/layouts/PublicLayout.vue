<script setup>
import AppIcon from '../components/AppIcon.vue'
</script>
<template>
  <div class="public-site">
    <a class="skip-link" href="#content">Vai al contenuto</a>
    <header class="public-header"><RouterLink class="brand" to="/" aria-label="Encrypto, home"><span class="brand-mark"><AppIcon name="cube" /></span>encrypto<span class="brand-dot">.</span></RouterLink><nav aria-label="Navigazione sito"><RouterLink to="/#piattaforma">La piattaforma</RouterLink><RouterLink to="/#come-funziona">Come funziona</RouterLink><RouterLink class="public-login" to="/login">Accedi <AppIcon name="arrow" /></RouterLink></nav></header>
    <main id="content" class="public-main" tabindex="-1"><RouterView /></main>
    <footer class="public-footer"><RouterLink class="brand" to="/"><span class="brand-mark"><AppIcon name="cube" /></span>encrypto<span class="brand-dot">.</span></RouterLink><p>Documenti. Integrità. Fiducia.</p><span>Progetto in sviluppo · Anteprima</span></footer>
  </div>
</template>

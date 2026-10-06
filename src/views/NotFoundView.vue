<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template><section class="empty-state"><p class="eyebrow">404</p><h1>Pagina non trovata</h1><p>Il percorso richiesto non è disponibile.</p><RouterLink class="button" :to="route.path.startsWith('/app') ? '/app' : '/'">{{ route.path.startsWith('/app') ? 'Torna alla dashboard' : 'Torna al sito' }}</RouterLink></section></template>

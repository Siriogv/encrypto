<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
const route = useRoute()
const content = computed(() => route.meta.section === 'users' ? {
  icon: 'shield', eyebrow: 'GESTIONE ACCESSI', title: 'Utenti e ruoli', subtitle: 'Le persone del tuo ente, con gli accessi giusti.', heading: 'La gestione utenti è in preparazione', text: 'Dopo l’attivazione dell’autenticazione potrai gestire operatori, ruoli e dipartimenti del tuo ente.',
} : {
  icon: 'chain', eyebrow: 'CERTIFICAZIONE DOCUMENTALE', title: 'Certificazioni', subtitle: 'Segui il percorso dei documenti verso una prova verificabile.', heading: 'Le certificazioni sono in programma', text: 'Le registrazioni dei documenti e il loro stato di certificazione saranno disponibili dopo il collegamento del database e della blockchain.',
})
</script>
<template><div class="page-heading focused-heading"><div><p class="eyebrow">{{ content.eyebrow }}</p><h1>{{ content.title }}</h1><p class="intro">{{ content.subtitle }}</p></div></div><section class="empty-state"><div class="empty-orbit"><AppIcon :name="content.icon" /></div><h2>{{ content.heading }}</h2><p>{{ content.text }}</p><RouterLink class="button" to="/app/impostazioni">Vai alle impostazioni <AppIcon name="arrow" /></RouterLink></section></template>

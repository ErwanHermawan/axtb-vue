<script setup lang="ts">
// --- components ---
import ButtonComponent from '@atom/Button/ButtonComponent.vue'
import TheWelcome from '@molecule/TheWelcome.vue'
</script>

<template>
  <main>
    <ButtonComponent to="/about" text="More" variant="secondary" :is-link="true" />
    <ButtonComponent text="Selengkapnya" variant="primary" type="button" />
    <TheWelcome />
  </main>
</template>

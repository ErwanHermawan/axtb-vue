<script setup lang="ts">
// --- core ---
import { RouterLink } from 'vue-router'

// --- props ---
const props = defineProps<{
  text: String
  variant: String
  type?: String
  isLink?: Boolean
  to?: String
}>()
const { text, type, variant, isLink, to } = props
const classBtn = variant !== undefined ? `btn ${variant}` : 'btn'
</script>

<template>
  <!-- if -->
  <RouterLink v-if="isLink" :to="to" :class="classBtn">{{ text }}</RouterLink>
  <!-- else -->
  <button v-else :class="classBtn" :type="type">{{ text }}</button>
</template>

<style>
.btn {
  display: inline-block;
  padding: 12px 24px;
  text-decoration: none;
  outline: 0;
  font-size: 16px;
  line-height: 1.2;
  color: #fff;
  background-color: #aaa;
  border-radius: 8px;
}
.btn.primary {
  background-color: green;
}
.btn.secondary {
  background-color: yellow;
}
</style>

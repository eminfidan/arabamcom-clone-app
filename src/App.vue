<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <router-view :key="$route.fullPath" />
</template>

<style scoped></style>

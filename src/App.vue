<script setup lang="ts">
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>

<template>
  <NavLogin />
  <main>
    <router-view />
  </main>
</template>


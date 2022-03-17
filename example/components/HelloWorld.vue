<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
const blockPosition = ref({ blockX: 150 });
</script>

<template>
  <slide-verify />
</template>

<style scoped>
</style>

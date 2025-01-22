<script setup lang="ts">
defineProps<{
  isChecked: boolean
  handleOnPress: () => void
}>()
</script>

<template>
  <div class="checkContainer" @click="handleOnPress">
    <div v-if="isChecked" class="checked"></div>
  </div>
</template>

<style scoped>
.checkContainer {
  border-radius: 100%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--color-text);
}

.checked {
  background-color: white;
  border-radius: 100%;
  width: 12px;
  height: 12px;
}
</style>
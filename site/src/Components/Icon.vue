<template>
  <svg :class="props.iconClass ? 'icon' : ''">
    <use :href="`/sprite.svg#${props.name}`" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  "icon-class": {
    type: Boolean,
    required: false,
    default() {
      return true;
    },
  },
});
</script>

<style scoped>
.icon {
  height: 24px;
  width: 24px;
}
</style>

<template>
  <div class="border-card" :class="'border-card--' + type">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BorderCard",
  props: {
    type: Number,
  },
});
</script>

<style lang="scss" scoped>
.border-card {
  &--1 {
    border-image: url(@images/borders/1.png) 6 6 6 6 fill;
    border-top: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid transparent;
  }

  &--2 {
    border-image: url(@images/borders/2.png) 6 6 6 6 fill;
    border-top: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid transparent;
  }
}
</style>

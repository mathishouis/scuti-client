<template>
  <div class="renderer-view__canvas" id="renderer"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RendererView",
});
</script>

<style lang="scss" scoped>
.renderer-view {
  &__canvas {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: red;
  }
}
</style>

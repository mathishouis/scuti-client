<template>
  <div class="game"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameView",
});
</script>

<style lang="scss" scoped>
.game {
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>

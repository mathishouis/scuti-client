<template>
  <div class="info-bar">
    <grid-purse />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GridPurse from "@/components/grid-purse/GridPurse.vue";

export default defineComponent({
  name: "InfoBar",
  components: {
    GridPurse,
  },
});
</script>

<style lang="scss" scoped>
.info-bar {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: -5px;
  right: 3px;
}
</style>

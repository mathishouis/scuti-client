<template>
  <div class="info-bar">
    <grid-purse />
    <group-card />
    <event-card />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GridPurse from "@/components/grid-purse/GridPurse.vue";
import GroupCard from "@/components/info-bar/GroupCard.vue";
import EventCard from "@/components/info-bar/EventCard.vue";

export default defineComponent({
  name: "InfoBar",
  components: {
    EventCard,
    GridPurse,
    GroupCard,
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
  gap: 2px;
}
</style>

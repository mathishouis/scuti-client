<template>
  <div class="room-view">
    <room-tools-widget class="room-view__room-tools-widget" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoomToolsWidget from "@/components/room/widgets/RoomToolsWidget.vue";

export default defineComponent({
  name: "RoomView",
  components: {
    RoomToolsWidget,
  },
});
</script>

<style lang="scss" scoped>
.room-view {
  position: relative;
  &__room-tools-widget {
    position: fixed;
    bottom: 55px;
    left: 0;
  }
}
</style>

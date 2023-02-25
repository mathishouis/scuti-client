<template>
  <div class="room-view">
    <chat-input-widget class="room-view__chat-input-widget" />
    <room-tools-widget class="room-view__room-tools-widget" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoomToolsWidget from "@/components/room/widgets/RoomToolsWidget.vue";
import ChatInputWidget from "@/components/room/widgets/ChatInputWidget.vue";

export default defineComponent({
  name: "RoomView",
  components: {
    RoomToolsWidget,
    ChatInputWidget,
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

  &__chat-input-widget {
    position: fixed;
    bottom: 63px;
    transform: translateX(-50%);
    left: 50%;
  }
}
</style>

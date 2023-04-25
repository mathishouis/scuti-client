<template>
  <div class="navigator-actions-widget">
    <tool-tip :label="__locale('navigator.tooltip.create.room')">
      <div
        class="navigator-actions-widget__create-room-button"
        @click="createRoom"
      >
        {{ __locale("navigator.create.room") }}
      </div>
    </tool-tip>
    <tool-tip
      :label="__locale('navigator.tooltip.promote.room')"
      v-if="navigatorStore.selectedTab === 'myworld_view'"
    >
      <div class="navigator-actions-widget__create-event-button">
        {{ __locale("navigator.create.event") }}
      </div>
    </tool-tip>
    <tool-tip :label="__locale('navigator.tooltip.random.room')" v-else>
      <div
        class="navigator-actions-widget__random-room-button"
        @click="randomFriendingRoom"
      >
        {{ __locale("navigator.random.room") }}
      </div>
    </tool-tip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useNavigatorStore } from "@/stores/Navigator";
import { useWindowStore } from "@/stores/WindowView";
import { useSocketStore } from "@/stores/Socket";
import { RandomFriendingRoomMessageComposer } from "@/sockets/messages/outgoing/navigator/RandomFriendingRoomMessageComposer";

export default defineComponent({
  name: "NavigatorActionsWidget",
  computed: {
    ...mapStores(useNavigatorStore, useWindowStore, useSocketStore),
  },
  methods: {
    createRoom(): void {
      console.log("create");
      this.windowStore.getWindow("roomCreator")!.visible = true;
      setTimeout(() => this.windowStore.setToTop("roomCreator"), 10);
    },
    randomFriendingRoom(): void {
      this.socketStore.socket?.send(new RandomFriendingRoomMessageComposer());
    },
  },
});
</script>

<style lang="scss" scoped>
.navigator-actions-widget {
  width: 394px;
  height: 60px;
  position: absolute !important;
  right: 21px;
  bottom: 19px;
  display: flex;
  flex-direction: row;
  gap: 16px;

  &__create-room-button {
    width: 189px;
    height: 60px;
    background-image: url(@images/navigator/buttons/create_room.png);
    cursor: pointer;
    font-family: "Ubuntu Bold", sans-serif;
    color: #ffffff;
    font-size: 9.4pt;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    padding-top: 23px;
    padding-left: 78px;
    white-space: nowrap;
    overflow: hidden;
  }

  &__create-event-button {
    width: 189px;
    height: 60px;
    background-image: url(@images/navigator/buttons/create_event.png);
    cursor: pointer;
    font-family: "Ubuntu Bold", sans-serif;
    color: #ffffff;
    font-size: 9.4pt;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    padding-top: 23px;
    padding-left: 66px;
    white-space: nowrap;
    overflow: hidden;
  }

  &__random-room-button {
    width: 189px;
    height: 60px;
    background-image: url(@images/navigator/buttons/random_room.png);
    cursor: pointer;
    font-family: "Ubuntu Bold", sans-serif;
    color: #ffffff;
    font-size: 9.4pt;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    padding-top: 23px;
    padding-left: 66px;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>

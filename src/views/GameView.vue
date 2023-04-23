<template>
  <div class="game">
    <navigator-window v-show="navigatorStore.visible" />
    <tool-bar />
    <landing-view v-if="landingViewStore.visible" />
    <room-view v-if="roomStore.visible" />
    <renderer-view v-show="roomStore.visible" />
    <info-bar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoomView from "@/components/room-view/RoomView.vue";
import ToolBar from "@/components/tool-bar/ToolBar.vue";
import LandingView from "@/components/landing-view/LandingView.vue";
import InfoBar from "@/components/info-bar/InfoBar.vue";
import NavigatorWindow from "@/components/navigator/NavigatorWindow.vue";
import RendererView from "@/components/renderer-view/RendererView.vue";
import { mapStores } from "pinia";
import { useLandingViewStore } from "@/stores/LandingView";
import { useNavigatorStore } from "@/stores/Navigator";
import { useRoomStore } from "@/stores/Room";

export default defineComponent({
  name: "GameView",
  components: {
    RendererView,
    NavigatorWindow,
    InfoBar,
    ToolBar,
    LandingView,
    RoomView,
  },
  computed: {
    ...mapStores(useLandingViewStore, useNavigatorStore, useRoomStore),
  },
});
</script>

<style lang="scss" scoped>
.game {
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>

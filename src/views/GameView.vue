<template>
  <div class="game">
    <navigator-window v-show="navigatorVisible" />
    <tool-bar />
    <landing-view v-if="landingViewVisible" />
    <room-view v-if="roomVisible" />
    <renderer-view v-show="roomVisible" />
    <info-bar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import RoomView from "@/components/room-view/RoomView.vue";
import ToolBar from "@/components/tool-bar/ToolBar.vue";
import LandingView from "@/components/landing-view/LandingView.vue";
import InfoBar from "@/components/info-bar/InfoBar.vue";
import NavigatorWindow from "@/components/navigator/NavigatorWindow.vue";
import RendererView from "@/components/renderer-view/RendererView.vue";

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
    ...mapGetters("LandingView", { landingViewVisible: "isVisible" }),
    ...mapGetters("Navigator", { navigatorVisible: "isVisible" }),
    ...mapGetters("Room", { roomVisible: "isVisible" }),
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

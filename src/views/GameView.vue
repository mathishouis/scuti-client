<template>
  <div class="game">
    <navigator-window v-show="navigatorVisible" />
    <info-bar />
    <tool-bar />
    <landing-view v-if="landingViewVisible" />
    <room-view v-else />
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

export default defineComponent({
  name: "GameView",
  components: {
    NavigatorWindow,
    InfoBar,
    ToolBar,
    LandingView,
    RoomView,
  },
  computed: {
    ...mapGetters("LandingView", { landingViewVisible: "isVisible" }),
    ...mapGetters("Navigator", { navigatorVisible: "isVisible" }),
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

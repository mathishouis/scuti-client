<template>
  <div class="game">
    <info-bar />
    <tool-bar />
    <room-view />
    <landing-view v-if="landingViewVisible" />
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

export default defineComponent({
  name: "GameView",
  components: {
    InfoBar,
    ToolBar,
    LandingView,
    RoomView,
  },
  computed: {
    ...mapGetters("LandingView", { landingViewVisible: "isVisible" }),
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

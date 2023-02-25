<template>
  <div class="game">
    <tool-bar />
    <room-view />
    <landing-view v-if="landingViewVisible" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import RoomView from "@/components/room/RoomView.vue";

export default defineComponent({
  name: "GameView",
  components: {
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

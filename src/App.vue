<template>
  <loading-view v-if="loadingVisible" />
  <game-view v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import LoadingView from "@/views/LoadingView.vue";
import GameView from "@/views/GameView.vue";

export default defineComponent({
  name: "App",
  components: {
    LoadingView,
    GameView,
  },
  computed: {
    ...mapGetters("Loading", { loadingVisible: "isVisible" }),
  },
});
</script>

<style lang="scss">
@import "@/assets/sass/style.scss";
</style>

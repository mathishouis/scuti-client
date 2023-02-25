<template>
  <loading-view v-if="loadingVisibility" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "App",
  computed: {
    ...mapGetters("Loading", { loadingVisibility: "isVisible" }),
  },
});
</script>

<style lang="scss">
@import "@/assets/sass/style.scss";
</style>

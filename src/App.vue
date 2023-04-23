<template>
  <loading-view v-if="loadingViewStore.visible" />
  <game-view v-show="!loadingViewStore.visible" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import LoadingView from "@/views/LoadingView.vue";
import GameView from "@/views/GameView.vue";
import { Socket } from "./sockets/Socket";
import { SSOTicketMessageComposer } from "./sockets/messages/outgoing/handshake/SSOTicketMessageComposer";
import { UniqueIDMessageComposer } from "./sockets/messages/outgoing/handshake/UniqueIDMessageComposer";
import { Scuti } from "scuti-renderer";
import { mapStores } from "pinia";
import { useLandingViewStore } from "@/stores/LandingView";
import { useLoadingViewStore } from "@/stores/LoadingView";
import { useRendererStore } from "@/stores/Renderer";

export default defineComponent({
  name: "App",
  components: {
    LoadingView,
    GameView,
  },
  computed: {
    ...mapStores(useLandingViewStore, useLoadingViewStore, useRendererStore),
    ...mapGetters("Socket", ["socket"]),
  },
  methods: {
    ...mapMutations("Socket", ["setSocket"]),
  },
  async mounted(): Promise<void> {
    this.rendererStore.engine = new Scuti({
      canvas: document.getElementById("renderer") as HTMLElement,
      width: window.innerWidth,
      height: window.innerHeight,
      resources: "http://localhost:8081/",
    });
    await this.rendererStore.engine.loadResources();
    this.setSocket(new Socket(false, "127.0.0.1", 30001));
    this.socket.onConnect = () => {
      const authTicket: string | null = new URLSearchParams(
        window.location.search
      ).get("sso");
      if (authTicket === null) return;
      this.landingViewStore.visible = true;
      this.socket.send(new UniqueIDMessageComposer());
      this.socket.send(new SSOTicketMessageComposer(authTicket));
    };
    this.socket.connect();
  },
});
</script>

<style lang="scss">
@import "@/assets/sass/style.scss";
</style>

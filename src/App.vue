<template>
  <loading-view v-if="loadingViewStore.visible" />
  <game-view v-show="!loadingViewStore.visible" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
import { useSocketStore } from "@/stores/Socket";

export default defineComponent({
  name: "App",
  components: {
    LoadingView,
    GameView,
  },
  computed: {
    ...mapStores(
      useLandingViewStore,
      useLoadingViewStore,
      useRendererStore,
      useSocketStore
    ),
  },
  async mounted(): Promise<void> {
    this.rendererStore.engine = new Scuti({
      canvas: document.getElementById("renderer") as HTMLElement,
      width: window.innerWidth,
      height: window.innerHeight,
      resources: "http://localhost:8081/",
    });
    await this.rendererStore.engine.loadResources();
    this.socketStore.socket = new Socket(false, "127.0.0.1", 30001);
    this.socketStore.socket.onConnect = () => {
      const authTicket: string | null = new URLSearchParams(
        window.location.search
      ).get("sso");
      if (authTicket === null) return;
      this.landingViewStore.visible = true;
      this.socketStore.socket?.send(new UniqueIDMessageComposer());
      this.socketStore.socket?.send(new SSOTicketMessageComposer(authTicket));
    };
    this.socketStore.socket.connect();
  },
});
</script>

<style lang="scss">
@import "@/assets/sass/style.scss";
</style>

<template>
  <loading-view v-if="loadingVisible" />
  <game-view v-show="!loadingVisible" />
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

export default defineComponent({
  name: "App",
  components: {
    LoadingView,
    GameView,
  },
  computed: {
    ...mapStores(useLandingViewStore),
    ...mapGetters("Loading", { loadingVisible: "isVisible" }),
    ...mapGetters("Socket", ["socket"]),
    ...mapGetters("Room/Renderer", ["renderer"]),
  },
  methods: {
    ...mapMutations("Socket", ["setSocket"]),
    ...mapMutations("Room/Renderer", ["updateRenderer"]),
  },
  async mounted(): Promise<void> {
    this.updateRenderer(
      new Scuti({
        canvas: document.getElementById("renderer") as HTMLElement,
        width: window.innerWidth,
        height: window.innerHeight,
        resources: "http://localhost:8081/",
      })
    );
    await this.renderer.loadResources();
    const tileMap =
      "x6543210000000000x\n" +
      "x0000000000000000x\n" +
      "x0000000000000000x\n" +
      "00000000000000000x\n" +
      "x0000000000000000x\n" +
      "x0000000000000000x\n" +
      "x0000000000000000x\n" +
      "x0000000000000000x\n" +
      "x0000000000000000x\n" +
      "x0000000000000000x\n";
    /*const room = new Room(this.renderer, {
      tileMap: tileMap,
      floorMaterial: new FloorMaterial(this.renderer, 110),
      wallMaterial: new WallMaterial(this.renderer, 1601),
    });*/
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

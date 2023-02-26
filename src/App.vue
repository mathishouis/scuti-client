<template>
  <loading-view v-if="loadingVisible" />
  <game-view v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import LoadingView from "@/views/LoadingView.vue";
import GameView from "@/views/GameView.vue";
import { Socket } from "./sockets/Socket";
import { SSOTicketMessageComposer } from "./sockets/messages/outgoing/handshake/SSOTicketMessageComposer";
import { UniqueIDMessageComposer } from "./sockets/messages/outgoing/handshake/UniqueIDMessageComposer";

export default defineComponent({
  name: "App",
  components: {
    LoadingView,
    GameView,
  },
  computed: {
    ...mapGetters("Loading", { loadingVisible: "isVisible" }),
    ...mapGetters("Socket", ["socket"]),
  },
  methods: {
    ...mapMutations("Socket", ["updateSocket"]),
  },
  mounted(): void {
    this.updateSocket(new Socket(false, "127.0.0.1", 30001));
    this.socket.onConnect = () => {
      const authTicket: string | null = new URLSearchParams(
        window.location.search
      ).get("sso");
      if (authTicket === null) return;
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

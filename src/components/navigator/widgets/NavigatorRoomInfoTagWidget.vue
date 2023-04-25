<template>
  <div class="navigator-room-info-tag-widget" @click="search">#{{ label }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useSocketStore } from "@/stores/Socket";
import { NewNavigatorSearchMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer";
import { useNavigatorStore } from "@/stores/Navigator";

export default defineComponent({
  name: "NavigatorRoomInfoTagWidget",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    search(): void {
      this.socketStore.socket?.send(
        new NewNavigatorSearchMessageComposer("hotel_view", "tag:" + this.label)
      );
      this.navigatorStore.searchCategory = "tag";
      this.navigatorStore.searchQuery = this.label;
      this.navigatorStore.searching = true;
    },
  },
  computed: {
    ...mapStores(useSocketStore, useNavigatorStore),
  },
});
</script>

<style lang="scss" scoped>
.navigator-room-info-tag-widget {
  color: #ffffff;
  font-family: "Ubuntu Light", sans-serif;
  font-size: 8pt;
  height: 19px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  background-color: #f1a700;
  width: auto;
  cursor: pointer;
}
</style>

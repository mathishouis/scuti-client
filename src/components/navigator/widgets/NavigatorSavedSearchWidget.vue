<template>
  <tool-tip :label="__locale('navigator.tooltip.open.saved.search')">
    <div class="navigator-saved-search-widget">
      <span @click="search" v-if="view === 'query'"
        >{{ __locale("navigator.searchcode.title.query") }} - {{ query }}</span
      >
      <span @click="search" v-else> {{ view }}</span>
      <div
        class="navigator-saved-search-widget__remove-button"
        @click="remove"
      ></div>
    </div>
  </tool-tip>
</template>

<script lang="ts">
import { NavigatorDeleteSavedSearchMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NavigatorDeleteSavedSearchMessageComposer";
import { NewNavigatorSearchMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer";
import store from "@/store";
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useNavigatorStore } from "@/stores/Navigator";

export default defineComponent({
  name: "NavigatorSavedSearchWidget",
  props: {
    id: {
      type: Number,
      required: true,
    },
    view: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
  },
  methods: {
    remove(): void {
      store.getters["Socket/socket"].send(
        new NavigatorDeleteSavedSearchMessageComposer(this.id)
      );
    },
    search(): void {
      this.navigatorStore.searching = true;
      this.navigatorStore.selectedTab = "hotel_view";
      store.getters["Socket/socket"].send(
        new NewNavigatorSearchMessageComposer(this.view, this.query)
      );
    },
  },
  computed: {
    ...mapStores(useNavigatorStore),
  },
});
</script>

<style lang="scss" scoped>
.navigator-saved-search-widget {
  height: 20px;
  width: calc(100% - 6px);
  color: #000000;
  font-family: "Ubuntu Light", sans-serif;
  font-size: 9.4pt;
  line-height: 10px;
  white-space: nowrap;
  overflow-y: visible;
  padding: 8px 0px 2px 6px;
  cursor: pointer;
  position: relative;

  &:hover &__remove-button {
    display: block;
  }

  &__remove-button {
    width: 16px;
    height: 16px;
    background-image: url(@images/navigator/buttons/saved_search_remove.png);
    position: absolute;
    right: 1px;
    top: 5px;
    display: none;

    &:hover {
      display: block;
      background-position: 0 -16px;
    }

    &:active {
      display: block;
      background-position: 0 -32px;
    }
  }
}
</style>

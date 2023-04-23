<template>
  <div class="navigator-tabs-widget">
    <tabs
      type="1"
      :tabs="getProcessedTabs"
      :selected-tab="tabs.indexOf(currentTab)"
      @change="updateTab"
      large
    />
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { NewNavigatorSearchMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer";

export default defineComponent({
  name: "NavigatorTabsWidget",
  methods: {
    ...mapMutations("Navigator", [
      "setSearchCategory",
      "setSearchQuery",
      "setSearching",
    ]),
    updateTab(tab: string): void {
      this.setSearching(false);
      this.setSearchCategory("all");
      store.commit(
        "Navigator/Tabs/setCurrentTab",
        store.getters["Navigator/Tabs/tabs"][tab]
      );
      store.getters["Socket/socket"].send(
        new NewNavigatorSearchMessageComposer(
          store.getters["Navigator/Tabs/currentTab"],
          ""
        )
      );
    },
  },
  computed: {
    ...mapGetters("Navigator/Tabs", ["tabs", "currentTab"]),
    getProcessedTabs(): any[] {
      let tabs: any[] = [];
      this.tabs.forEach((tab: string) => {
        tabs.push({
          // @ts-ignore
          label: this.__locale("navigator.toplevelview." + tab),
          // @ts-ignore
          tooltip: this.__locale("navigator.tooltip.select.tab"),
        });
      });
      return tabs;
    },
  },
});
</script>

<style lang="scss" scoped>
.navigator-tabs-widget {
  width: 379px;
}
</style>

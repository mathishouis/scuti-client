<template>
  <div class="navigator-tabs-widget">
    <tabs
      type="1"
      :tabs="getProcessedTabs"
      :selected-tab="navigatorStore.tabs.indexOf(navigatorStore.selectedTab)"
      @change="updateTab"
      large
    />
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
import { NewNavigatorSearchMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer";
import { mapStores } from "pinia";
import { useNavigatorStore } from "@/stores/Navigator";

export default defineComponent({
  name: "NavigatorTabsWidget",
  methods: {
    updateTab(tab: number): void {
      this.navigatorStore.searching = false;
      this.navigatorStore.searchCategory = "all";
      this.navigatorStore.selectedTab = this.navigatorStore.tabs[tab];
      store.getters["Socket/socket"].send(
        new NewNavigatorSearchMessageComposer(
          this.navigatorStore.selectedTab,
          ""
        )
      );
    },
  },
  computed: {
    ...mapStores(useNavigatorStore),
    getProcessedTabs(): any[] {
      let tabs: any[] = [];
      this.navigatorStore.tabs.forEach((tab: string) => {
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

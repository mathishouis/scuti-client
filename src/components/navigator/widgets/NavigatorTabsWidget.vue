<template>
  <div class="navigator-tabs-widget">
    <tabs
      type="1"
      :tabs="getProcessedTabs"
      :selected-tab="0"
      @change="updateTab"
      large
    />
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { NewNavigatorSearchMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer";

export default defineComponent({
  name: "NavigatorTabsWidget",
  methods: {
    updateTab(tab: string): void {
      console.log(store.getters["Navigator/Tabs/tabs"][tab]);
      store.commit(
        "Navigator/Tabs/updateCurrentTab",
        store.getters["Navigator/Tabs/tabs"][tab]
      );
      store.getters["Socket/socket"].send(
        new NewNavigatorSearchMessageComposer(
          store.getters["Navigator/Tabs/tabs"][tab]
        )
      );
    },
  },
  computed: {
    ...mapGetters("Navigator/Tabs", ["tabs"]),
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

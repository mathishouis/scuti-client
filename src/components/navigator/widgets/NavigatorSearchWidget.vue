<template>
  <div class="navigator-search-widget">
    <div class="navigator-search-widget__selector">
      <selection-list
        type="1"
        v-model="searchCategory"
        :items="[
          {
            label: __locale('navigator.filter.anything'),
            value: 'all',
          },
          {
            label: __locale('navigator.filter.room.name'),
            value: 'roomname',
          },
          {
            label: __locale('navigator.filter.owner'),
            value: 'owner',
          },
          {
            label: __locale('navigator.filter.tag'),
            value: 'tag',
          },
          {
            label: __locale('navigator.filter.group'),
            value: 'group',
          },
        ]"
        @change="updateCategory"
      />
    </div>
    <div class="navigator-search-widget__input">
      <text-field
        :placeholder="__locale('navigator.filter.input.placeholder')"
        v-model="query"
        @change="updateQuery"
        clear-button
        focus-button
        :focused="isSearching"
        @click="focus"
      />
    </div>
    <div
      class="navigator-search-widget__refresh-button"
      v-if="query.length > 0"
      @click="search"
    ></div>
  </div>
</template>

<script lang="ts">
import { NewNavigatorSearchMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer";
import store from "@/store";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "NavigatorSearchWidget",
  data: () => ({
    selected: "all",
    query: "",
  }),
  methods: {
    ...mapMutations("Navigator/Tabs", ["setCurrentTab"]),
    ...mapMutations("Navigator", [
      "setSearchCategory",
      "setSearchQuery",
      "setSearching",
    ]),
    updateCategory(category: string): void {
      this.setSearchCategory(category);
      this.search();
    },
    updateQuery(): void {
      this.setSearchQuery(this.query);
      this.search();
    },
    search(): void {
      this.setSearching(true);
      this.setCurrentTab("hotel_view");
      store.getters["Socket/socket"].send(
        new NewNavigatorSearchMessageComposer(
          store.getters["Navigator/Tabs/currentTab"],
          (this.searchCategory !== "all" ? this.searchCategory : "") +
            (this.searchCategory !== "all" ? ":" : "") +
            this.searchQuery
        )
      );
    },
    focus(): void {
      this.setSearching(true);
    },
  },
  computed: {
    ...mapGetters("Navigator", [
      "searchCategory",
      "searchQuery",
      "isSearching",
    ]),
  },
});
</script>

<style lang="scss" scoped>
.navigator-search-widget {
  width: 396px;
  height: 24px;
  position: absolute;
  right: 15px;
  margin-top: 9px;
  display: flex;
  gap: 13px;

  &__selector {
    width: 116px;
  }

  &__input {
    width: 235px;
  }

  &__refresh-button {
    width: 25px;
    height: 23px;
    background-image: url(@images/navigator/buttons/refresh.png);
    margin-left: -6px;
    cursor: pointer;

    &:hover {
      background-position: 0 -23px;
    }
    &:active {
      background-position: 0 -46px;
    }
  }
}
</style>

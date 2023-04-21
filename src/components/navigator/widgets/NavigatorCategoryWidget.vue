<template>
  <div class="navigator-category">
    <div class="navigator-category__header">
      <tool-tip
        :label="
          category.minimised
            ? __locale('navigator.tooltip.category.expand')
            : __locale('navigator.tooltip.category.collapse')
        "
      >
        <div
          class="navigator-category__minimise-button"
          :class="[
            minimised ? '' : 'navigator-category__minimise-button--active',
          ]"
          @click="toggleMinimised"
        ></div>
      </tool-tip>
      <div class="navigator-category__title">{{ title }}</div>
      <div class="navigator-category__button-group">
        <tool-tip
          :label="__locale('navigator.tooltip.add.saved.search')"
          v-if="currentTab !== 'official_view'"
        >
          <div
            class="navigator-category__saved-search-button"
            @click="save"
          ></div>
        </tool-tip>
        <tool-tip
          :label="__locale('navigator.tooltip.category.show.more')"
          v-if="category.id !== 'query' && currentTab !== 'official_view'"
        >
          <div
            class="navigator-category__more-results-button"
            @click="showMoreResults"
          ></div>
        </tool-tip>
        <tool-tip
          :label="
            category.view === 1
              ? __locale('navigator.tooltip.rows')
              : __locale('navigator.tooltip.tiles')
          "
        >
          <div
            class="navigator-category__view-mode-button"
            :class="[
              view === 1 ? 'navigator-category__view-mode-button--active' : '',
            ]"
            @click="toggleView"
          ></div>
        </tool-tip>
      </div>
    </div>
    <div
      class="navigator-category__room-list-thumbnail"
      v-if="category.view === 1 && !category.minimised"
    >
      <!--<navigator-layout-room-thumbnail-widget :id="room.id" :name="room.name" :owner-name="room.ownerName" :description="room.description" :trade="room.trade" :tags="room.tags" :user-count="room.userCount" :max-users="room.maxUsers" :skip-auth="room.skipAuth" v-for="room in category.rooms" :key="room.id"/>-->
      <slot name="thumbnail" />
    </div>
    <div
      class="navigator-category__room-list-line"
      v-else-if="!category.minimised"
    >
      <!--<navigator-layout-room-list-widget :id="room.id" :index="index" :name="room.name" :owner-name="room.ownerName" :description="room.description" :trade="room.trade" :tags="room.tags" :user-count="room.userCount" :max-users="room.maxUsers" :skip-auth="room.skipAuth" v-for="(room, index) in category.rooms" :key="room.id"/>-->
      <slot name="list" />
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent, PropType } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { Category } from "@/interfaces/Navigator.interface";
import { NavigatorSetSearchCodeViewModeMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NavigatorSetSearchCodeViewModeMessageComposer";
import { NewNavigatorSearchMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer";
import { NavigatorAddSavedSearchMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NavigatorAddSavedSearchMessageComposer";

export enum View {
  ROWS,
  TILES,
}

export default defineComponent({
  name: "NavigatorCategoryWidget",
  props: {
    id: String,
    title: String,
    minimised: {
      type: Boolean,
      default: true,
    },
    view: {
      type: Object as PropType<View>,
      default: View.ROWS,
    },
  },
  methods: {
    ...mapMutations("Navigator/Categories", ["minimise"]),
    ...mapMutations("Navigator", ["setSavedSearchesState"]),
    toggleMinimised(): void {
      store.commit("Navigator/Categories/toggleMinimised", this.id);
    },
    toggleView(): void {
      store.commit("Navigator/Categories/toggleView", this.id);
      store.getters["Socket/socket"].send(
        new NavigatorSetSearchCodeViewModeMessageComposer(
          this.category.id,
          this.category.view
        )
      );
    },
    showMoreResults(): void {
      store.getters["Socket/socket"].send(
        new NewNavigatorSearchMessageComposer(this.category.id, "")
      );
    },
    save(): void {
      let query = "";
      if (this.category.id === "query") query = this.searchQuery;
      store.getters["Socket/socket"].send(
        new NavigatorAddSavedSearchMessageComposer(this.category.id, query)
      );
      this.setSavedSearchesState(true);
    },
  },
  computed: {
    ...mapGetters("Navigator/Categories", ["get"]),
    ...mapGetters("Navigator/Tabs", ["currentTab"]),
    ...mapGetters("Navigator", ["searchQuery"]),
    category(): Category {
      return this.get(this.id);
    },
  },
});
</script>

<style lang="scss" scoped>
.navigator-category {
  background-color: #ffffff;
  width: 100%;

  &__header {
    width: 100%;
    height: 28px;
    display: flex;
    flex-direction: row;
  }

  &__minimise-button {
    width: 10px;
    height: 26px;
    margin-left: 6px;
    margin-right: 7px;
    background-image: url(@images/navigator/buttons/expand_minimise.png);
    cursor: pointer;

    &--active {
      background-position: -10px 0;
    }
  }

  &__title {
    color: #15597e;
    font-size: 10.8pt;
    font-family: "Ubuntu", sans-serif;
    padding-top: 4px;
    cursor: pointer;
  }

  &__button-group {
    padding: 5px 7px;
    margin-left: auto;
    display: flex;
    flex-direction: row-reverse;
    gap: 5px;
    align-items: center;
  }

  &__saved-search-button {
    width: 18px;
    height: 18px;
    background-image: url(@images/navigator/buttons/saved_search.png);
    cursor: pointer;
    position: relative;
  }

  &__more-results-button {
    width: 11px;
    height: 11px;
    background-image: url(@images/navigator/buttons/more_results.png);
    cursor: pointer;
    position: relative;

    &--active {
      background-position: -11px 0;
    }
  }

  &__view-mode-button {
    width: 11px;
    height: 11px;
    background-image: url(@images/navigator/buttons/view_mode.png);
    cursor: pointer;
    position: relative;

    &--active {
      background-position: -11px 0;
    }
  }

  &__room-list-thumbnail {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    row-gap: 5px;
    column-gap: 7px;
    padding-top: 1px;
    padding-left: 4px;
    padding-bottom: 4px;
  }

  &__room-list-line {
    width: 100%;
    padding-left: 4px;
    padding-right: 1px;
  }
}
</style>

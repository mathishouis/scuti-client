<template>
  <div class="navigator-category">
    <div class="navigator-category__header">
      <tool-tip label="navigator.tooltip.category.expand - collapse">
        <div
          class="navigator-category__minimise-button"
          :class="[
            minimised ? '' : 'navigator-category__minimise-button--active',
          ]"
        ></div>
      </tool-tip>
      <div class="navigator-category__title">{{ title }}</div>
      <div class="navigator-category__button-group">
        <tool-tip label="navigator.tooltip.add.saved.search">
          <div class="navigator-category__saved-search-button"></div>
        </tool-tip>
        <tool-tip label="navigator.tooltip.category.show.more">
          <div class="navigator-category__more-results-button"></div>
        </tool-tip>
        <tool-tip label="navigator.tooltip.rows - tiles">
          <div
            class="navigator-category__view-mode-button"
            :class="[
              view === 0 ? 'navigator-category__view-mode-button--active' : '',
            ]"
          ></div>
        </tool-tip>
      </div>
    </div>
    <div class="navigator-category__room-list-thumbnail" v-if="false">
      <!--<navigator-layout-room-thumbnail-widget :id="room.id" :name="room.name" :owner-name="room.ownerName" :description="room.description" :trade="room.trade" :tags="room.tags" :user-count="room.userCount" :max-users="room.maxUsers" :skip-auth="room.skipAuth" v-for="room in category.rooms" :key="room.id"/>-->
    </div>
    <div class="navigator-category__room-list-line">
      <!--<navigator-layout-room-list-widget :id="room.id" :index="index" :name="room.name" :owner-name="room.ownerName" :description="room.description" :trade="room.trade" :tags="room.tags" :user-count="room.userCount" :max-users="room.maxUsers" :skip-auth="room.skipAuth" v-for="(room, index) in category.rooms" :key="room.id"/>-->
      <navigator-room-list-layout-widget
        name="Réception"
        :user-count="99"
        :max-users="100"
        :state="1"
      />
      <navigator-room-list-layout-widget
        name="HC Lounge"
        :user-count="59"
        :max-users="100"
        :state="2"
      />
      <navigator-room-list-layout-widget
        name="Pavillon des Jeux"
        :user-count="48"
        :max-users="100"
        :state="3"
      />
      <navigator-room-list-layout-widget
        name="Club NX"
        :user-count="24"
        :max-users="100"
        :state="0"
      />
      <navigator-room-list-layout-widget
        name="Big Pic-Nic"
        :user-count="21"
        :max-users="100"
        :state="0"
      />
      <navigator-room-list-layout-widget
        name="Théâtre"
        :user-count="16"
        :max-users="100"
        :state="1"
      />
      <navigator-room-list-layout-widget
        name="Coffee House"
        :user-count="1"
        :max-users="100"
        :state="3"
      />
      <navigator-room-list-layout-widget
        name="Hall of Habbo"
        :user-count="0"
        :max-users="100"
        :state="0"
      />
      <navigator-room-list-layout-widget
        name="Parc Infobus"
        :user-count="0"
        :max-users="100"
        :state="2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import NavigatorRoomListLayoutWidget from "@/components/navigator/widgets/NavigatorRoomListLayoutWidget.vue";

export enum View {
  ROWS,
  TILES,
}

export default defineComponent({
  name: "NavigatorCategoryWidget",
  components: {
    NavigatorRoomListLayoutWidget,
  },
  props: {
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

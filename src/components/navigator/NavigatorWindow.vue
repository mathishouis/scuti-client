<template>
  <window-frame
    type="1"
    color="#408caf"
    :width="savedSearchesToggleState ? '578px' : '425px'"
    :max-width="savedSearchesToggleState ? '578px' : '425px'"
    height="535px"
    max-height="635px"
    class="navigator-window"
  >
    <div class="navigator-window__top">
      <tool-tip label="navigator.tooltip.left.show.hide">
        <div
          class="navigator-window__saved-search-button"
          @click="toggleSavedSearches"
        ></div>
      </tool-tip>
      <div
        class="navigator-window__tabs"
        :style="{ left: savedSearchesToggleState ? '117px' : '37px' }"
      >
        <navigator-tabs-widget />
      </div>
    </div>
    <navigator-search-widget />
    <navigator-actions-widget />
  </window-frame>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import NavigatorTabsWidget from "@/components/navigator/widgets/NavigatorTabsWidget.vue";
import NavigatorSearchWidget from "@/components/navigator/widgets/NavigatorSearchWidget.vue";
import NavigatorActionsWidget from "@/components/navigator/widgets/NavigatorActionsWidget.vue";

export default defineComponent({
  name: "NavigatorWindow",
  components: {
    NavigatorActionsWidget,
    NavigatorTabsWidget,
    NavigatorSearchWidget,
  },
  methods: {
    ...mapMutations("Navigator", ["toggleSavedSearches"]),
  },
  computed: {
    ...mapGetters("Navigator", ["savedSearchesToggleState"]),
  },
});
</script>

<style lang="scss" scoped>
.navigator-window {
  &__top {
    height: 34px;
    width: calc(100% - 2px);
    margin-left: 1px;
    border-bottom: 1px solid #000000;
    padding-top: 4px;
    margin-top: -2px;
    background-color: #ffffff;
    position: relative;
  }

  &__saved-search-button {
    width: 18px;
    height: 18px;
    background-image: url(@images/navigator/buttons/saved_search.png);
    left: 16px;
    top: 9px;
    position: absolute;
    cursor: pointer;
  }

  &__tabs {
    bottom: -1px;
    position: absolute;
    width: 379px;
  }
}
</style>

<template>
  <div class="navigator-saved-searches-widget">
    <div class="navigator-saved-searches-widget__header">
      <div class="navigator-saved-searches-widget__title">
        {{ __locale("navigator.quick.links.title") }}
      </div>
    </div>
    <navigator-saved-search-widget
      :id="search.id"
      :view="search.view"
      :query="search.query"
      v-for="search in navigatorStore.savedSearches"
      :key="search.id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigatorSavedSearchWidget from "@/components/navigator/widgets/NavigatorSavedSearchWidget.vue";
import { mapStores } from "pinia";
import { useNavigatorStore } from "@/stores/Navigator";

export default defineComponent({
  name: "NavigatorSavedSearchesWidget",
  components: {
    NavigatorSavedSearchWidget,
  },
  computed: {
    ...mapStores(useNavigatorStore),
  },
});
</script>

<style lang="scss" scoped>
.navigator-saved-searches-widget {
  width: 141px;
  height: 405px;
  background-color: #ffffff;
  position: absolute;
  left: 9px;
  top: 40px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  &__header {
    width: 100%;
    height: 21px;
    background-image: url(@images/navigator/saved_searches_header.png);
    position: relative;
  }

  &__title {
    font-family: "Ubuntu Bold", sans-serif;
    color: #ffffff;
    font-size: 9pt;
    white-space: nowrap;
    left: 22px;
    position: absolute;
    max-width: calc(100% - 27px);
    overflow: hidden;
    top: 2px;
  }
}
</style>

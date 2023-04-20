<template>
  <scroll-box width="405px" height="295px" class="navigator-results-widget">
    <div class="navigator-results-widget__content">
      <navigator-category-widget title="Fête" :minimised="false" :view="0" />
      <navigator-category-widget title="Jeux" :minimised="false" :view="1" />
      <navigator-category-widget
        title="Évènements"
        :minimised="true"
        :view="0"
      />
      <navigator-category-widget
        title="Tchat & Discussions"
        :minimised="true"
        :view="1"
      />
    </div>
    <div v-if="false">
      cc1<br />cc2<br />
      cc4<br />cc3<br />
      cc5<br />cc6<br />
      czadc<br />cc3<br />
      cezfc<br />cezfc<br />
      chgnc<br />ccyt<br />
      cwxcc<br />l:l=cc<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
    </div>
  </scroll-box>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigatorCategoryWidget from "@/components/navigator/widgets/NavigatorCategoryWidget.vue";

export default defineComponent({
  name: "NavigatorResultsWidget",
  components: {
    NavigatorCategoryWidget,
  },
});
</script>

<style lang="scss" scoped>
.navigator-results-widget {
  position: absolute !important;
  right: 7px;
  top: 75px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>

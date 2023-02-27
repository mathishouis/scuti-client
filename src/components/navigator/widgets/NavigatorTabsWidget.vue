<template>
  <div class="navigator-tabs-widget">
    <tabs
      type="1"
      :tabs="[
        {
          label: 'Public',
          tooltip: 'Une vue des différents apparts de Habbo Hôtel',
        },
        {
          label: 'Tous les apparts',
          tooltip: 'Une vue des différents apparts de Habbo Hôtel',
        },
        {
          label: 'Catégories',
          tooltip: 'Une vue des différents apparts de Habbo Hôtel',
        },
        {
          label: 'Mon monde',
          tooltip: 'Une vue des différents apparts de Habbo Hôtel',
        },
      ]"
      :selected-tab="0"
      large
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigatorTabsWidget",
});
</script>

<style lang="scss" scoped>
.navigator-tabs-widget {
  width: 379px;
}
</style>

<template>
  <div class="navigator-search-widget">
    <div class="navigator-search-widget__selector">
      <selection-list
        type="1"
        v-model="selected"
        :items="[
          {
            label: 'Tout',
            value: 'all',
          },
          {
            label: 'Nom d\'appart',
            value: 'all1',
          },
          {
            label: 'Propriétaire',
            value: 'all2',
          },
          {
            label: 'Tag',
            value: 'all3',
          },
          {
            label: 'Groupe',
            value: 'all4',
          },
        ]"
      />
    </div>
    <div class="navigator-search-widget__input">
      <text-field
        placeholder="Filtrer les apparts par..."
        clear-button
        focus-button
      />
    </div>
    <div class="navigator-search-widget__refresh-button"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigatorSearchWidget",
  data: () => ({
    selected: "all",
  }),
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

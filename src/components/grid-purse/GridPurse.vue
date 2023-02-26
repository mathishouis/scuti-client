<template>
  <div class="grid-purse">
    <currency-widget />
    <seasonal-widget />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrencyWidget from "@/components/grid-purse/widgets/CurrencyWidget.vue";
import SeasonalWidget from "@/components/grid-purse/widgets/SeasonalWidget.vue";

export default defineComponent({
  name: "GridPurse",
  components: {
    CurrencyWidget,
    SeasonalWidget,
  },
});
</script>

<style lang="scss" scoped>
.grid-purse {
  width: 192px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
</style>

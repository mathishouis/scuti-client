<template>
  <border-card class="seasonal-widget" type="5" color="#686661" blend="0.63">
    <border-card class="seasonal-widget__icon" type="4" color="#ba7cc2">
      <div class="seasonal-widget__icon-image"></div>
    </border-card>
    <div class="seasonal-widget__name">GOTW Points</div>
    <div class="seasonal-widget__amount seasonal-widget__amount--underlined">
      Info
    </div>
  </border-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BorderCard from "@/components/common/BorderCard.vue";

export default defineComponent({
  name: "SeasonalWidget",
  components: {
    BorderCard,
  },
});
</script>

<style lang="scss" scoped>
.seasonal-widget {
  height: 29px;
  width: 100%;
  position: relative;
  cursor: pointer;

  &__icon {
    position: absolute;
    width: 29px;
    height: 29px;
    right: 0;
    top: 0;

    &-image {
      position: absolute;
      width: 29px;
      height: 29px;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(@images/purse-grid/icons/gotw_point.png);
      filter: drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.4));
    }
  }

  &__name {
    font-size: 9pt;
    font-family: "Ubuntu Bold", sans-serif;
    color: #ba7cc2;
    position: absolute;
    left: 8px;
    top: 6px;
  }

  &__amount {
    font-size: 9pt;
    font-family: "Ubuntu Bold", sans-serif;
    color: #ffffff;
    position: absolute;
    right: 45px;
    top: 6px;

    &--underlined {
      text-decoration: underline;
    }
  }
}
</style>

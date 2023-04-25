<template>
  <div class="bubble-card" :class="'bubble-card--' + type">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BubbleCard",
  props: {
    type: String,
    text: String,
  },
});
</script>

<style lang="scss" scoped>
.bubble-card {
  &--1 {
    border-image: url(@images/bubble-cards/1.png) 6 6 6 6 fill;
    border-top: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid transparent;
    height: 23px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 7pt;
    font-family: "Volter", sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #000000;
    width: auto;
    line-height: 11px;
    position: relative;
    white-space: nowrap;

    &:after {
      content: "";
      position: absolute;
      width: 11px;
      height: 7px;
      background-image: url(@images/bubble-cards/1_arrow.png);
      bottom: -5px;
      left: 50%;
      transform: translate(-50%, 100%);
    }
  }
}
</style>

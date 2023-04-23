<template>
  <div class="button">
    <div :style="{ opacity: blend }">
      <div
        class="button__background"
        :class="'button__background--' + type"
      ></div>
      <div class="button__color" :style="{ backgroundColor: color }"></div>
    </div>
    <div class="button__content" :class="'button__content--' + type">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrimaryButton",
  props: {
    type: Number,
    color: String,
    blend: String,
  },
});
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  cursor: pointer;
  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;

    &--1 {
      border-image: url(@images/buttons/1.png) 4 4 4 4 fill;
      border-top: 4px solid transparent;
      border-left: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-right: 4px solid transparent;
    }

    &--2 {
      border-image: url(@images/buttons/2.png) 14 14 14 14 fill;
      border-top: 14px solid transparent;
      border-left: 14px solid transparent;
      border-bottom: 14px solid transparent;
      border-right: 14px solid transparent;
      height: 29px;
    }
  }

  &:hover &__background {
    &--1 {
      border-image: url(@images/buttons/1_hover.png) 4 4 4 4 fill !important;
    }

    &--2 {
      border-image: url(@images/buttons/2_hover.png) 14 14 14 14 fill !important;
    }
  }

  &:active &__background {
    &--1 {
      border-image: url(@images/buttons/1_hover.png) 4 4 4 4 fill !important;
      filter: brightness(60%);
    }

    &--2 {
      border-image: url(@images/buttons/2_active.png) 14 14 14 14 fill !important;
    }
  }

  &__content {
    z-index: 1;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &--2 {
      font-size: 9.5pt;
      font-family: "Ubuntu Bold", sans-serif;
      color: #000000;
      line-height: 29px;
    }
  }

  &__color {
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    mix-blend-mode: multiply;
    border-radius: 4px;
  }
}
</style>

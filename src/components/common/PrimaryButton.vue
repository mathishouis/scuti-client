<template>
  <div class="button">
    <div :style="{ opacity: blend }">
      <div
        class="button__background"
        :class="'button__background--' + type"
      ></div>
      <div class="button__color" :style="{ backgroundColor: color }"></div>
    </div>
    <div class="button__content">
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
  }

  &:hover &__background {
    &--1 {
      border-image: url(@images/buttons/1_hover.png) 4 4 4 4 fill !important;
    }
  }

  &:active &__background {
    &--1 {
      border-image: url(@images/buttons/1_hover.png) 4 4 4 4 fill !important;
      filter: brightness(60%);
    }
  }

  &__content {
    z-index: 1;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

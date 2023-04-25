<template>
  <div class="border-card">
    <div :style="{ opacity: blend }">
      <div
        class="border-card__background"
        :class="'border-card__background--' + type"
      ></div>
      <div class="border-card__color" :style="{ backgroundColor: color }"></div>
    </div>
    <div class="border-card__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BorderCard",
  props: {
    type: String,
    color: String,
    blend: String,
  },
});
</script>

<style lang="scss" scoped>
.border-card {
  position: relative;
  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;

    &--1 {
      border-image: url(@images/borders/1.png) 6 6 6 6 fill;
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }

    &--2 {
      border-image: url(@images/borders/2.png) 6 6 6 6 fill;
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }

    &--3 {
      border-image: url(@images/borders/3.png) 6 6 6 6 fill;
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }

    &--4 {
      border-image: url(@images/borders/4.png) 6 6 7 6 fill;
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 6px solid transparent;
    }

    &--5 {
      border-image: url(@images/borders/5.png) 6 6 7 6 fill;
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 6px solid transparent;
    }

    &--6 {
      border-image: url(@images/borders/6.png) 6 6 8 6 fill;
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 6px solid transparent;
    }

    &--7 {
      border-image: url(@images/borders/7.png) 8 8 8 8 fill;
      border-top: 8px solid transparent;
      border-left: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid transparent;

      &:before {
        content: "";
        position: absolute;
        width: 11px;
        height: 18px;
        background-image: url(@images/borders/7_arrow.png);
        left: -16px;
        transform: translateY(-50%);
        top: 50%;
      }
    }

    &--8 {
      border-image: url(@images/borders/8.png) 6 6 6 6 fill;
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }

    &--9 {
      border-image: url(@images/borders/9.png) 6 6 6 6 fill;
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }

  &__content {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: relative;
  }

  &__color {
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    mix-blend-mode: multiply;
    border-radius: 7px;
  }
}
</style>

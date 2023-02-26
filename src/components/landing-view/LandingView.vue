<template>
  <div class="landing-view">
    <div class="landing-view__drape"></div>
    <div class="landing-view__left"></div>
    <div class="landing-view__right"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingView",
});
</script>

<style lang="scss" scoped>
.landing-view {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: #aae0f0;
  background-image: url(https://images.habbo.com/c_images/reception/background_gradient_Feb23.png);

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: #2f2d2b;
    bottom: 0;
  }

  &__drape {
    width: 145px;
    height: 200px;
    position: fixed;
    top: 0;
    left: 100px;
    background-image: url(https://media.discordapp.net/attachments/979465354009010236/1079054333934571561/background_drape.png);
  }

  &__left {
    width: 1006px;
    height: 998px;
    position: fixed;
    bottom: 47px;
    left: 0px;
    background-repeat: no-repeat;
    background-position: bottom left;
    pointer-events: none;
    background-image: url(https://images.habbo.com/c_images/reception/background_left_Feb23.png);
  }

  &__right {
    width: 526px;
    height: 451px;
    position: fixed;
    bottom: 47px;
    right: 0px;
    background-repeat: no-repeat;
    background-position: top right;
    background-image: url(https://images.habbo.com/c_images/reception/background_right.png);
  }
}
</style>

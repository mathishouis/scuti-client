<template>
  <div
    class="navigator-user-count-widget"
    :class="[
      userCount === 0
        ? ''
        : userCount > maxUser / 2
        ? userCount > maxUser - 2
          ? 'navigator-user-count-widget--red'
          : 'navigator-user-count-widget--orange'
        : 'navigator-user-count-widget--green',
    ]"
  >
    <div
      class="navigator-user-count-widget__icon"
      :style="{ left: userCount >= 10 ? '6px' : '' }"
    ></div>
    <div class="navigator-user-count-widget__counter">
      {{ userCount }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigatorUserCountWidget",
  props: {
    userCount: Number,
    maxUser: Number,
  },
});
</script>

<style lang="scss" scoped>
.navigator-user-count-widget {
  width: 40px;
  height: 18px;
  border-radius: 4px;
  background-color: #cac9c0;
  position: relative;

  &--green {
    background-color: #62b061;
  }

  &--orange {
    background-color: #ffb01a;
  }

  &--red {
    background-color: #ae232d;
  }

  &__icon {
    width: 7px;
    height: 8px;
    top: 5px;
    left: 9px;
    position: absolute;
    background-image: url(@images/navigator/icons/user_count.png);
  }

  &__counter {
    position: absolute;
    transform: translateX(50%);
    right: 15px;
    color: white;
    font-family: "Ubuntu Bold", sans-serif;
    font-size: 9.2pt;
    text-align: center;
  }
}
</style>

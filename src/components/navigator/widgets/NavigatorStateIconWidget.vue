<template>
  <div
    class="navigator-state-icon-widget"
    :class="[
      state === 1
        ? 'navigator-state-icon-widget--locked'
        : state === 2
        ? 'navigator-state-icon-widget--password'
        : state === 3
        ? 'navigator-state-icon-widget--invisible'
        : '',
    ]"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigatorStateIconWidget",
  props: {
    state: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="scss" scoped>
.navigator-state-icon-widget {
  height: 16px;
  width: 13px;
  cursor: pointer;
  background-image: url(@images/navigator/icons/room_locked.png);
  display: none;

  &--locked {
    background-position: 0 0;
    display: block;
  }

  &--password {
    background-position: 0 -32px;
    display: block;
  }

  &--invisible {
    background-position: 0 -16px;
    display: block;
  }
}
</style>

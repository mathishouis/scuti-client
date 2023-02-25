<template>
  <div class="tool-bar-icon" :class="'tool-bar-icon--' + icon">
    <tool-tip :label="'toolbar.tooltip.' + icon">
      <div class="tool-bar-icon__icon"></div>
    </tool-tip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToolBarIcon",
  props: {
    icon: String,
  },
});
</script>

<style lang="scss" scoped>
.tool-bar-icon {
  height: 41px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &__icon {
    -webkit-filter: drop-shadow(1px 1px 0px #141312);
    filter: drop-shadow(1px 1px 0px #141312);
  }

  &:hover &__icon {
    margin: -1px 1px 1px -1px;
    -webkit-filter: drop-shadow(2px 2px 0px #141312);
    filter: drop-shadow(2px 2px 0px #141312);
  }

  &:active &__icon {
    margin: 0;
    opacity: 0.7;
    -webkit-filter: drop-shadow(0px 0px 0px #141312);
    filter: drop-shadow(0px 0px 0px #141312);
  }

  &--hotel-view {
    & .tool-bar-icon__icon {
      margin-top: -1px;
      width: 28px;
      height: 28px;
      background-image: url(@images/toolbar/icons/hotel_view.png);
    }
  }

  &--home-room {
    & .tool-bar-icon__icon {
      margin-top: 3px;
      width: 32px;
      height: 30px;
      background-image: url(@images/toolbar/icons/home_room.png);
    }
  }

  &--navigator {
    & .tool-bar-icon__icon {
      margin-top: 1px;
      width: 44px;
      height: 30px;
      background-image: url(@images/toolbar/icons/navigator.png);
    }
  }

  &--shop {
    & .tool-bar-icon__icon {
      margin-top: 0px;
      width: 37px;
      height: 37px;
      background-image: url(@images/toolbar/icons/shop.png);
    }
  }

  &--inventory {
    & .tool-bar-icon__icon {
      margin-top: 1px;
      width: 44px;
      height: 41px;
      background-image: url(@images/toolbar/icons/inventory.png);
    }
  }

  &--quest {
    & .tool-bar-icon__icon {
      margin-top: -1px;
      width: 32px;
      height: 35px;
      background-image: url(@images/toolbar/icons/quest.png);
    }
  }

  &--camera {
    & .tool-bar-icon__icon {
      margin-top: 3px;
      width: 38px;
      height: 45px;
      background-image: url(@images/toolbar/icons/camera.png);
    }
  }
}
</style>

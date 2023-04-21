<template>
  <tool-tip :label="__locale('navigator.tooltip.go.to.room')">
    <border-card
      class="navigator-room-thumbnail-layout-widget"
      type="6"
      color="#ffffff"
    >
      <navigator-room-thumbnail-widget
        width="108px"
        height="109px"
        class="navigator-room-thumbnail-layout-widget__thumbnail"
        :thumbnail="thumbnail"
      />
      <div class="navigator-room-thumbnail-layout-widget__title">
        {{ name }}
      </div>
      <navigator-user-count-widget
        class="navigator-room-thumbnail-layout-widget__user-count"
        :user-count="userCount"
        :max-user="maxUsers"
      />
      <navigator-state-icon-widget
        class="navigator-room-thumbnail-layout-widget__state-icon"
        :state="state"
      />
      <div class="navigator-room-thumbnail-layout-widget__info-button"></div>
    </border-card>
  </tool-tip>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigatorUserCountWidget from "@/components/navigator/widgets/NavigatorUserCountWidget.vue";
import NavigatorStateIconWidget from "@/components/navigator/widgets/NavigatorStateIconWidget.vue";
import NavigatorRoomThumbnailWidget from "@/components/navigator/widgets/NavigatorRoomThumbnailWidget.vue";

export default defineComponent({
  name: "NavigatorRoomThumbnailLayoutWidget",
  components: {
    NavigatorUserCountWidget,
    NavigatorStateIconWidget,
    NavigatorRoomThumbnailWidget,
  },
  props: {
    name: String,
    thumbnail: String,
    userCount: Number,
    maxUsers: Number,
    state: Number,
  },
});
</script>

<style lang="scss" scoped>
.navigator-room-thumbnail-layout-widget {
  width: 122px;
  height: 146px;
  position: relative;
  cursor: pointer;

  &__info-button {
    height: 18px;
    width: 18px;
    background-image: url(@images/navigator/icons/info.png);
    position: absolute;
    right: 6px;
    top: 120px;
    cursor: pointer;
  }

  &__title {
    position: absolute;
    top: 119px;
    left: 9px;
    font-size: 8pt;
    color: #000000;
    font-family: "Ubuntu Light", sans-serif;
    line-height: 12px;
    max-width: calc(100% - 24px);
    max-height: 24px;
    overflow: hidden;
  }

  &__user-count {
    left: 40px;
    top: 93px;
    position: absolute;
  }

  &__state-icon {
    position: absolute;
    right: 16px;
    top: 95px;
  }

  &__thumbnail {
    position: absolute;
    top: 6px;
    left: 7px;
  }
}
</style>

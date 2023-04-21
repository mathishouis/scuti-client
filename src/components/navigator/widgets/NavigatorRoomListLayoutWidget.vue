<template>
  <div class="navigator-room-list-layout-widget" @click="test">
    <navigator-user-count-widget
      class="navigator-room-list-layout-widget__user-count"
      :user-count="userCount"
      :max-user="maxUsers"
    />
    <div class="navigator-room-list-layout-widget__info-button"></div>
    <div class="navigator-room-list-layout-widget__group-icon"></div>
    <navigator-state-icon-widget
      class="navigator-room-list-layout-widget__state-icon"
      :state="state"
    ></navigator-state-icon-widget>
    <div class="navigator-room-list-layout-widget__title">
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigatorUserCountWidget from "@/components/navigator/widgets/NavigatorUserCountWidget.vue";
import NavigatorStateIconWidget from "@/components/navigator/widgets/NavigatorStateIconWidget.vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "NavigatorRoomListLayoutWidget",
  components: {
    NavigatorUserCountWidget,
    NavigatorStateIconWidget,
  },
  props: {
    name: String,
    userCount: Number,
    maxUsers: Number,
    state: Number,
  },
  methods: {
    ...mapMutations("LandingView", ["setVisible"]),
    ...mapMutations("Navigator", { setNavigatorVisible: "setVisible" }),
    test(): void {
      this.setVisible(false);
      this.setNavigatorVisible(false);
    },
  },
});
</script>

<style lang="scss" scoped>
.navigator-room-list-layout-widget {
  width: 100%;
  padding-top: 1px;
  padding-bottom: 1px;
  height: 20px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  background-color: #ffffff;

  &:nth-child(odd) {
    background: #d5edff;
  }

  &__info-button {
    height: 18px;
    width: 18px;
    background-image: url(@images/navigator/icons/info.png);
    position: absolute;
    right: 6px;
    cursor: pointer;
  }

  &__group-icon {
    height: 11px;
    width: 13px;
    background-image: url(@images/navigator/icons/room_group.png);
    position: absolute;
    right: 28px;
    top: 4px;
    cursor: pointer;
  }

  &__user-count {
    position: absolute;
    left: 0;
  }

  &__title {
    position: absolute;
    left: 47px;
    color: #000000;
    font-size: 9.4pt;
    font-family: "Ubuntu Light", sans-serif;
    top: 1px;
    line-height: 16px;
  }

  &__state-icon {
    position: absolute;
    right: 45px;
    top: 2px;
  }
}
</style>

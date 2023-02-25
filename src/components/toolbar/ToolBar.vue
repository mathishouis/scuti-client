<template>
  <div class="tool-bar">
    <div class="tool-bar__bottom-bar-left">
      <border-card
        type="2"
        class="tool-bar__arrow-left"
        :class="!leftToggleState ? 'tool-bar__arrow-left--active' : ''"
        @click="toggleLeft"
      />
      <div class="tool-bar__icons">
        <tool-bar-icon icon="hotel-view" v-if="!leftToggleState" />
        <tool-bar-icon icon="home-room" v-if="false" />
        <tool-bar-icon icon="navigator" v-if="!leftToggleState" />
        <tool-bar-icon icon="quest" v-if="!leftToggleState" />
        <tool-bar-icon icon="shop" />
        <tool-bar-icon icon="inventory" />
        <tool-bar-icon icon="camera" />
      </div>
      <div class="tool-bar__separator"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "ToolBar",
  methods: {
    ...mapMutations("ToolBar", ["toggleLeft"]),
  },
  computed: {
    ...mapGetters("ToolBar", { leftToggleState: "getLeftToggleState" }),
  },
});
</script>

<style lang="scss" scoped>
.tool-bar {
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: rgba(47, 47, 44, 0.58);
  border-bottom: 1px solid rgba(112, 112, 105, 0.44);
  border-top: 2px solid rgba(112, 112, 105, 0.44);
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    top: -3px;
    background-color: rgba(0, 0, 0, 0.63);
  }

  &__bottom-bar-left {
    height: 100%;
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
  }

  &__arrow-left {
    width: 21px;
    height: 43px;
    margin-left: -6px;
    position: relative;
    cursor: pointer;

    &:before {
      background-image: url(@images/toolbar/arrow_left.png);
      content: "";
      position: absolute;
      width: 6px;
      height: 8px;
      left: calc(50% + 4px);
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &--active:before {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }

  &__icons {
    height: 41px;
    display: flex;
    gap: 8px;
    margin-left: 4.5px;
  }

  &__separator {
    height: 40px;
    width: 1px;
    background-color: #454442;
    margin-left: 12px;
    margin-right: 12px;
  }
}
</style>

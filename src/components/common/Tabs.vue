<template>
  <div class="tabs" :class="['tabs--' + type, large ? 'tabs--large' : '']">
    <div
      class="tabs__tab"
      :class="selectedTab === index ? 'tabs__tab--active' : ''"
      v-for="(tab, index) in tabs"
      :key="tab"
      @click="select(index)"
    >
      <tool-tip :label="tab.tooltip">
        {{ tab.label }}
      </tool-tip>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tabs",
  props: {
    type: String,
    tabs: Object,
    selectedTab: Number,
    large: Boolean,
  },
  methods: {
    select(index: number): void {
      this.$emit("update:selectedTab", index);
    },
  },
});
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  height: 30px;
  border-bottom: 1px solid #000000;
  position: relative;
  display: flex;
  flex-direction: row;

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: -2px;
    background-color: #ffffff;
    left: 0;
  }

  &--large &__tab {
    width: 100%;
    text-wrap: none;
    padding: 13px 11px 9px !important;
    white-space: nowrap;
  }

  &--1 &__tab {
    font-weight: 300;
    color: #050505;
    position: relative;
    cursor: pointer;
    border-image: url(@images/tabs/1.png) 7 7 7 7 fill;
    border-image-width: 7px 7px 7px 7px;
    border-image-repeat: repeat repeat;
    margin-bottom: -2px;
    font-family: "Ubuntu", sans-serif;
    font-size: 9.5pt;
    padding: 11px 13px 12px;
    line-height: 9px;
    text-align: center;
    white-space: nowrap;

    &:hover {
      border-image: url(@images/tabs/1_hover.png) 7 7 7 7 fill;
      border-image-width: 7px 7px 7px 7px;
      border-image-repeat: repeat repeat;
    }

    &--active {
      border-image: url(@images/tabs/1_active.png) 7 7 7 7 fill !important;
      border-image-width: 7px 7px 7px 7px !important;
      border-image-repeat: repeat repeat !important;
    }
  }
}
</style>

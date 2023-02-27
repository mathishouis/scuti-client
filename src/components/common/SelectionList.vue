<template>
  <div
    class="selection-list"
    :class="[
      toggled ? 'selection-list--toggled' : '',
      'selection-list--' + type,
    ]"
  >
    <div class="selection-list__arrow" v-if="!toggled"></div>
    <div
      class="selection-list__selected-item"
      v-if="!toggled && selectedItem"
      @click.self="toggle"
    >
      {{ selectedItem.label }}
    </div>
    <div class="selection-list__item-list" v-if="toggled">
      <div
        class="selection-list__item"
        :class="[
          selectedItem.value === item.value
            ? 'selection-list__item--active'
            : '',
        ]"
        v-for="item in items"
        v-bind:key="item.value"
        @click="select(item.value)"
      >
        {{ item.label }} {{ toggled }} {{ isToggle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface ListItem {
  label: string;
  value: string;
  selected: boolean;
}

export default defineComponent({
  name: "SelectionList",
  props: {
    type: Number,
    items: Array as PropType<ListItem[]>,
    modelValue: String,
  },
  data: () => ({
    toggled: false,
  }),
  methods: {
    toggle() {
      this.toggled = !this.toggled;
    },
    close() {
      this.toggled = false;
    },
    select(value: string): void {
      console.log("grimkuflop");
      this.close();
      this.$emit("update:modelValue", value);
    },
  },
  computed: {
    selectedItem(): ListItem | undefined {
      if (this.items === undefined) return;
      return this.items.find(
        (item: ListItem) => item.value === this.modelValue
      );
    },
    isToggle(): boolean {
      return this.toggled;
    },
  },
});
</script>

<style lang="scss" scoped>
.selection-list {
  border-image: url(@images/selection-list/1.png) 2 2 2 2 fill;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-right: 2px solid transparent;
  position: relative;
  cursor: pointer;
  z-index: 1;
  height: 24px;

  &--1 &--toggled {
    height: auto;
  }

  &--1 &__arrow {
    width: 14px;
    height: 16px;
    background-image: url(@images/selection-list/arrow_1.png);
    top: 0px;
    right: 5px;
    position: absolute;
  }

  &--1 &__selected-item {
    font-family: "Volter", sans-serif;
    font-size: 9px;
    color: #000000;
    position: absolute;
    left: 4px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 3px;
    padding-bottom: 2px;
    width: calc(100% - 22px);
    white-space: nowrap;
  }

  &--1 &__item-list {
    width: calc(100% + 4px);
    padding-left: 4px;
    padding-right: 4px;
    display: flex;
    flex-direction: column;
    left: -2px;
    background-color: green;
    position: absolute;
    padding-top: 2px;
    padding-bottom: 2px;
    border-image: url(@images/selection-list/1.png) 2 2 3 2 fill;
    border-left: 2px solid transparent;
    border-bottom: 3px solid transparent;
    border-right: 2px solid transparent;
  }

  &--1 &__item {
    font-family: "Volter", sans-serif;
    font-size: 9px;
    color: #000000;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 1px;
    padding-bottom: 2px;
    width: 100%;

    &:hover {
      background-color: #d9d9d9;
    }

    &--active {
      background-color: #f2f2f2;
    }
  }
}
</style>

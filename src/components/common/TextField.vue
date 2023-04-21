<template>
  <div class="text-field">
    <div
      class="text-field__focus-button"
      @click="focus"
      v-if="focusButton && inputLength === 0"
    ></div>
    <div
      class="text-field__clear-button"
      @click="clear"
      v-if="clearButton && inputLength > 0"
    ></div>
    <input
      class="text-field__input"
      :class="[focused ? '' : 'text-field__input--unfocused']"
      :placeholder="placeholder"
      v-model="text"
      @input="input"
      type="text"
      ref="input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrencyWidget from "@/components/grid-purse/widgets/CurrencyWidget.vue";
import SeasonalWidget from "@/components/grid-purse/widgets/SeasonalWidget.vue";

export default defineComponent({
  name: "TextField",
  props: {
    clearButton: Boolean,
    focusButton: Boolean,
    placeholder: String,
    modelValue: String,
    focused: Boolean,
  },
  data: () => ({
    text: "",
  }),
  methods: {
    focus(): void {
      (this.$refs["input"] as any).focus();
    },
    input(event: InputEvent): void {
      this.$emit("update:modelValue", (event.target as any).value);
      this.$emit("change", (event.target as any).value);
    },
    clear(): void {
      this.text = "";
      this.$emit("update:modelValue", "");
      this.$emit("change", "");
      (this.$refs["input"] as any).value = "";
    },
  },
  computed: {
    inputLength(): number {
      return this.text.length;
    },
  },
});
</script>

<style lang="scss" scoped>
.text-field {
  border-image: url(@images/text-fields/1.png) 6 6 6 6 fill;
  border-top: 6px solid transparent;
  border-left: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid transparent;
  height: 24px;
  position: relative;
  width: 100%;

  &__focus-button {
    width: 17px;
    height: 18px;
    background-image: url(@images/text-fields/focus_1.png);
    cursor: pointer;
    right: -4px;
    top: -1px;
    position: absolute;
  }

  &__clear-button {
    width: 11px;
    height: 11px;
    cursor: pointer;
    background-image: url(@images/text-fields/clear_1.png);
    position: absolute;
    right: 0px;
    bottom: 0px;
  }

  &__input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #000000;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    margin-top: -6px;
    margin-left: -6px;
    width: calc(100% - 22px);
    position: absolute;
    border: none;
    font-size: 9.4pt;
    background-color: transparent;
    font-family: "Ubuntu Light", sans-serif;
    padding: 5px 0px 7px 9px;

    &--unfocused {
      color: #a5a5a5;
      opacity: 1;
      font-style: italic;
    }

    &::placeholder {
      color: #a5a5a5;
      opacity: 1;
      font-style: italic;
    }

    &::selection {
      color: #000000;
      background-color: #b5d5ff;
    }
  }
}
</style>

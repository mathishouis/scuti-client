<template>
  <border-card
    type="3"
    class="chat-input-widget"
    @mouseout="hideInfoButton"
    @mouseover="showInfoButton"
  >
    <div class="chat-input-widget__bubble-selector"></div>
    <input
      class="chat-input-widget__text-field"
      placeholder="Clique ici pour chatter..."
    />
    <div
      class="chat-input-widget__info-button"
      @mouseout="hideInfoButton"
      @mouseover="showInfoButton"
      v-if="infoButtonVisible"
    ></div>
  </border-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BorderCard from "@/components/common/BorderCard.vue";

export default defineComponent({
  name: "ChatInputWidget",
  components: {
    BorderCard,
  },
  data: () => ({
    infoButtonVisible: false,
    infoButtonTimeout: 0,
  }),
  methods: {
    showInfoButton(): void {
      clearTimeout(this.infoButtonTimeout);
      this.infoButtonVisible = true;
    },
    hideInfoButton(): void {
      clearTimeout(this.infoButtonTimeout);
      this.infoButtonTimeout = window.setTimeout(
        () => (this.infoButtonVisible = false),
        1000
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.chat-input-widget {
  width: 451px;
  height: 38px;
  position: relative;

  &__bubble-selector {
    width: 57px;
    height: 38px;
    background-image: url(@images/room-view/widgets/chat-input/bubble_selector.png);
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
  }

  &__text-field {
    position: absolute;
    background-color: transparent;
    top: 2px;
    left: 57px;
    height: 34px;
    width: calc(100% - 100px);
    font-family: "Ubuntu", sans-serif;
    font-size: 13pt;
    padding: 0 8px 1px;
    padding-right: 10px;
    border-radius: 8px;
    border: none;

    &::placeholder {
      color: #8f8685;
    }

    &::selection {
      color: #ffffff;
      background-color: #000000;
    }
  }

  &__info-button {
    width: 17px;
    height: 20px;
    cursor: pointer;
    background-image: url(@images/frames/buttons_1.png);
    background-position: -2px -20px;
    position: absolute;
    right: -17px;
    top: 9px;

    &:hover {
      background-position: -21px -20px;
    }

    &:active {
      background-position: 17px -20px;
    }
  }
}
</style>

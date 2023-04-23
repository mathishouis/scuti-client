<template>
  <div class="event-card" :class="contracted ? 'event-card--contracted' : ''">
    <div class="event-card__header" @click="toggleContracted">
      <div class="event-card__icon"></div>
      <div class="event-card__title">Promouvoir</div>
    </div>
    <div class="event-card__content" v-if="!contracted">
      <div class="event-card__badge"></div>
      <div class="event-card__group-title">Habbo Hôtel</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrimaryButton from "@/components/common/PrimaryButton.vue";

export default defineComponent({
  name: "EventCard",
  data: () => ({
    contracted: false,
  }),
  methods: {
    toggleContracted(): void {
      this.contracted = !this.contracted;
    },
  },
});
</script>

<style lang="scss" scoped>
.event-card {
  width: 195px;
  height: 135px;
  background-image: url(@images/info-bar/event/event_bg_visitor.png);
  position: relative;
  display: flex;
  flex-direction: column;

  &--contracted {
    background-image: url(@images/info-bar/group/group_bg_contracted.png);
    height: 25px;
  }

  &__header {
    width: 192px;
    height: 22px;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  &__icon {
    position: absolute;
    width: 16px;
    height: 19px;
    background-image: url(@images/info-bar/event/event_icon.png);
    top: 2px;
    left: 5px;
  }

  &__title {
    position: absolute;
    top: 3px;
    left: 33px;
    color: #ffffff;
    font-family: "Ubuntu", sans-serif;
    text-decoration: underline;
    font-size: 9.5pt;
  }

  &__content {
    width: 192px;
    height: 94px;
    position: absolute;
    left: 0;
    top: 22px;
    cursor: pointer;
  }

  &__manage-button {
    width: 175px;
    position: absolute;
    left: 10px;
    bottom: 11px;
  }

  &__badge {
    position: absolute;
    width: 39px;
    height: 39px;
    background-color: red;
    left: 12px;
    top: 10px;
  }

  &__group-title {
    position: absolute;
    color: #ffffff;
    font-family: "Ubuntu Bold", sans-serif;
    font-size: 9.5pt;
    width: 123px;
    left: 62px;
    top: 7px;
    line-height: 14px;
  }
}
</style>

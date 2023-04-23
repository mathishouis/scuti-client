<template>
  <div class="group-card" :class="contracted ? 'group-card--contracted' : ''">
    <div class="group-card__header" @click="toggleContracted">
      <div class="group-card__icon"></div>
      <div class="group-card__title">QG de Groupe</div>
    </div>
    <div class="group-card__content" v-if="!contracted">
      <div
        class="group-card__badge"
        :style="{
          backgroundImage:
            'url(' +
            __config('group.badge.url').replace(
              '%imagerdata%',
              roomStore.data.groupBadge
            ) +
            ')',
        }"
      ></div>
      <div class="group-card__group-title">{{ roomStore.data.groupName }}</div>
      <primary-button
        type="2"
        color="#FFFFFF"
        class="group-card__manage-button"
        v-if="roomStore.data.ownerId === userId"
        >Gérer</primary-button
      >
      <primary-button
        type="2"
        color="#FFFFFF"
        class="group-card__manage-button"
        v-else
        >Adhérer au groupe</primary-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrimaryButton from "@/components/common/PrimaryButton.vue";
import { mapGetters } from "vuex";
import { mapStores } from "pinia";
import { useRoomStore } from "@/stores/Room";

export default defineComponent({
  name: "GroupCard",
  components: { PrimaryButton },
  data: () => ({
    contracted: false,
  }),
  methods: {
    toggleContracted(): void {
      this.contracted = !this.contracted;
    },
  },
  computed: {
    ...mapStores(useRoomStore),
    // TODO: Replace this
    ...mapGetters("User", { userId: "id" }),
  },
});
</script>

<style lang="scss" scoped>
.group-card {
  width: 195px;
  height: 119px;
  background-image: url(@images/info-bar/group/group_bg.png);
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
    width: 21px;
    height: 16px;
    background-image: url(@images/info-bar/group/group_icon.png);
    top: 3px;
    left: 5px;
  }

  &__title {
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
    font-family: "Ubuntu Bold", sans-serif;
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
    left: 12px;
    top: 10px;
    background-position: center;
    background-repeat: no-repeat;
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

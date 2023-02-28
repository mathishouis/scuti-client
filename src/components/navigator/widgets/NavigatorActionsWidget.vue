<template>
  <div class="navigator-actions-widget">
    <tool-tip label="Créer un nouvel appart !">
      <div class="navigator-actions-widget__create-room-button">
        Créer un appart
      </div>
    </tool-tip>
    <tool-tip label="Fais la promo de ton appart">
      <div class="navigator-actions-widget__create-event-button">
        Créer un évènement
      </div>
    </tool-tip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigatorActionsWidget",
});
</script>

<style lang="scss" scoped>
.navigator-actions-widget {
  width: 394px;
  height: 60px;
  position: absolute;
  right: 15px;
  bottom: 12px;
  display: flex;
  flex-direction: row;
  gap: 16px;

  &__create-room-button {
    width: 189px;
    height: 60px;
    background-image: url(@images/navigator/buttons/create_room.png);
    cursor: pointer;
    font-family: "Ubuntu Bold", sans-serif;
    color: #ffffff;
    font-size: 9.4pt;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    padding-top: 23px;
    padding-left: 78px;
    white-space: nowrap;
    overflow: hidden;
  }

  &__create-event-button {
    width: 189px;
    height: 60px;
    background-image: url(@images/navigator/buttons/create_event.png);
    cursor: pointer;
    font-family: "Ubuntu Bold", sans-serif;
    color: #ffffff;
    font-size: 9.4pt;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    padding-top: 23px;
    padding-left: 66px;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>

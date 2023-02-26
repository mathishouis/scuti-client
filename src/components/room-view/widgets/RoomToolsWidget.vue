<template>
  <div class="room-tools-widget">
    <border-card
      type="2"
      class="room-tools-widget__arrow-left"
      :class="toggleState ? 'room-tools-widget__arrow-left--active' : ''"
      @click="
        toggle();
        showInfosVisibility();
      "
    />
    <border-card
      type="1"
      class="room-tools-widget__actions"
      :class="toggleState ? 'room-tools-widget__actions--active' : ''"
    >
      <div class="room-tools-widget__action-list">
        <tool-tip label="Ouvrir les paramètres de l'appart">
          <div class="room-tools-widget__action">
            <div
              class="room-tools-widget__action-icon room-tools-widget__action-icon--settings"
            ></div>
            <div class="room-tools-widget__action-text">Paramètres</div>
          </div>
        </tool-tip>
        <tool-tip label="Zoom et dézoom">
          <div class="room-tools-widget__action">
            <div
              class="room-tools-widget__action-icon room-tools-widget__action-icon--zoom"
            ></div>
            <div class="room-tools-widget__action-text">Zoom</div>
          </div>
        </tool-tip>
        <tool-tip label="Ouvrir l'historique du Tchat'">
          <div class="room-tools-widget__action">
            <div
              class="room-tools-widget__action-icon room-tools-widget__action-icon--history"
            ></div>
            <div class="room-tools-widget__action-text">Historique</div>
          </div>
        </tool-tip>
        <tool-tip label="Aime cette salle">
          <div class="room-tools-widget__action">
            <div
              class="room-tools-widget__action-icon room-tools-widget__action-icon--like"
            ></div>
            <div class="room-tools-widget__action-text">J'aime</div>
          </div>
        </tool-tip>
        <tool-tip label="Copier le lien d'appart">
          <div class="room-tools-widget__action">
            <div
              class="room-tools-widget__action-icon room-tools-widget__action-icon--link"
            ></div>
            <div class="room-tools-widget__action-text">Lien vers l'appart</div>
          </div>
        </tool-tip>
      </div>
      <div class="room-tools-widget__navigation">
        <tool-tip label="Se rendre dans l'appart précédent de l'historique">
          <div
            class="room-tools-widget__navigation-button room-tools-widget__navigation-previous"
          ></div>
        </tool-tip>
        <tool-tip label="Montrer l'historique des apparts">
          <div
            class="room-tools-widget__navigation-button room-tools-widget__navigation-history"
          ></div>
        </tool-tip>
        <tool-tip label="Se rendre dans le prochain appart de l'historique">
          <div
            class="room-tools-widget__navigation-button room-tools-widget__navigation-next"
          ></div>
        </tool-tip>
      </div>
    </border-card>
    <border-card
      type="1"
      class="room-tools-widget__infos"
      :class="[
        toggleState ? 'room-tools-widget__infos--active' : '',
        !infosVisible ? 'room-tools-widget__infos--hidden' : '',
      ]"
    >
      <div class="room-tools-widget__infos-name">Coffee House</div>
      <div class="room-tools-widget__infos-owner">de Lieux Publics</div>
      <div class="room-tools-widget__infos-tags">
        <room-tag-widget label="tag1" />
        <room-tag-widget label="tag2" />
      </div>
    </border-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import RoomTagWidget from "@/components/room-view/widgets/RoomTagWidget.vue";

export default defineComponent({
  name: "RoomToolsWidget",
  components: {
    RoomTagWidget,
  },
  data: () => ({
    infosVisible: true,
    timeout: 0,
  }),
  methods: {
    ...mapMutations("Room/RoomTools", ["toggle"]),
    showInfosVisibility(): void {
      if (!this.toggleState) {
        this.infosVisible = false;
        return;
      }
      this.infosVisible = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => (this.infosVisible = false), 5000);
    },
  },
  computed: {
    ...mapGetters("Room/RoomTools", ["toggleState"]),
  },
  mounted(): void {
    this.timeout = setTimeout(() => (this.infosVisible = false), 5000);
  },
});
</script>

<style lang="scss" scoped>
.room-tools-widget {
  position: relative;
  display: flex;
  height: 172px;
  align-items: self-end;

  &__arrow-left {
    width: 19px;
    height: 108px;
    margin-left: -5px;
    cursor: pointer;
    position: absolute;
    z-index: 2;

    &:before {
      background-image: url(@images/tool-bar/arrow_left.png);
      content: "";
      position: absolute;
      width: 6px;
      height: 8px;
      left: calc(50% + 3px);
      top: 50%;
      transform: translate(-50%, -50%) rotate(180deg);
      z-index: 1;
    }

    &--active {
      height: 172px;

      &:before {
        transform: translate(-50%, -50%);
      }
    }
  }

  &__actions {
    width: 156px;
    height: 172px;
    margin-left: -177px;
    transition: margin-left 200ms;
    position: relative;
    z-index: 1;

    &--active {
      margin-left: -10px;
    }
  }

  &__action-list {
    display: flex;
    flex-direction: column;
    width: 135px;
    position: absolute;
    top: 8px;
    left: 21px;
    gap: 1px;
  }

  &__action {
    display: flex;
    flex-direction: row;
    gap: 11px;
    align-items: center;
    height: 22px;
    cursor: pointer;

    &:hover &-icon {
      filter: brightness(150%);
    }

    &:active &-icon {
      margin-top: -1px;
      filter: brightness(60%);
    }

    &-icon {
      width: 22px;
      height: 22px;
      background-position: center;
      background-repeat: no-repeat;
      //filter: drop-shadow(0px 2px 0px #151511);

      &--settings {
        background-image: url(@images/room-view/widgets/room-tools/icons/settings.png);
      }

      &--zoom {
        background-image: url(@images/room-view/widgets/room-tools/icons/magnifying_glass_plus.png);
      }

      &--history {
        background-image: url(@images/room-view/widgets/room-tools/icons/chat_bubbles.png);
      }

      &--like {
        background-image: url(@images/room-view/widgets/room-tools/icons/thumb_up.png);
      }

      &--link {
        background-image: url(@images/room-view/widgets/room-tools/icons/arrows.png);
      }
    }

    &-text {
      font-size: 8pt;
      font-family: "Ubuntu", sans-serif;
      color: #a7a7a6;
      text-decoration: underline;
      margin-top: -1px;
    }
  }

  &__navigation {
    width: 105px;
    height: 35px;
    display: flex;
    flex-direction: row;
    gap: 2px;
    position: absolute;
    top: 136px;
    right: 29px;

    &-button {
      cursor: pointer;

      &:hover {
        filter: brightness(150%);
      }

      &:active {
        margin-top: -1px;
        filter: brightness(60%);
      }
    }

    &-previous {
      width: 34px;
      height: 35px;
      background-image: url(@images/room-view/widgets/room-tools/navigation.png);
    }

    &-history {
      width: 33px;
      height: 35px;
      background-image: url(@images/room-view/widgets/room-tools/navigation.png);
      background-position-x: -34px;
    }

    &-next {
      width: 34px;
      height: 35px;
      background-image: url(@images/room-view/widgets/room-tools/navigation.png);
      background-position-x: 34px;
    }
  }

  &__infos {
    height: 77px;
    max-width: 310px;
    overflow: hidden;
    left: 33px;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 3px;
    transition: left 200ms;

    &--hidden {
      left: -310px !important;
    }

    &--active {
      left: 12px;
    }

    &-name {
      font-family: "Ubuntu Condensed", sans-serif;
      white-space: nowrap;
      font-size: 15pt;
      color: #ffffff;
      margin-left: 12px;
      margin-right: 12px;
      margin-top: 5px;
    }

    &-owner {
      font-family: "Ubuntu", sans-serif;
      white-space: nowrap;
      font-size: 12pt;
      color: #989898;
      font-weight: 600;
      margin-left: 12px;
      margin-right: 12px;
    }

    &-tags {
      display: flex;
      flex-direction: row;
      gap: 4px;
      position: absolute;
      left: 10px;
      top: 56px;
    }
  }
}
</style>

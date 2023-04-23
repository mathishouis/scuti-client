<template>
  <teleport to="body">
    <border-card
      type="7"
      class="navigator-room-info-widget"
      :style="{ left: x + 24 + 'px', top: y + 8 + 'px' }"
    >
      <div class="navigator-room-info-widget__content">
        <border-card type="8">
          <div class="navigator-room-info-widget__header">
            <navigator-room-thumbnail-widget
              width="112px"
              height="112px"
              :thumbnail="thumbnail"
            />
            <div
              class="navigator-room-info-widget__large-group-icon"
              :style="{
                backgroundImage:
                  'url(' +
                  __config('group.badge.url').replace(
                    '%imagerdata%',
                    groupBadge
                  ) +
                  ')',
              }"
              v-if="groupId"
            ></div>
            <div class="navigator-room-info-widget__right-panel-header">
              <div class="navigator-room-info-widget__room-name">
                {{ name }}
              </div>
              <div class="navigator-room-info-widget__room-description">
                {{ description }}
              </div>
            </div>
          </div>
        </border-card>
        <div class="navigator-room-info-widget__info-panel">
          <div class="navigator-room-info-widget__left-info-panel">
            <tool-tip :label="__locale('navigator.tooltip.roominfo.owner')">
              <div
                class="navigator-room-info-widget__owner-profile"
                @click="openOwnerProfile"
              >
                <div class="navigator-room-info-widget__owner-icon"></div>
                {{ ownerName }}
              </div>
            </tool-tip>
            <div class="navigator-room-info-widget__room-settings">
              <div class="navigator-room-info-widget__settings-row">
                <div class="navigator-room-info-widget__row-left-settings">
                  {{ __locale("navigator.roompopup.property.trading") }}
                </div>
                <div class="navigator-room-info-widget__row-right-settings">
                  <span v-if="trade === 0">Pas autorisé</span>
                  <span v-if="trade === 1">Utilisateurs avec droits</span>
                  <span v-if="trade === 2">Autorisé</span>
                </div>
              </div>
              <div class="navigator-room-info-widget__settings-row">
                <div class="navigator-room-info-widget__row-left-settings">
                  {{ __locale("navigator.roompopup.property.max_users") }}
                </div>
                <div class="navigator-room-info-widget__row-right-settings">
                  {{ maxUsers }}
                </div>
              </div>
            </div>
          </div>
          <div class="navigator-room-info-widget__right-panel">
            <tool-tip
              :label="__locale('navigator.tooltip.groupinfo.owner')"
              v-if="groupId"
            >
              <div
                class="navigator-room-info-widget__group-info"
                @click="openGroupProfile"
              >
                <div class="navigator-room-info-widget__group-icon"></div>
                {{ groupName }}
              </div>
            </tool-tip>
            <div
              class="navigator-room-info-widget__room-actions"
              :style="{ marginTop: groupId ? '0px' : '23px' }"
            >
              <div
                class="navigator-room-info-widget__actions-row"
                @click="toggleFavourite"
              >
                <div class="navigator-room-info-widget__row-left-actions">
                  <div
                    class="navigator-room-info-widget__action-button"
                    :class="[
                      favourite
                        ? 'navigator-room-info-widget__action-button--favorite--active'
                        : 'navigator-room-info-widget__action-button--favorite',
                    ]"
                  ></div>
                </div>
                <div class="navigator-room-info-widget__row-right-actions">
                  {{ __locale("navigator.room.popup.room.info.favorite") }}
                </div>
              </div>
              <div class="navigator-room-info-widget__actions-row">
                <div class="navigator-room-info-widget__row-left-actions">
                  <div
                    class="navigator-room-info-widget__action-button navigator-room-info-widget__action-button--home"
                  ></div>
                </div>
                <div class="navigator-room-info-widget__row-right-actions">
                  {{ __locale("navigator.room.popup.room.info.home") }}
                </div>
              </div>
              <div class="navigator-room-info-widget__actions-row">
                <div class="navigator-room-info-widget__row-left-actions">
                  <div
                    class="navigator-room-info-widget__action-button navigator-room-info-widget__action-button--report"
                  ></div>
                </div>
                <div class="navigator-room-info-widget__row-right-actions">
                  {{ __locale("navigator.room.popup.report.room") }}
                </div>
              </div>
              <div class="navigator-room-info-widget__actions-row">
                <div class="navigator-room-info-widget__row-left-actions">
                  <div
                    class="navigator-room-info-widget__action-button navigator-room-info-widget__action-button--settings"
                  ></div>
                </div>
                <div class="navigator-room-info-widget__row-right-actions">
                  {{ __locale("navigator.room.popup.room.info.settings") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </border-card>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavigatorRoomThumbnailWidget from "./NavigatorRoomThumbnailWidget.vue";
import BorderCard from "@/components/common/BorderCard.vue";
import store from "@/store";
import { AddFavouriteRoomMessageComposer } from "@/sockets/messages/outgoing/navigator/AddFavouriteRoomMessageComposer";
import { GetExtendedProfileMessageComposer } from "@/sockets/messages/outgoing/players/profile/GetExtendedProfileMessageComposer";
import { GetHabboGroupDetailsMessageComposer } from "@/sockets/messages/outgoing/groups/GetHabboGroupDetailsMessageComposer";
import { mapStores } from "pinia";
import { useNavigatorStore } from "@/stores/Navigator";

export default defineComponent({
  name: "NavigatorRoomInfoWidget",
  components: {
    BorderCard,
    NavigatorRoomThumbnailWidget,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    x: Number,
    y: Number,
    name: String,
    ownerId: {
      type: Number,
      required: true,
    },
    ownerName: String,
    maxUsers: Number,
    description: String,
    trade: Number,
    tags: Object,
    thumbnail: String,
    groupId: {
      type: Number,
      required: true,
    },
    groupName: String,
    groupBadge: String,
    eventName: String,
    eventDescription: String,
    eventExpiresIn: Number,
  },
  methods: {
    toggleFavourite(): void {
      store.getters["Socket/socket"].send(
        new AddFavouriteRoomMessageComposer(this.id)
      );
    },
    openOwnerProfile(): void {
      store.getters["Socket/socket"].send(
        new GetExtendedProfileMessageComposer(this.ownerId)
      );
    },
    openGroupProfile(): void {
      store.getters["Socket/socket"].send(
        new GetHabboGroupDetailsMessageComposer(this.groupId, true)
      );
    },
  },
  computed: {
    ...mapStores(useNavigatorStore),
    favourite(): boolean {
      return this.navigatorStore.isFavouriteRoom(this.id);
    },
  },
});
</script>

<style lang="scss" scoped>
.navigator-room-info-widget {
  position: absolute !important;
  z-index: 3;
  width: 362px;
  height: 261px;
  transform: translateY(-50%);
  /*height: 316px; If event*/

  &__content {
    padding: 8px 8px;
  }

  &__header {
    width: 100%;
    height: 125px;
    padding: 6px 8px 7px;
    display: flex;
    flex-direction: row;
    gap: 9px;
  }

  &__large-group-icon {
    width: 39px;
    height: 39px;
    top: 7px;
    left: 9px;
    position: absolute;
    background-image: url(@images/common/group_badge.png);
  }

  &__right-panel-header {
    position: relative;
    width: 100%;
  }

  &__room-name {
    font-family: "Ubuntu Bold", sans-serif;
    font-size: 9.4pt;
    color: #000000;
    line-height: 14px;
    padding-top: 1px;
    position: absolute;
  }

  &__room-description {
    font-family: "Ubuntu Light", sans-serif;
    font-size: 9.4pt;
    color: #000000;
    line-height: 14px;
    padding-top: 34px;
  }

  &__info-panel {
    width: 100%;
    height: 122px;
    padding-left: 2px;
    padding-right: 2px;
    display: flex;
    flex-direction: row;
    position: relative;
  }

  &__left-info-panel {
    display: flex;
    flex-direction: column;
    width: 137px;
  }

  &__owner-profile {
    display: flex;
    gap: 7px;
    font-family: "Ubuntu Bold", sans-serif;
    font-size: 9.4pt;
    color: #000000;
    text-decoration: underline;
    align-items: center;
    padding-top: 3px;
    padding-left: 3px;
    width: 100%;
    cursor: pointer;
  }

  &__owner-icon {
    width: 15px;
    height: 13px;
    background-image: url(@images/common/icons/user_profile.png);
  }

  &__room-settings {
    display: flex;
    flex-direction: column;
    padding-top: 14px;
  }

  &__settings-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  &__row-left-settings {
    font-family: "Ubuntu Bold", sans-serif;
    font-size: 9.4pt;
    color: #000000;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
  }

  &__row-right-settings {
    font-family: "Ubuntu Light", sans-serif;
    font-size: 9.4pt;
    color: #000000;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
  }

  &__right-panel {
    display: flex;
    flex-direction: column;
    width: 168px;
    margin-left: auto;
  }

  &__group-info {
    display: flex;
    gap: 7px;
    font-family: "Ubuntu Bold", sans-serif;
    font-size: 9.4pt;
    color: #000000;
    text-decoration: underline;
    align-items: center;
    padding-top: 3px;
    width: 100%;
    cursor: pointer;
    height: 21px;
  }

  &__group-icon {
    width: 15px;
    height: 13px;
    background-image: url(@images/common/icons/group.png);
  }

  &__room-actions {
    width: 100%;
    padding-left: 6px;
    padding-right: 6px;
    display: flex;
    flex-direction: column;
    padding-top: 13px;
    gap: 5px;
  }

  &__actions-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: end;
  }

  &__row-left-actions {
    font-family: "Ubuntu Bold", sans-serif;
    font-size: 9.4pt;
    color: #000000;
    min-width: 13px;
    white-space: nowrap;
    overflow: hidden;
  }

  &__row-right-actions {
    font-family: "Ubuntu Light", sans-serif;
    font-size: 9.4pt;
    color: #000000;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  &__action-button {
    width: 13px;
    height: 12px;
    background-image: url(@images/navigator/buttons/room_actions.png);
    cursor: pointer;

    &--favorite {
      background-position: 0 0;

      &--active {
        background-position: -13px 0;
      }
    }

    &--home {
      background-position: 0 -12px;

      &--active {
        background-position: -13px -12px;
      }
    }

    &--report {
      background-position: 0 -24px;
      height: 15px;
    }

    &--settings {
      background-position: 0 -39px;
      height: 14px;
    }
  }
}
</style>

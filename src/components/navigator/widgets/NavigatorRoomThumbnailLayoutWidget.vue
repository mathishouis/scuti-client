<template>
  <tool-tip :label="__locale('navigator.tooltip.go.to.room')">
    <border-card
      class="navigator-room-thumbnail-layout-widget"
      type="6"
      color="#ffffff"
      @click="visit"
    >
      <navigator-room-thumbnail-widget
        width="108px"
        height="109px"
        class="navigator-room-thumbnail-layout-widget__thumbnail"
        :thumbnail="thumbnail"
      />
      <div class="navigator-room-thumbnail-layout-widget__title">
        {{ name }}
      </div>
      <div
        class="navigator-room-thumbnail-layout-widget__group-icon"
        :style="{
          backgroundImage:
            'url(' +
            __config('group.badge.url').replace('%imagerdata%', groupBadge) +
            ')',
        }"
        v-if="groupId"
      ></div>
      <navigator-user-count-widget
        class="navigator-room-thumbnail-layout-widget__user-count"
        :user-count="userCount"
        :max-user="maxUsers"
      />
      <navigator-state-icon-widget
        class="navigator-room-thumbnail-layout-widget__state-icon"
        :state="state"
      />
      <div
        class="navigator-room-thumbnail-layout-widget__info-button"
        @mouseout="hideInfo"
        @mouseover="showInfo($event)"
      ></div>
    </border-card>
  </tool-tip>
  <navigator-room-info-widget
    :id="id"
    :name="name"
    :owner-id="ownerId"
    :owner-name="ownerName"
    :max-users="maxUsers"
    :description="description"
    :trade="trade"
    :tags="['cc', 'cc2']"
    :thumbnail="thumbnail"
    :x="x"
    :y="y"
    :group-id="groupId"
    :group-name="groupName"
    :group-badge="groupBadge"
    :event-name="eventName"
    :event-description="eventDescription"
    :event-expires-in="eventExpiresIn"
    class="navigator-room-list-layout-widget__info"
    v-if="toggleInfo"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigatorUserCountWidget from "@/components/navigator/widgets/NavigatorUserCountWidget.vue";
import NavigatorStateIconWidget from "@/components/navigator/widgets/NavigatorStateIconWidget.vue";
import NavigatorRoomThumbnailWidget from "@/components/navigator/widgets/NavigatorRoomThumbnailWidget.vue";
import NavigatorRoomInfoWidget from "@/components/navigator/widgets/NavigatorRoomInfoWidget.vue";
import { GetGuestRoomMessageComposer } from "@/sockets/messages/outgoing/rooms/engine/GetGuestRoomMessageComposer";
import { mapStores } from "pinia";
import { useNavigatorStore } from "@/stores/Navigator";
import { useSocketStore } from "@/stores/Socket";

export default defineComponent({
  name: "NavigatorRoomThumbnailLayoutWidget",
  components: {
    NavigatorUserCountWidget,
    NavigatorStateIconWidget,
    NavigatorRoomThumbnailWidget,
    NavigatorRoomInfoWidget,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: String,
    description: String,
    ownerId: Number,
    ownerName: String,
    userCount: Number,
    maxUsers: Number,
    state: Number,
    trade: Number,
    groupId: Number,
    groupName: String,
    groupBadge: String,
    eventName: String,
    eventDescription: String,
    eventExpiresIn: Number,
    thumbnail: String,
  },
  data: () => ({
    toggleInfo: false,
    x: 0,
    y: 0,
  }),
  methods: {
    visit(): void {
      this.navigatorStore.visible = false;
      this.socketStore.socket?.send(
        new GetGuestRoomMessageComposer(this.id, 0, 1)
      );
    },
    showInfo(event: any): void {
      const offsets: DOMRect = event.target.getBoundingClientRect();
      this.y = offsets.top;
      this.x = offsets.left;
      this.toggleInfo = true;
    },
    hideInfo(): void {
      this.toggleInfo = false;
    },
  },
  computed: {
    ...mapStores(useNavigatorStore, useSocketStore),
  },
});
</script>

<style lang="scss" scoped>
.navigator-room-thumbnail-layout-widget {
  width: 122px;
  height: 146px;
  position: relative;
  cursor: pointer;

  &__info-button {
    height: 18px;
    width: 18px;
    background-image: url(@images/navigator/icons/info.png);
    position: absolute;
    right: 6px;
    top: 120px;
    cursor: pointer;
  }

  &__title {
    position: absolute;
    top: 119px;
    left: 9px;
    font-size: 8pt;
    color: #000000;
    font-family: "Ubuntu Light", sans-serif;
    line-height: 12px;
    max-width: calc(100% - 24px);
    max-height: 24px;
    overflow: hidden;
  }

  &__user-count {
    left: 40px;
    top: 93px;
    position: absolute;
  }

  &__state-icon {
    position: absolute;
    right: 16px;
    top: 95px;
  }

  &__thumbnail {
    position: absolute;
    top: 6px;
    left: 7px;
  }

  &__group-icon {
    width: 39px;
    height: 39px;
    top: 8px;
    left: 9px;
    position: absolute;
  }
}
</style>

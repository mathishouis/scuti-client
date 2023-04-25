<template>
  <div class="navigator-room-list-layout-widget" @click="visit">
    <navigator-user-count-widget
      class="navigator-room-list-layout-widget__user-count"
      :user-count="userCount"
      :max-user="maxUsers"
    />
    <div
      class="navigator-room-list-layout-widget__info-button"
      @mouseover="showInfo($event)"
      @mouseout="hideInfo"
    ></div>
    <div
      class="navigator-room-list-layout-widget__group-icon"
      v-if="groupId"
    ></div>
    <navigator-state-icon-widget
      class="navigator-room-list-layout-widget__state-icon"
      :state="state"
    />
    <div class="navigator-room-list-layout-widget__title">
      {{ name }}
    </div>
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
      v-if="infoVisible"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigatorUserCountWidget from "@/components/navigator/widgets/NavigatorUserCountWidget.vue";
import NavigatorStateIconWidget from "@/components/navigator/widgets/NavigatorStateIconWidget.vue";
import NavigatorRoomInfoWidget from "@/components/navigator/widgets/NavigatorRoomInfoWidget.vue";
import { GetGuestRoomMessageComposer } from "@/sockets/messages/outgoing/rooms/engine/GetGuestRoomMessageComposer";
import { mapStores } from "pinia";
import { useNavigatorStore } from "@/stores/Navigator";
import { useSocketStore } from "@/stores/Socket";
import { useWindowStore } from "@/stores/WindowView";

export default defineComponent({
  name: "NavigatorRoomListLayoutWidget",
  components: {
    NavigatorUserCountWidget,
    NavigatorStateIconWidget,
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
    infoVisible: false,
    x: 0,
    y: 0,
  }),
  methods: {
    visit(): void {
      this.windowStore.getWindow("navigator")!.visible = false;
      this.socketStore.socket?.send(
        new GetGuestRoomMessageComposer(this.id, 0, 1)
      );
    },
    showInfo(event: any): void {
      const offsets: DOMRect = event.target.getBoundingClientRect();
      this.y = offsets.top;
      this.x = offsets.left;
      this.infoVisible = true;
    },
    hideInfo(): void {
      this.infoVisible = false;
    },
  },
  computed: {
    ...mapStores(useNavigatorStore, useSocketStore, useWindowStore),
  },
});
</script>

<style lang="scss" scoped>
.navigator-room-list-layout-widget {
  width: 100%;
  padding-top: 1px;
  padding-bottom: 1px;
  height: 20px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  background-color: #ffffff;

  &:nth-child(odd) {
    background: #d5edff;
  }

  &__info-button {
    height: 18px;
    width: 18px;
    background-image: url(@images/navigator/icons/info.png);
    position: absolute;
    right: 6px;
    cursor: pointer;
  }

  &__group-icon {
    height: 11px;
    width: 13px;
    background-image: url(@images/navigator/icons/room_group.png);
    position: absolute;
    right: 28px;
    top: 4px;
    cursor: pointer;
  }

  &__user-count {
    position: absolute;
    left: 0;
  }

  &__title {
    position: absolute;
    left: 47px;
    color: #000000;
    font-size: 9.4pt;
    font-family: "Ubuntu Light", sans-serif;
    top: 1px;
    line-height: 16px;
  }

  &__state-icon {
    position: absolute;
    right: 45px;
    top: 2px;
  }
}
</style>

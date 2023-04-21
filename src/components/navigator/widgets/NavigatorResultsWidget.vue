<template>
  <scroll-box width="405px" height="295px" class="navigator-results-widget">
    <div class="navigator-results-widget__content">
      <navigator-category-widget
        :id="category.id"
        :title="
          category.id !== 'query'
            ? category.name
            : __locale('navigator.searchcode.title.query')
        "
        :minimised="category.minimised"
        :view="category.view"
        v-for="category in categories"
        :key="category.id"
      >
        <template #list>
          <navigator-room-list-layout-widget
            :id="room.roomId"
            :name="room.roomName"
            :description="room.description"
            :owner-id="room.ownerId"
            :owner-name="room.ownerName"
            :user-count="room.userCount"
            :max-users="room.maxUserCount"
            :state="room.skipAuth"
            :trade="room.trade"
            :thumbnail="room.thumbnail"
            :group-id="room.groupId"
            :group-name="room.groupName"
            :group-badge="room.groupBadge"
            :event-name="room.eventName"
            :event-description="room.eventDescription"
            :event-expires-in="room.eventExpiresIn"
            v-for="room in category.rooms"
            :key="room.id"
          />
        </template>
        <template #thumbnail>
          <navigator-room-thumbnail-layout-widget
            :id="room.roomId"
            :name="room.roomName"
            :description="room.description"
            :owner-id="room.ownerId"
            :owner-name="room.ownerName"
            :user-count="room.userCount"
            :max-users="room.maxUserCount"
            :state="room.skipAuth"
            :trade="room.trade"
            :thumbnail="room.thumbnail"
            :group-id="room.groupId"
            :group-name="room.groupName"
            :group-badge="room.groupBadge"
            :event-name="room.eventName"
            :event-description="room.eventDescription"
            :event-expires-in="room.eventExpiresIn"
            v-for="room in category.rooms"
            :key="room.id"
          />
        </template>
      </navigator-category-widget>
    </div>
    <div v-if="false">
      cc1<br />cc2<br />
      cc4<br />cc3<br />
      cc5<br />cc6<br />
      czadc<br />cc3<br />
      cezfc<br />cezfc<br />
      chgnc<br />ccyt<br />
      cwxcc<br />l:l=cc<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
      ca&c<br />ccpo<br />
    </div>
  </scroll-box>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigatorCategoryWidget from "@/components/navigator/widgets/NavigatorCategoryWidget.vue";
import NavigatorRoomListLayoutWidget from "@/components/navigator/widgets/NavigatorRoomListLayoutWidget.vue";
import NavigatorRoomThumbnailLayoutWidget from "@/components/navigator/widgets/NavigatorRoomThumbnailLayoutWidget.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "NavigatorResultsWidget",
  components: {
    NavigatorCategoryWidget,
    NavigatorRoomListLayoutWidget,
    NavigatorRoomThumbnailLayoutWidget,
  },
  computed: {
    ...mapGetters("Navigator/Categories", ["categories"]),
  },
});
</script>

<style lang="scss" scoped>
.navigator-results-widget {
  position: absolute !important;
  right: 7px;
  top: 75px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>

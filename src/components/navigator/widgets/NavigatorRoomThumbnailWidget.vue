<template>
  <div
    class="navigator-room-thumbnail-widget"
    :style="{
      backgroundImage: 'url(' + thumbnailUrl + ')',
      width: width,
      height: height,
      minWidth: width,
      minHeight: height,
    }"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigatorRoomThumbnailWidget",
  props: {
    thumbnail: String,
    height: String,
    width: String,
  },
  computed: {
    thumbnailUrl(): string {
      if (this.thumbnail)
        // @ts-ignore
        return this.__config("navigator.thumbnail.url_base") + this.thumbnail;
      return require("@images/navigator/room_thumbnail_placeholder.png");
    },
  },
});
</script>

<style lang="scss" scoped>
.navigator-room-thumbnail-widget {
  border: 1px solid #000000;
  background-color: #b4b3aa;
  background-position: center center;
  background-image: url(@images/navigator/room_thumbnail_placeholder.png);
}
</style>

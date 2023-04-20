<template>
  <div class="room-tag-widget">#{{ label }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RoomTagWidget",
  props: {
    label: String,
  },
});
</script>

<style lang="scss" scoped>
.room-tag-widget {
  color: #1a78aa;
  font-family: "Ubuntu", sans-serif;
  font-size: 8pt;
  height: 12px;
  padding: 0 3px 0 4px;
  display: flex;
  align-items: center;
  background-color: rgba(#1a78aa, 0.2);
  border-radius: 2px;
  width: auto;
  cursor: pointer;

  &:hover {
    color: #44a2dd;
  }
}
</style>

<template>
  <teleport to="body">
    {{ x }} {{ y }}
    <border-card
      type="1"
      class="tool-tip"
      :style="{ top: y + 5 + 'px', left: x + 15 + 'px' }"
      v-if="visible"
      ref="tool-tip"
    >
      <div class="tool-tip__label">
        {{ label }}
      </div>
    </border-card>
  </teleport>
  <div @mouseover="show($event)" @mouseout="hide" @mousemove="update($event)">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToolTip",
  props: {
    label: String,
  },
  data: () => ({
    visible: false,
    x: 0,
    y: 0,
    timeout: 0,
  }),
  methods: {
    show(event: MouseEvent): void {
      this.x = event.clientX;
      this.y = event.clientY;
      if (event.clientY > window.innerHeight - 37) {
        this.y = window.innerHeight - 37;
      }
      this.timeout = window.setTimeout(() => {
        this.visible = true;
        this.update(event);
      }, 1000);
    },
    hide(): void {
      this.visible = false;
      clearTimeout(this.timeout);
    },
    update(event: MouseEvent): void {
      if (this.visible && (this.$refs["tool-tip"] as any)) {
        this.x = event.clientX;
        this.y = event.clientY;
        if (event.clientY > window.innerHeight - 37) {
          this.y = window.innerHeight - 37;
        }
        if (
          event.clientX >
          window.innerWidth - 15 - (this.$refs["tool-tip"] as any).offsetWidth
        ) {
          this.x =
            window.innerWidth -
            15 -
            (this.$refs["tool-tip"] as any).offsetWidth;
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.tool-tip {
  position: absolute;
  height: 22px;
  font-family: "Ubuntu";
  z-index: 2;
  color: #ffffff;
  pointer-events: none;
  transform: translateY(50%);
  line-height: 10px;
  font-size: 8.5pt;
  white-space: nowrap;

  &__label {
    z-index: 1;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 6px;
  }
}
</style>

<template>
  <div
    class="window-frame"
    :style="{ left: x, top: y, width: width, height: height }"
    :class="'window-frame--' + type"
    ref="window"
  >
    <div>
      <div class="window-frame__background"></div>
      <div
        class="window-frame__color"
        :style="{ backgroundColor: color }"
      ></div>
    </div>
    <div class="window-frame__title">Navigateur</div>
    <div
      class="window-frame__handler"
      @mousedown="onDragStart"
      ref="handler"
    ></div>
    <div class="window-frame__button-list">
      <div class="window-frame__close-button" @click="close"></div>
      <div class="window-frame__info-button" @click="info"></div>
    </div>
    <div class="window-frame__content">
      <slot />
    </div>
    <div class="window-frame__resizer" @mousedown="onResizeStart"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WindowFrame",
  props: {
    type: String,
    color: String,
    x: {
      type: String,
      default: "100px",
    },
    y: {
      type: String,
      default: "100px",
    },
    width: {
      type: String,
      default: "300px",
    },
    height: {
      type: String,
      default: "400px",
    },
    maxWidth: {
      type: String,
      default: "400px",
    },
    maxHeight: {
      type: String,
      default: "400px",
    },
  },
  data: () => ({
    dragging: false,
    resizing: false,
  }),
  methods: {
    onDragStart(event: PointerEvent): void {
      this.dragging = true;
    },
    onDragEnd(event: PointerEvent): void {
      this.dragging = false;
    },
    onDragMove(event: MouseEvent): void {
      if (this.dragging) {
        /*if (!this.outOfBoundsX(event)) {
          (this.$refs["window"] as any).style.left =
            parseInt((this.$refs["window"] as any).style.left, 10) +
            event.movementX +
            "px";
        }
        if (!this.outOfBoundsY(event)) {
          (this.$refs["window"] as any).style.top =
            parseInt((this.$refs["window"] as any).style.top, 10) +
            event.movementY +
            "px";
        }*/
        (this.$refs["window"] as any).style.left =
          parseInt((this.$refs["window"] as any).style.left, 10) +
          event.movementX +
          "px";
        (this.$refs["window"] as any).style.top =
          parseInt((this.$refs["window"] as any).style.top, 10) +
          event.movementY +
          "px";
      }
    },
    onResizeStart(event: PointerEvent): void {
      this.resizing = true;
    },
    onResizeEnd(event: PointerEvent): void {
      this.resizing = false;
    },
    onResizeMove(event: PointerEvent): void {
      if (this.resizing) {
        if (
          parseInt((this.$refs["window"] as any).style.width, 10) +
            event.movementX >=
            parseInt(this.width, 10) &&
          parseInt((this.$refs["window"] as any).style.width, 10) +
            event.movementX <=
            parseInt(this.maxWidth, 10)
        ) {
          (this.$refs["window"] as any).style.width =
            parseInt((this.$refs["window"] as any).style.width, 10) +
            event.movementX +
            "px";
        }
        if (
          parseInt((this.$refs["window"] as any).style.height, 10) +
            event.movementY >=
            parseInt(this.height, 10) &&
          parseInt((this.$refs["window"] as any).style.height, 10) +
            event.movementY <=
            parseInt(this.maxHeight, 10)
        ) {
          (this.$refs["window"] as any).style.height =
            parseInt((this.$refs["window"] as any).style.height, 10) +
            event.movementY +
            "px";
        }
      }
    },
    outOfBoundsX(event: MouseEvent): boolean {
      if (
        event.pageX +
          (this.$refs["window"] as any).clientWidth -
          event.offsetX >
        window.innerWidth
      ) {
        return true;
      }
      if (event.pageX - event.offsetX < 0) {
        return true;
      }
      return false;
    },
    outOfBoundsY(event: MouseEvent): boolean {
      if (
        event.pageY +
          (this.$refs["window"] as any).clientHeight -
          event.offsetY >
        window.innerHeight
      ) {
        return true;
      }
      if (event.pageY - event.offsetY < 0) {
        return true;
      }
      return false;
    },
    close(): void {
      this.$emit("close");
    },
    info(): void {
      this.$emit("info");
    },
  },
  mounted(): void {
    document.body.addEventListener("pointermove", (event) =>
      this.onDragMove(event)
    );
    document.body.addEventListener("pointerup", (event) =>
      this.onDragEnd(event)
    );
    document.body.addEventListener("pointermove", (event) =>
      this.onResizeMove(event)
    );
    document.body.addEventListener("pointerup", (event) =>
      this.onResizeEnd(event)
    );
  },
});
</script>

<style lang="scss" scoped>
.window-frame {
  position: fixed;
  z-index: 2;
  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &__content {
    z-index: 1;
    width: 100%;
    position: relative;
  }

  &__color {
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    mix-blend-mode: multiply;
    border-radius: 7px;
  }

  &--1 &__background {
    border-image: url(@images/frames/1.png) 33 7 7 7 fill;
    border-top: 33px solid transparent;
    border-left: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 7px solid transparent;
  }

  &--1 &__content {
    margin-top: 33px;
  }

  &--1 &__color {
    height: 33px;
    border-radius: 10px 10px 0 0;
  }

  &--1 &__title {
    font-family: "Ubuntu Bold", sans-serif;
    color: #ffffff;
    font-size: 9pt;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 9px;
    letter-spacing: 0.1pt;
  }

  &--1 &__button-list {
    height: 20px;
    margin: 8px 9px 5px;
    position: absolute;
    right: 0;
    display: flex;
    gap: 5px;
    flex-direction: row-reverse;
  }

  &--1 &__info-button {
    width: 19px;
    height: 20px;
    cursor: pointer;
    background-image: url(@images/frames/buttons_1.png);
    background-position: 0 -20px;

    &:hover {
      background-position: -19px -20px;
    }

    &:active {
      background-position: 19px -20px;
    }
  }

  &--1 &__close-button {
    width: 19px;
    height: 20px;
    cursor: pointer;
    background-image: url(@images/frames/buttons_1.png);
    background-position: 0 0;

    &:hover {
      background-position: -19px 0;
    }

    &:active {
      background-position: 19px 0;
    }
  }

  &--1 &__handler {
    width: 100%;
    height: 33px;
    position: absolute;
    left: 0;
    top: 0;
  }

  &--1 &__resizer {
    width: 19px;
    height: 19px;
    position: absolute;
    bottom: 4px;
    right: 3px;
    cursor: pointer;
    background-image: url(@images/frames/resizer_1.png);
  }
}
</style>

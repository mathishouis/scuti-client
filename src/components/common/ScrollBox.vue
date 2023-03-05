<template>
  <div class="scroll-box" :style="{ width: width, height: height }">
    <div
      class="scroll-box__up-button"
      :class="[disabled ? 'scroll-box__up-button--disabled' : '']"
      @click="up"
    ></div>
    <div
      class="scroll-box__rail"
      :class="[disabled ? 'scroll-box__rail--disabled' : '']"
      @click="toggle($event)"
    >
      <div
        class="scroll-box__thumb"
        style="height: 0px; top: 0px"
        ref="thumb"
      ></div>
    </div>
    <div
      class="scroll-box__down-button"
      :class="[disabled ? 'scroll-box__down-button--disabled' : '']"
      @click="down"
    ></div>
    <div
      :style="{ width: width, height: height }"
      class="scroll-box__scroll-area"
      ref="scrollbox"
    >
      <div style="margin-top: 0px" ref="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScrollBox",
  props: {
    width: String,
    height: String,
  },
  data: () => ({
    disabled: false,
    observer: null,
  }),
  methods: {
    up(): void {
      if (this.disabled) return;
      if (parseInt((this.$refs.content as any).style.marginTop, 10) + 54 > 0) {
        (this.$refs.content as any).style.marginTop = "0px";
        return;
      }
      (this.$refs.content as any).style.marginTop =
        parseInt((this.$refs.content as any).style.marginTop, 10) + 54 + "px";
    },
    down(): void {
      if (this.disabled) return;
      if (
        parseInt((this.$refs.content as any).style.marginTop, 10) - 54 <
        -(this.$refs.content as any).clientHeight +
          parseInt(this.height ?? "0px", 10)
      ) {
        (this.$refs.content as any).style.marginTop =
          -(this.$refs.content as any).clientHeight +
          parseInt(this.height ?? "0px", 10) +
          "px";
        return;
      }
      (this.$refs.content as any).style.marginTop =
        parseInt((this.$refs.content as any).style.marginTop, 10) - 54 + "px";
      console.log(
        parseInt((this.$refs.content as any).style.marginTop, 10),
        (this.$refs.content as any).clientHeight,
        -(this.$refs.content as any).clientHeight +
          parseInt(this.height ?? "0px", 10)
      );
    },
    toggle(event: any): void {
      if (this.disabled) return;
      if (
        event.target.offsetHeight - event.layerY >
        event.target.offsetHeight / 2
      ) {
        //(this.$refs.scrollbox as any).scrollEl.scrollTo({ top: 0 });
        (this.$refs.content as any).style.marginTop = "0px";
      } else {
        (this.$refs.content as any).style.marginTop =
          -(this.$refs.content as any).clientHeight +
          parseInt(this.height ?? "0px", 10) +
          "px";
        //(this.$refs.scrollbox as any).scrollEl.scrollTo({ top: 10000 });
      }
    },
  },
  computed: {
    scrollEnabled(): boolean {
      if ((this.$refs.content as any) === undefined) return false;
      console.log(
        (this.$refs.content as any).clientHeight,
        parseInt(this.height ?? "0px", 10)
      );
      return (
        (this.$refs.content as any).clientHeight >
        parseInt(this.height ?? "0px", 10)
      );
    },
  },
  mounted(): void {
    (this.$refs.thumb as any).style.height =
      (parseInt(this.height ?? "0px", 10) /
        (this.$refs.content as any).clientHeight) *
        100 +
      "%";
    if (
      // @ts-ignore
      (this.$refs.content as any).clientHeight <
      // @ts-ignore
      parseInt(this.height ?? "0px", 10)
    ) {
      // @ts-ignore
      this.disabled = true;
    } else {
      // @ts-ignore
      this.disabled = false;
    }
    // @ts-ignore
    this.observer = new MutationObserver(
      // @ts-ignore
      function (mutations) {
        // @ts-ignore
        (this.$refs.thumb as any).style.top =
          "calc(" +
          // @ts-ignore
          (-parseInt((this.$refs.content as any).style.marginTop, 10) /
            // @ts-ignore
            ((this.$refs.content as any).clientHeight +
              // @ts-ignore
              parseInt((this.$refs.thumb as any).style.height, 10))) *
            100 +
          "%)";
        // @ts-ignore
        if (
          // @ts-ignore
          (this.$refs.content as any).clientHeight <
          // @ts-ignore
          parseInt(this.height ?? "0px", 10)
        ) {
          // @ts-ignore
          this.disabled = true;
        } else {
          // @ts-ignore
          this.disabled = false;
        }
      }.bind(this)
    );
    // @ts-ignore
    this.observer.observe(this.$refs.content, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  },
});
</script>

<style lang="scss" scoped>
.scroll-box {
  position: relative;

  &__up-button {
    width: 17px;
    height: 16px;
    background-image: url(@images/scroll-boxes/button_up_1.png);
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;

    &:hover {
      background-position: 0 -32px;
    }

    &:active {
      background-position: 0 -48px;
    }

    &--disabled {
      background-position: 0 -16px;
      cursor: default !important;

      &:hover {
        background-position: 0 -16px !important;
      }

      &:active {
        background-position: 0 -16px !important;
      }
    }
  }

  &__down-button {
    width: 17px;
    height: 16px;
    background-image: url(@images/scroll-boxes/button_down_1.png);
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;

    &:hover {
      background-position: 0 -32px;
    }

    &:active {
      background-position: 0 -48px;
    }

    &--disabled {
      background-position: 0 -16px;
      cursor: default !important;

      &:hover {
        background-position: 0 -16px !important;
      }

      &:active {
        background-position: 0 -16px !important;
      }
    }
  }

  &__rail {
    width: 17px;
    height: calc(100% - 32px);
    top: 16px;
    background-image: url(@images/scroll-boxes/rail_1.png);
    background-position: -17px 0;
    position: absolute;
    bottom: 0;
    right: 0;

    &--disabled {
      width: 17px;
      height: calc(100% - 32px);
      top: 16px;
      background-image: url(@images/scroll-boxes/rail_1.png);
      background-position: 0 0;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  &__thumb {
    position: relative;
    width: 17px;
    background-image: url(@images/scroll-boxes/thumb_1.png);
    cursor: pointer;

    &:hover {
      background-position: -17px 0;

      &:before {
        background-position: -17px 0;
      }

      &:after {
        background-position: -17px 0;
      }
    }

    &:active {
      background-position: -34px 0;

      &:before {
        background-position: -34px 0;
      }

      &:after {
        background-position: -34px 0;
      }
    }

    &:before {
      content: "";
      position: absolute;
      height: 5px;
      width: 100%;
      background-image: url(@images/scroll-boxes/thumb_top_1.png);
      top: 0;
    }

    &:after {
      content: "";
      position: absolute;
      height: 5px;
      width: 100%;
      background-image: url(@images/scroll-boxes/thumb_bottom_1.png);
      bottom: 0;
    }
  }

  &__scroll-area {
    overflow-y: scroll;
  }
}
</style>

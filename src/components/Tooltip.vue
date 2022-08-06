<template>
    <teleport to="body">
        <div class="Habbo-Tooltip" :style="{ top: y + 5 + 'px', left: x + 15 + 'px' }" v-if="visible" ref="tooltip">
            {{ tooltip }}
        </div>
    </teleport>
    <div @mouseover="show" @mouseout="hide" @mousemove="update($event)">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            tooltip: String
        },
        data() {
            return {
                visible: false,
                x: 0,
                y: 0,
                timeout: undefined,
            }
        },
        methods: {
            show(): void {
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, 1000);
            },
            hide(): void {
                this.visible = false;
                clearTimeout(this.timeout);
            },
            update(event): void {
                this.x = event.clientX;
                this.y = event.clientY;
                if(event.clientY > window.innerHeight - 37) {
                    this.y = window.innerHeight - 37;
                }
                if(event.clientX > window.innerWidth - 15 - this.$refs.tooltip.offsetWidth) {
                    this.x = window.innerWidth - 15 - this.$refs.tooltip.offsetWidth;
                }
            }
        }
    });
</script>

<style scoped>
    .Habbo-Tooltip {
        position: absolute;
        border-image: url(./../assets/images/border_1.png) 6 6 6 6 fill;
        border-top: 6px solid transparent;
        border-left: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid transparent;
        height: 22px;
        font-family: Ubuntu;
        z-index: 2;
        color: #FFFFFF;
        pointer-events: none;
        transform: translateY(50%);
        line-height: 10px;
        font-size: 8.5pt;
        padding-left: 2px;
        padding-right: 2px;
        white-space: nowrap;
    }
</style>
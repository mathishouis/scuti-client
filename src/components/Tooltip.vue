<template>
    <div class="Habbo-Tooltip" :style="{ top: y + 15 + 'px', left: x + 15 + 'px' }" v-if="visible">
        {{ tooltip }}
    </div>
    <div @mouseover="show" @mouseout="hide" @mousemove="update($event)">
        <slot/>
    </div>
</template>

<script>
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
            show() {
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, 1000);
            },
            hide() {
                this.visible = false;
                clearTimeout(this.timeout);
            },
            update(event) {
                this.x = event.layerX;
                if(event.clientY + 40 > window.innerHeight) {
                    this.y = event.layerY - 23;
                } else {
                    this.y = event.layerY;
                }
            }
        }
    });
</script>

<style scoped>
    .Habbo-Tooltip {
        position: absolute;
        border-image: url(./../../static/images/border_1.png) 6 6 6 6 fill;
        border-top: 6px solid transparent;
        border-left: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid transparent;
        height: 10px;
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
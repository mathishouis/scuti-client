<template>
    <div id="invisible-dragger"></div>
    <div :class="'Habbo-Window--style-' + id" :style="{ width: width, height: height, resize: resizableX && resizableY ? 'both' : resizableX ? 'horizontal' : resizableY ? 'vertical' : '' }" v-drag="{handle: draggable ? '#dragger-' + width + '-' + height + '-' + id : '#invisible-dragger'}">
        <div class="Habbo-Window__Header">
            <div class="Habbo-Window__Handle" :id="'dragger-' + width + '-' + height + '-' + id" v-if="draggable">
            </div>
            <div class="Habbo-Window__Title">
                {{ title }}
            </div>
            <div class="Habbo-Window__Button-Group">
                <div class="Habbo-Window__Close-Button" @click="close">
                </div>
                <div class="Habbo-Window__Info-Button">
                </div>
            </div>
        </div>
        <div class="Habbo-Window__Content">
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            title: String,
            width: String,
            height: String,
            resizableX: Boolean,
            resizableY: Boolean,
            id: Number,
            draggable: Boolean
        },
        methods: {
            close(): void {
                this.$emit('close');
            }
        }
    });
</script>

<style scoped>
    .Habbo-Window--style-3 {
        height: 300px;
        width: 300px;
        border-image: url(../../assets/images/frame.png) 33 7 7 7 fill;
        border-top: 33px solid transparent;
        border-left: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-right: 7px solid transparent;
        position: relative;
        z-index: 2;
    }
    .Habbo-Window--style-3 .Habbo-Window__Header {
        width: calc(100% + 14px);
        height: 33px;
        margin-left: -7px;
        margin-top: -33px;
        position: absolute;
    }
    .Habbo-Window--style-3 .Habbo-Window__Header .Habbo-Window__Title {
        font-family: UbuntuBold;
        color: #ffffff;
        font-size: 9pt;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 8px;
        letter-spacing: 0.1pt;
    }
    .Habbo-Window--style-3 .Habbo-Window__Header .Habbo-Window__Handle {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: calc(100% - 52px);
        z-index: 1;
    }
    .Habbo-Window--style-3 .Habbo-Window__Header .Habbo-Window__Button-Group {
        height: 20px;
        margin: 8px 9px 5px;
        position: absolute;
        right: 0;
        display: flex;
        gap: 5px;
        flex-direction: row-reverse;
    }
    .Habbo-Window--style-3 .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Close-Button {
        width: 19px;
        height: 20px;
        cursor: pointer;
        background-image: url(../../assets/images/frame_buttons.png);
    }
    .Habbo-Window--style-3 .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Close-Button:hover {
        background-image: url(../../assets/images/frame_buttons.png);
        background-position: -19px 0;
    }
    .Habbo-Window--style-3 .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Close-Button:active {
        background-image: url(../../assets/images/frame_buttons.png);
        background-position: 19px 0;
    }
    .Habbo-Window--style-3 .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Info-Button {
        width: 19px;
        height: 20px;
        cursor: pointer;
        background-image: url(../../assets/images/frame_buttons.png);
        background-position: 0 -20px;
    }
    .Habbo-Window--style-3 .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Info-Button:hover {
        background-image: url(../../assets/images/frame_buttons.png);
        background-position: -19px -20px;
    }
    .Habbo-Window--style-3 .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Info-Button:active {
        background-image: url(../../assets/images/frame_buttons.png);
        background-position: 19px -20px;
    }
    .Habbo-Window--style-3 .Habbo-Window__Content {
        width: calc(100% + 2px);
        margin-left: -1px;
        position: absolute;
        height: 100%;
    }
    .drag-handle {
        cursor: default !important;
    }


    .Habbo-Window--style-1 {
        border-image: url(../../assets/images/common/border_7.png) 6 6 6 6 fill;
        border-top: 6px solid transparent;
        border-left: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid transparent;
        position: relative;
        z-index: 2;
        padding: 4px 4px;
    }
    .Habbo-Window--style-1 .Habbo-Window__Header {
        width: calc(100% + 12px);
        height: 30px;
        margin-left: -10px;
        margin-top: -10px;
        position: absolute;
    }
    .Habbo-Window--style-1 .Habbo-Window__Header:after {
        content: "";
        position: absolute;
        width: calc(100% - 20px);
        height: 1px;
        margin-top: 30px;
        margin-left: 10px;
        background-color: #333333;
    }
    .Habbo-Window--style-1 .Habbo-Window__Header .Habbo-Window__Title {
        font-family: Goldfish;
        font-size: 9px;
        color: #FFFFFF;
        position: absolute;
        left: 12px;
        margin-top: 10px;
        letter-spacing: 0.4pt;
        font-weight: bold;
    }
    .Habbo-Window--style-1 .Habbo-Window__Header .Habbo-Window__Handle {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: calc(100% - 52px);
        z-index: 1;
    }
    .Habbo-Window--style-1 .Habbo-Window__Header .Habbo-Window__Button-Group {
        height: 20px;
        position: absolute;
        right: 0;
        display: flex;
        gap: 5px;
        flex-direction: row-reverse;
        margin: 7px 8px;
    }
    .Habbo-Window--style-1 .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Close-Button {
        width: 13px;
        height: 13px;
        cursor: pointer;
        background-image: url(../../assets/images/common/frame_1_buttons.png);
    }
    .Habbo-Window--style-1 .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Info-Button {
        display: none;
    }
    .Habbo-Window--style-1 .Habbo-Window__Content {
        width: calc(100% - 8px);
        margin-top: 21px;
        position: absolute;
        height: calc(100% - 29px);
    }
</style>
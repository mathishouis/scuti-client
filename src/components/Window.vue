<template>
    <div class="Habbo-Window" :style="{ width: width + 'px', height: height + 'px' }">
        <div class="Habbo-Window__Header">
            <div class="Habbo-Window__Title">
                {{ title }}
            </div>
            <div class="Habbo-Window__Button-Group">
                <div class="Habbo-Window__Close-Button">
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

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            title: String,
            width: Number,
            height: Number
        }
    });
</script>

<style scoped>
    .Habbo-Window {
        height: 300px;
        width: 300px;
        border-image: url(./../../static/images/frame.png) 33 7 7 7 fill;
        border-top: 33px solid transparent;
        border-left: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-right: 7px solid transparent;
        position: relative;
    }
    .Habbo-Window__Header {
        width: calc(100% + 14px);
        height: 33px;
        margin-left: -7px;
        margin-top: -33px;
        position: absolute;
    }
    .Habbo-Window__Header .Habbo-Window__Title {
        font-family: UbuntuBold;
        color: #ffffff;
        font-size: 9pt;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 8px;
        letter-spacing: 0.1pt;
    }
    .Habbo-Window__Header .Habbo-Window__Button-Group {
        height: 20px;
        margin: 8px 9px 5px;
        position: absolute;
        right: 0;
        display: flex;
        gap: 5px;
        flex-direction: row-reverse;
    }
    .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Close-Button {
        width: 19px;
        height: 20px;
        cursor: pointer;
        background-image: url(./../../static/images/frame_buttons.png);
    }
    .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Close-Button:hover {
        background-image: url(./../../static/images/frame_buttons.png);
        background-position: -19px 0;
    }
    .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Close-Button:active {
        background-image: url(./../../static/images/frame_buttons.png);
        background-position: 19px 0;
    }
    .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Info-Button {
        width: 19px;
        height: 20px;
        cursor: pointer;
        background-image: url(./../../static/images/frame_buttons.png);
        background-position: 0 -20px;
    }
    .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Info-Button:hover {
        background-image: url(./../../static/images/frame_buttons.png);
        background-position: -19px -20px;
    }
    .Habbo-Window__Header .Habbo-Window__Button-Group .Habbo-Window__Info-Button:active {
        background-image: url(./../../static/images/frame_buttons.png);
        background-position: 19px -20px;
    }
    .Habbo-Window__Content {
        width: calc(100% + 2px);
        margin-left: -1px;
        position: absolute;
        height: 100%;
    }
</style>
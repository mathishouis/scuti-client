<template>
    <div :class="'Habbo-Button__Button--' + id">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
       props: {
           id: Number
       }
    })
</script>

<style scoped>

    .Habbo-Button__Button--1 {
        border-image: url(../../assets/images/common/buttons/button_1.png) 3 3 3 3 fill;
        position: relative;
        border-image-width: 3px 3px 3px 3px;
        font-family: Goldfish;
        color: #FFFFFF;
        font-size: 9px;
        height: 25px;
        cursor: pointer;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 6px;
        width: fit-content;
    }
    .Habbo-Button__Button--1:hover {
        border-image: url(../../assets/images/common/buttons/button_1_hover.png) 3 3 3 3 fill;
        border-image-width: 3px 3px 3px 3px;
    }
    .Habbo-Button__Button--1:active {
        border-image: url(../../assets/images/common/buttons/button_1.png) 3 3 3 3 fill;
        border-image-width: 3px 3px 3px 3px;
        filter:  brightness(0) invert(1);
    }

    .Habbo-Button__Button--2 {
        border-image: url(../../assets/images/common/buttons/button_2.png) 4 4 4 4 fill;
        position: relative;
        border-image-width: 4px 4px 4px 4px;
        font-family: Goldfish;
        color: #000000;
        font-size: 9px;
        height: 22px;
        cursor: pointer;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        width: fit-content;
    }
    .Habbo-Button__Button--2:hover {
        border-image: url(../../assets/images/common/buttons/button_2_hover.png) 4 4 4 4 fill;
        border-image-width: 4px 4px 4px 4px;
    }
    .Habbo-Button__Button--2:active {
        border-image: url(../../assets/images/common/buttons/button_2.png) 4 4 4 4 fill;
        border-image-width: 4px 4px 4px 4px;
        opacity: .5;
    }

</style>

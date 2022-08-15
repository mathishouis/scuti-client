<template>
    <furniture-info-stand-widget v-if="getSelectedItem !== undefined"/>
    <div class="Habbo-Renderer" id="Habbo-Renderer"></div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import FurnitureInfoStandWidget from "./widgets/infostand/FurnitureInfoStandWidget.vue";
    import {mapGetters} from "vuex";

    export default defineComponent({
        components: {
            FurnitureInfoStandWidget
        },
        computed: {
            ...mapGetters("Room/InfoStands", ["getSelectedItem"]),
        }
    });
</script>

<style scoped>
    .Habbo-Renderer {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>
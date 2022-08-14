<template>
    <furniture-widget/>
    <div class="Habbo-Renderer" id="Habbo-Renderer"></div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import FurnitureWidget from "./widgets/furniture/FurnitureWidget.vue";

    export default defineComponent({
        components: {
            FurnitureWidget,
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
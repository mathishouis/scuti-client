<template>
    <div class="Habbo-Landing-View" :style="{ backgroundImage: 'url(' + __config('game.landing_view.images.background_gradient.url') + ')' }">
        <div class="Habbo-Landing-View__Drape" :style="{ backgroundImage: 'url(' + __config('game.landing_view.images.background_drape.url') + ')' }">
        </div>
        <div class="Habbo-Landing-View__Right" :style="{ backgroundImage: 'url(' + __config('game.landing_view.images.background_right.url') + ')' }">
        </div>
        <div class="Habbo-Landing-View__Left" :style="{ backgroundImage: 'url(' + __config('game.landing_view.images.background_left.url') + ')' }">
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({

    });
</script>

<style scoped>
    .Habbo-Landing-View {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-color: #AAE0F0;
    }
    .Habbo-Landing-View:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 47px;
        background-color: #2f2d2b;
        bottom: 0;
    }
    .Habbo-Landing-View .Habbo-Landing-View__Drape {
        width: 145px;
        height: 200px;
        position: fixed;
        top: 0;
        left: 100px;
    }
    .Habbo-Landing-View .Habbo-Landing-View__Right {
        width: 526px;
        height: 451px;
        position: fixed;
        bottom: 47px;
        right: 0px;
        background-repeat: no-repeat;
        background-position: top right;
    }
    .Habbo-Landing-View .Habbo-Landing-View__Left {
        width: 1006px;
        height: 998px;
        position: fixed;
        bottom: 47px;
        left: 0px;
        background-repeat: no-repeat;
        background-position: bottom left;
        pointer-events: none;
    }
</style>
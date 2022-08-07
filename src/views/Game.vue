<template>
    <div class="Habbo-Game">
        <navigator v-if="navigatorVisible"></navigator>
        <toolbar></toolbar>
        <landing-view v-if="landingViewVisible"></landing-view>
        <renderer></renderer>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {mapGetters} from "vuex";

    export default defineComponent({
        computed: {
            ...mapGetters("Navigator", { navigatorVisible: "isVisible"}),
            ...mapGetters("LandingView", { landingViewVisible: "isVisible"}),
        }
    });
</script>

<style scoped>
    .Habbo-Game {
        width: 100%;
        height: 100%;
        position: fixed;
    }
</style>
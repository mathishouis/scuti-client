<template>
    <div class="Habbo-Game">
        <navigator v-if="navigatorVisible"></navigator>
        <inventory v-if="inventoryVisible"></inventory>
        <toolbar></toolbar>
        <landing-view v-if="landingViewVisible"></landing-view>
        <room></room>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {mapGetters} from "vuex";

    import Room from "../components/room/Room.vue";
    import LandingView from "../components/landingview/LandingView.vue";
    import Navigator from "../components/navigator/Navigator.vue";
    import Toolbar from "../components/toolbar/Toolbar.vue";
    import Inventory from "../components/inventory/Inventory.vue";

    export default defineComponent({
        components: {
            Room,
            LandingView,
            Navigator,
            Toolbar,
            Inventory
        },
        computed: {
            ...mapGetters("Navigator", { navigatorVisible: "isVisible"}),
            ...mapGetters("Inventory", { inventoryVisible: "isVisible"}),
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
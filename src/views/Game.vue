<template>
    <div class="Habbo-Game">
        <navigator v-if="isVisible"></navigator>
        <toolbar></toolbar>
        <landing-view></landing-view>
        <renderer></renderer>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {mapGetters} from "vuex";

    export default defineComponent({
        computed: {
            ...mapGetters("Navigator", ["isVisible"]),
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
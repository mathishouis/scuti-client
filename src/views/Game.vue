<template>
    <div class="Habbo-Game">
        <navigator v-if="$store.getters.getVisible('navigator')"></navigator>
        <toolbar></toolbar>
        <renderer></renderer>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
    });
</script>

<style scoped>
    .Habbo-Game {
        width: 100%;
        height: 100%;
        position: fixed;
    }
</style>
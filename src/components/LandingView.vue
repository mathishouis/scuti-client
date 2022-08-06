<template>
    <div class="Habbo-Hotel-View">

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({

    });
</script>

<style scoped>
    .Habbo-Hotel-View {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-color: #AAE0F0;
    }
    .Habbo-Hotel-View:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 47px;
        background-color: #2f2d2b;
        bottom: 0;
    }
</style>
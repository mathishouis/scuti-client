<template>
    Scuti :D
    <window :width="564" :height="495" title="Navigateur">
        <tabs :tabs="[
                {
                    id: 'all',
                    title: 'Mobilier',
                    slot: 'all-content'
                },
                {
                    id: 'validation',
                    title: 'Louables',
                    slot: 'validate-content'
                },

            ]" :selected-tab="0" large>
            <template v-slot:all-content>
                cc
            </template>
            <template v-slot:validate-content>
                2
            </template>
        </tabs>
    </window>
    <toolbar></toolbar>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({

    });
</script>

<style scoped>

</style>
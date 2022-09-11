<template>
    <window :id="3" width="490px" height="342px" :title="__locale('inventory.title')" @close="close" resizable-y draggable>
        <div class="Habbo-Inventory__Tab-Container">
            <div class="Habbo-Inventory__Tabs">
                <tabs :tabs="[
                    {
                        id: 'furnitures',
                        title: 'Mobilier'
                    },
                    {
                        id: 'pets',
                        title: 'Animaux & bébés'
                    },
                    {
                        id: 'badges',
                        title: 'Badges acquis'
                    },
                    {
                        id: 'bots',
                        title: 'Bots'
                    }
                ]" :selected-tab="0" @change="updateView($event)"/>
            </div>
        </div>
        <inventory-search-widget/>

    </window>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import {mapGetters, mapMutations} from "vuex";

    import InventorySearchWidget from "./widgets/InventorySearchWidget.vue";

    export default defineComponent({
        components: {
            InventorySearchWidget
        },

        data() {

        },

        methods: {
            ...mapMutations("Inventory", ["setVisible"]),
            close(): void {
                this.setVisible(false);
            },
        },
        computed: {

        },
        mounted() {

        }
    });
</script>

<style scoped>
    .Habbo-Inventory__Tab-Container {
        height: 32px;
        width: 100%;
        margin-left: 0px;
        border-bottom: 1px solid #000000;
        margin-top: 1px;
        position: relative;
    }
    .Habbo-Inventory__Tab-Container::before {
        content: "";
        height: 1px;
        width: 100%;
        background-color: #fff;
        position: absolute;
        bottom: -2px;
        left: 0;
    }
    .Habbo-Inventory__Tabs {
        bottom: -1px;
        position: absolute;
        width: 323px;
        margin-bottom: 1px;
    }
</style>
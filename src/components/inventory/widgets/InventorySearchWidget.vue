<template>
    <card :id="8" class="Habbo-Inventory__Search-Panel">
        <textfield class="Habbo-Inventory__Search-Textfield" width="139px" v-model:value="searchQuery" @change="search"/>
        <selection-list class="Habbo-Navigator__Inventory-Filter" :items="[
                { name: 'Tout type', value: 'all', selected: true },
                { name: __locale('navigator.filter.room.name'), value: 'roomname' },
                { name: __locale('navigator.filter.owner'), value: 'owner' },
                { name: __locale('navigator.filter.tag'), value: 'tag' },
                { name: __locale('navigator.filter.group'), value: 'group' }
            ]" width="119px" v-model:value="searchCategory" @change="search"/>
        <selection-list class="Habbo-Navigator__Inventory-Filter" :items="[
                { name: 'Inventaire', value: 'all', selected: true },
                { name: __locale('navigator.filter.room.name'), value: 'roomname' },
                { name: __locale('navigator.filter.owner'), value: 'owner' },
                { name: __locale('navigator.filter.tag'), value: 'tag' },
                { name: __locale('navigator.filter.group'), value: 'group' }
            ]" width="119px" v-model:value="searchCategory" @change="search"/>
        <div class="Habbo-Navigator__Refresh-Button" v-if="searchQuery !== ''" @click="search">
        </div>
    </card>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import {NewNavigatorSearchMessageComposer} from '../../../websockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer';
    import {mapGetters} from "vuex";

    export default defineComponent({

        data() {
            return {
                searchCategory: 'all',
                searchQuery: ''
            }
        },

        methods: {
            ...mapGetters("Navigator", ["getView"]),
            search(): void {
                this.$store.getters.getWebsocket.sendMessageComposer(new NewNavigatorSearchMessageComposer(this.getView, (this.searchCategory !== 'all' ? this.searchCategory : '') + (this.searchCategory !== 'all' ? ':' : '') + this.searchQuery));
            }
        }

    });
</script>

<style scoped>

    .Habbo-Inventory__Search-Panel {
        width: calc(100% - 10px);
        height: 25px;
        position: absolute;
        margin-left: 5px;
        margin-top: 4px;
        display: flex;
        gap: 7px;
    }
    .Habbo-Inventory__Search-Textfield {
        height: 20px;
        margin-top: -3px;
        margin-left: -2px;
    }
    .Habbo-Navigator__Inventory-Filter {
        margin-top: -4px;
        margin-bottom: -4px;
    }

</style>
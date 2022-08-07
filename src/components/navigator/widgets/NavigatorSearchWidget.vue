<template>
    <div class="Habbo-Navigator__Search-Panel">
        <selection-list class="Habbo-Navigator__Search-Filter" :items="[
                { name: __locale('navigator.filter.anything'), value: 'all', selected: true },
                { name: __locale('navigator.filter.room.name'), value: 'roomname' },
                { name: __locale('navigator.filter.owner'), value: 'owner' },
                { name: __locale('navigator.filter.tag'), value: 'tag' },
                { name: __locale('navigator.filter.group'), value: 'group' }
            ]" width="104px" v-model:value="searchCategory" @change="search"/>
        <tooltip :tooltip="__locale('navigator.tooltip.filter.input')">
            <textfield class="Habbo-Navigator__Search-Textfield" width="233px" :placeholder="__locale('navigator.filter.input.placeholder')" v-model:value="searchQuery" @change="search"/>
        </tooltip>
        <div class="Habbo-Navigator__Refresh-Button" v-if="searchQuery !== ''" @click="search">
        </div>
    </div>
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

    .Habbo-Navigator__Search-Panel {
        width: 396px;
        height: 24px;
        position: absolute;
        right: 9px;
        margin-top: 9px;
        display: flex;
        gap: 13px;
    }

    .Habbo-Navigator__Search-Panel .Habbo-Navigator__Refresh-Button {
        width: 25px;
        height: 23px;
        background-image: url(../../../assets/images/navigator/buttons/refresh_search.png);
        margin-left: -6px;
        cursor: pointer;
    }

    .Habbo-Navigator__Search-Panel .Habbo-Navigator__Refresh-Button:hover {
        background-position: 0 -23px;
    }

    .Habbo-Navigator__Search-Panel .Habbo-Navigator__Refresh-Button:active {
        background-position: 0 -46px;
    }

</style>
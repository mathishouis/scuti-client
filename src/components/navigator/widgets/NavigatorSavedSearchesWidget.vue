<template>
    <div class="Habbo-Navigator__Left-Panel">
        <div class="Habbo-Navigator__Header">
            <div class="Habbo-Navigator__Title">
                {{ __locale('navigator.quick.links.title') }}
            </div>
        </div>
        <tooltip :tooltip="__locale('navigator.tooltip.open.saved.search')" v-for="savedSearch in getSearches">
            <div class="Habbo-Navigator__Saved-Search">
                <span @click="searchSavedSearch(savedSearch.view, '')">{{ savedSearch.view }}</span>
                <div class="Habbo-Navigator__Remove-Button" @click="removeSavedSearch(savedSearch.id)">
                </div>
            </div>
        </tooltip>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import {NewNavigatorSearchMessageComposer} from '../../../websockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer';
    import {DeleteNavigatorSavedSearchMessageComposer} from '../../../websockets/messages/outgoing/navigator/updated/DeleteNavigatorSavedSearchMessageComposer';

    import {mapGetters} from "vuex";

    export default defineComponent({

        methods: {
            removeSavedSearch(id: number): void {
                this.$store.getters.getWebsocket.sendMessageComposer(new DeleteNavigatorSavedSearchMessageComposer(id));
            },

            searchSavedSearch(category: string, data: string): void {
                this.$store.getters.getWebsocket.sendMessageComposer(new NewNavigatorSearchMessageComposer(category, data));
            },
        },

        computed: {
            ...mapGetters("Navigator/Searches", ["getSearches"]),
        }

    });
</script>

<style scoped>

    .Habbo-Navigator__Left-Panel {
        width: 141px;
        height: 440px;
        background-color: #FFFFFF;
        position: absolute;
        left: 3px;
        margin-top: 6px;
        border-radius: 8px 8px 0 0;
    }

    .Habbo-Navigator__Left-Panel .Habbo-Navigator__Header {
        width: 100%;
        height: 21px;
        background-image: url(../../../assets/images/navigator/saved_searches_header.png);
        position: relative;
    }

    .Habbo-Navigator__Left-Panel .Habbo-Navigator__Header .Habbo-Navigator__Title {
        font-family: UbuntuBold;
        color: #ffffff;
        font-size: 9pt;
        white-space: nowrap;
        left: 22px;
        position: absolute;
        max-width: calc(100% - 27px);
        overflow: hidden;
        top: 2px;
    }

    .Habbo-Navigator__Left-Panel .Habbo-Navigator__Saved-Search {
        height: 20px;
        width: calc(100% - 6px);
        color: #000;
        font-family: Ubuntu Light;
        font-size: 9.4pt;
        line-height: 10px;
        white-space: nowrap;
        overflow-y: visible;
        padding: 8px 0px 2px 6px;
        cursor: pointer;
        position: relative;
    }

    .Habbo-Navigator__Left-Panel .Habbo-Navigator__Saved-Search .Habbo-Navigator__Remove-Button {
        width: 16px;
        height: 16px;
        background-image: url(../../../assets/images/navigator/buttons/saved_search_remove.png);
        position: absolute;
        right: 1px;
        top: 5px;
        display: none;
    }

    .Habbo-Navigator__Left-Panel .Habbo-Navigator__Saved-Search:hover .Habbo-Navigator__Remove-Button {
        display: block;
    }

    .Habbo-Navigator__Left-Panel .Habbo-Navigator__Saved-Search .Habbo-Navigator__Remove-Button:hover {
        display: block;
        background-position: 0 -16px;
    }

    .Habbo-Navigator__Left-Panel .Habbo-Navigator__Saved-Search .Habbo-Navigator__Remove-Button:active {
        display: block;
        background-position: 0 -32px;
    }

</style>
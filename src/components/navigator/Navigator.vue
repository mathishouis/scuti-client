<template>
    <window :width="panel ? 578 : 425" :height="535" :title="isLoading ? __locale('navigator.title.is.busy') : __locale('navigator.title')" @close="close" resizable-y>
        <div class="Habbo-Navigator__Tab-Container">
            <tooltip :tooltip="__locale('navigator.tooltip.left.show.hide')">
                <div class="Habbo-Navigator__Saved-Search-Icon" @click="togglePanel">
                </div>
            </tooltip>
            <div class="Habbo-Navigator__Tabs" :style="{ left: panel ? '117px' : '37px' }">
                <tabs :tabs="getTabs" :selected-tab="getSelectedTab" @change="updateTab($event)" large/>
            </div>
        </div>
        <navigator-search-widget/>
        <navigator-saved-searches-widget v-if="panel"/>
        <navigator-search-result-widget/>
        <div class="Habbo-Navigator__Action-Panel">
            <tooltip :tooltip="__locale('navigator.tooltip.create.room')">
                <div class="Habbo-Navigator__Create-Room-Button">
                    {{ __locale('navigator.create.room') }}
                </div>
            </tooltip>
            <tooltip :tooltip="__locale('navigator.tooltip.promote.room')">
                <div class="Habbo-Navigator__Create-Event-Button">
                    {{ __locale('navigator.create.event') }}
                </div>
            </tooltip>
        </div>
    </window>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import {NavigatorSearchMessageComposer} from '../../websockets/messages/outgoing/navigator/updated/NavigatorSearchMessageComposer';

    import NavigatorSearchWidget from './widgets/NavigatorSearchWidget.vue';
    import NavigatorSavedSearchesWidget from './widgets/NavigatorSavedSearchesWidget.vue';
    import NavigatorSearchResultWidget from './widgets/NavigatorSearchResultWidget.vue';

    export default defineComponent({
        components: {
            NavigatorSearchWidget,
            NavigatorSavedSearchesWidget,
            NavigatorSearchResultWidget
        },

        data() {
            return {
                panel: true,
            }
        },

        methods: {
            togglePanel(): void {
                this.panel = !this.panel;
            },
            updateTab(tab: string): void {
                this.$store.commit('setSelectedTab', tab);
                this.$store.getters.getWebsocket.sendMessageComposer(new NavigatorSearchMessageComposer(tab));
            },
            close(): void {
                this.$store.commit('setVisible', { name: 'navigator', visible: false });
            },
        },
        computed: {
            getTabs(): [] {
                let tabs = this.$store.getters.getTabs.filter(tab => tab.header);
                let finalTabs = [];
                tabs.forEach((tab: { name: string, header: boolean, categories: [] }) => {
                    finalTabs.push({
                        id: tab.name,
                        title: this.__locale('navigator.toplevelview.' + tab.name),
                        tooltip: this.__locale('navigator.tooltip.select.tab')
                    });
                });
                return finalTabs;
            },
            getSelectedTab(): number {
                let tab = this.$store.getters.getTabs.find((tab) => tab.name === this.$store.getters.getSelectedTab);
                return this.$store.getters.getTabs.indexOf(tab);
            },
            isLoading(): boolean {
                return this.$store.getters.getLoading;
            },
        },
        mounted() {
            this.$store.getters.getWebsocket.sendMessageComposer(new NavigatorSearchMessageComposer(this.$store.getters.getSelectedTab));
        }
    });
</script>

<style scoped>
    .Habbo-Navigator__Tab-Container {
        height: 34px;
        width: calc(100% + 10px);
        margin-left: -5px;
        border-bottom: 1px solid #000000;
        padding-top: 4px;
        margin-top: -2px;
        background-color: #FFFFFF;
        position: relative;
    }
    .Habbo-Navigator__Tabs {
        bottom: -1px;
        position: absolute;
        width: 323px;
    }
    .Habbo-Navigator__Saved-Search-Icon {
        width: 18px;
        height: 18px;
        background-image: url(../../assets/images/navigator/buttons/saved_search.png);
        left: 16px;
        top: 9px;
        position: absolute;
        cursor: pointer;
    }
    .Habbo-Navigator__Action-Panel {
        width: 394px;
        height: 60px;
        position: absolute;
        right: 15px;
        bottom: 12px;
        display: flex;
        flex-direction: row;
        gap: 16px;
    }
    .Habbo-Navigator__Action-Panel .Habbo-Navigator__Create-Room-Button {
        width: 189px;
        height: 60px;
        background-image: url(../../assets/images/navigator/buttons/create_room.png);
        cursor: pointer;
        font-family: UbuntuBold;
        color: #ffffff;
        font-size: 9.4pt;
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
        padding-top: 23px;
        padding-left: 78px;
        white-space: nowrap;
        overflow: hidden;
    }
    .Habbo-Navigator__Action-Panel .Habbo-Navigator__Create-Event-Button {
        width: 189px;
        height: 60px;
        background-image: url(../../assets/images/navigator/buttons/create_event.png);
        cursor: pointer;
        font-family: UbuntuBold;
        color: #ffffff;
        font-size: 9.4pt;
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
        padding-top: 23px;
        padding-left: 78px;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
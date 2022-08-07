<template>
    <window :width="panel ? 578 : 425" :height="535" :title="getTitle" @close="close" resizable-y>
        <div class="Habbo-Navigator__Tab-Container">
            <tooltip tooltip="Changer la visibilité du panneau de gauche">
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
            <tooltip tooltip="Créer un nouvel appart !">
                <div class="Habbo-Navigator__Create-Room-Button">
                    Créer un appart
                </div>
            </tooltip>
            <tooltip tooltip="Fais la promo de ton appart">
                <div class="Habbo-Navigator__Create-Event-Button">
                    Créer un évènement
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
                new NavigatorSearchMessageComposer(this.$store.getters.getWebsocket.connection,tab).compose();
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
                        title: tab.name,
                        tooltip: tab.name
                    });
                });
                return finalTabs;
            },
            getTitle(): string {
                return this.$store.getters.getTitle('navigator');
            },
            getSelectedTab(): number {
                let tab = this.$store.getters.getTabs.find((tab) => tab.name === this.$store.getters.getSelectedTab);
                return this.$store.getters.getTabs.indexOf(tab);
            }
        },
        mounted() {
            new NavigatorSearchMessageComposer(this.$store.getters.getWebsocket.connection, this.$store.getters.getSelectedTab).compose();
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
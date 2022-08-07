<template>
    <window :width="panel ? 578 : 425" :height="535" :title="isLoading ? __locale('navigator.title.is.busy') : __locale('navigator.title')" @close="close" resizable-y>
        <div class="Habbo-Navigator__Tab-Container">
            <tooltip :tooltip="__locale('navigator.tooltip.left.show.hide')">
                <div class="Habbo-Navigator__Saved-Search-Icon" @click="togglePanel">
                </div>
            </tooltip>
            <div class="Habbo-Navigator__Tabs" :style="{ left: panel ? '117px' : '37px' }">
                <tabs :tabs="getProcessedViews" :selected-tab="getCurrentViewIndex" @change="updateView($event)" large/>
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
    import {mapGetters, mapMutations} from "vuex";

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
            ...mapMutations("Navigator", ["setVisible"]),
            ...mapMutations("Navigator/Views", ["setCurrentView"]),
            ...mapGetters("Navigator/Views", ["getViews", "getCurrentView"]),
            togglePanel(): void {
                this.panel = !this.panel;
            },
            updateView(view: string): void {
                this.setCurrentView(view);
                this.$store.getters.getWebsocket.sendMessageComposer(new NavigatorSearchMessageComposer(view));
            },
            close(): void {
                this.setVisible(false);
            },
        },
        computed: {
            ...mapGetters("Navigator", ["isLoading"]),
            ...mapGetters("Navigator/Views", ["getViews", "getCurrentView"]),
            getProcessedViews(): {}[] {
                let views: {}[] = [];
                console.log(this.getViews);
                this.getViews.forEach((view: string) => {
                    views.push({
                        id: view,
                        title: this.__locale('navigator.toplevelview.' + view),
                        tooltip: this.__locale('navigator.tooltip.select.tab')
                    });
                });
                return views;
            },
            getCurrentViewIndex(): number {
                return this.getViews.findIndex(view => view === this.getCurrentView);
            }
        },
        mounted() {
            this.$store.getters.getWebsocket.sendMessageComposer(new NavigatorSearchMessageComposer(this.getCurrentView));
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
<template>
    <window :width="panel ? 578 : 425" :height="535" :title="getTitle" @close="close" resizable-y>
        <div class="Habbo-Navigator__Tab-Container">
            <div class="Habbo-Navigator__Saved-Search-Icon" @click="togglePanel">
            </div>
            <div class="Habbo-Navigator__Tabs" :style="{ left: panel ? '117px' : '37px' }">
                <tabs :tabs="getTabs" :selected-tab="getSelectedTab" @change="updateTab($event)" large/>
            </div>
        </div>
        <div class="Habbo-Navigator__Left-Panel" v-if="panel">
            <tooltip tooltip="Recherche avec les paramètres sauvegardés">
                <div class="Habbo-Navigator__Header">
                    <div class="Habbo-Navigator__Title">
                        Sauvegarder les recherches
                    </div>
                </div>
            </tooltip>
            <tooltip tooltip="Recherche avec les paramètres sauvegardés" v-for="savedSearch in getSavedSearches">
                <div class="Habbo-Navigator__Saved-Search">
                    <span @click="searchSavedSearch(savedSearch.view, '')">{{ savedSearch.view }}</span>
                    <div class="Habbo-Navigator__Remove-Button" @click="removeSavedSearch(savedSearch.id)">
                    </div>
                </div>
            </tooltip>
        </div>
        <div class="Habbo-Navigator__Search-Panel">
            <selection-list class="Habbo-Navigator__Search-Filter" :items="[
                { name: 'Tout', value: 'all', selected: true },
                { name: 'Nom d\'appart', value: 'roomname' },
                { name: 'Propriétaire', value: 'owner' },
                { name: 'Tag', value: 'tag' },
                { name: 'Groupe', value: 'group' }
            ]" width="104px" v-model:value="searchCategory" @change="search"/>
            <textfield class="Habbo-Navigator__Search-Textfield" width="233px" placeholder="Filtrer apparts par..." v-model:value="searchQuery" @change="search"/>
            <div class="Habbo-Navigator__Refresh-Button" v-if="searchQuery !== ''" @click="search">
            </div>
        </div>
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
        <div class="Habbo-Navigator__Content-Panel">
            <scrollbox width="100%" height="330px">
                <div class="Habbo-Navigator__Content" :class="[isLoading ? 'Habbo-Navigator__Content--loading' : '']">
                    <div class="Habbo-Navigator__Category" v-for="category in getCategories">
                        <div class="Habbo-Navigator__Header">
                            <tooltip tooltip="Elargir catégorie">
                                <div class="Habbo-Navigator__Show-Button Habbo-Navigator__Show-Button--active">
                                </div>
                            </tooltip>
                            <div class="Habbo-Navigator__Title">
                                {{ category.name }}<span v-if="category.id === 'query'">Recherche</span> {{ category.minimised }}
                            </div>
                            <div class="Habbo-Navigator__Button-Group">
                                <tooltip tooltip="Ajouter aux recherches sauvegardées">
                                    <div class="Habbo-Navigator__Saved-Search-Button" @click="addSavedSearch(category.id, '')">
                                    </div>
                                </tooltip>
                                <tooltip tooltip="Ajouter aux recherches sauvegardées">
                                    <div class="Habbo-Navigator__More-Results-Button" @click="showMoreResults(category.id)">
                                    </div>
                                </tooltip>
                                <tooltip tooltip="Ajouter aux recherches sauvegardées">
                                    <div class="Habbo-Navigator__Display-Button" :class="[getCategoryViewMode(category.id) === 1 ? 'Habbo-Navigator__Display-Button--active' : '']" @click="toggleViewMode(category.id)">
                                    </div>
                                </tooltip>
                            </div>
                        </div>
                        <div class="Habbo-Navigator__Room-List-Thumbnail" v-if="getCategoryViewMode(category.id) === 1">
                            <room-info-thumbnail :name="room.name" :user-count="room.userCount" :max-users="room.maxUsers" :skip-auth="room.skipAuth" v-for="room in category.rooms" :key="room.id"/>
                        </div>
                        <div class="Habbo-Navigator__Room-List-Line" v-else>
                            <div class="Habbo-Navigator__Room" v-for="room in category.rooms" :key="room.id">
                                <user-count class="Habbo-Navigator__Room-User-Count" :user-count="room.userCount" :max-user="room.maxUsers"/>
                                <div class="Habbo-Navigator__Room-Info-Button">
                                </div>
                                <div class="Habbo-Navigator__Room-Group-Icon">
                                </div>
                                <div class="Habbo-Navigator__Room-State-Icon" :class="[room.skipAuth === 1 ? 'Habbo-Navigator__Room-State-Icon--locked' : room.skipAuth === 2 ? 'Habbo-Navigator__Room-State-Icon--password' : room.skipAuth === 3 ? 'Habbo-Navigator__Room-State-Icon--invisible' : '']">
                                </div>
                                <div class="Habbo-Navigator__Room-Title">
                                    {{ room.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </scrollbox>
        </div>
    </window>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { mapState } from "vuex";
    import {NavigatorSearchMessageComposer} from "../../../websockets/messages/outgoing/navigator/updated/NavigatorSearchMessageComposer";
    import {DeleteNavigatorSavedSearchMessageComposer} from "../../../websockets/messages/outgoing/navigator/updated/DeleteNavigatorSavedSearchMessageComposer";
    import {SaveNavigatorSearchMessageComposer} from "../../../websockets/messages/outgoing/navigator/updated/SaveNavigatorSearchMessageComposer";
    import {NewNavigatorSearchMessageComposer} from "../../../websockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer";
    import {NavigatorSaveViewModeMessageComposer} from "../../../websockets/messages/outgoing/navigator/updated/NavigatorSaveViewModeMessageComposer";

    export default defineComponent({
        data() {
            return {
                panel: true,
                searchQuery: '',
                searchCategory: 'all'
            }
        },
        //computed: mapState(['getTabs']),
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
            removeSavedSearch(id: number): void {
                new DeleteNavigatorSavedSearchMessageComposer(this.$store.getters.getWebsocket.connection,id).compose();
            },
            addSavedSearch(view: string, searchQuery: string): void {
                new SaveNavigatorSearchMessageComposer(this.$store.getters.getWebsocket.connection, view, searchQuery).compose();
            },
            searchSavedSearch(category: string, data: string): void {
                new NewNavigatorSearchMessageComposer(this.$store.getters.getWebsocket.connection, category, data).compose();
            },
            showMoreResults(view: string): void {
                new NewNavigatorSearchMessageComposer(this.$store.getters.getWebsocket.connection, view, '').compose();
            },
            toggleViewMode(category: string): void {
                if(this.$store.getters.getCategoryViewMode({ tab: this.$store.getters.getSelectedTab, category: category }) === 1) {
                    this.$store.commit('setCategoryViewMode', { tab: this.$store.getters.getSelectedTab, category: category, view: 0 });
                    new NavigatorSaveViewModeMessageComposer(this.$store.getters.getWebsocket.connection, category, 0).compose();
                } else {
                    this.$store.commit('setCategoryViewMode', { tab: this.$store.getters.getSelectedTab, category: category, view: 1 });
                    new NavigatorSaveViewModeMessageComposer(this.$store.getters.getWebsocket.connection, category, 1).compose();
                }
            },
            getCategoryViewMode(category: string): string {
                return this.$store.getters.getCategoryViewMode({ tab: this.$store.getters.getSelectedTab, category: category });
            },
            search(): void {
                if(this.searchCategory !== 'all') {
                    new NewNavigatorSearchMessageComposer(this.$store.getters.getWebsocket.connection, this.$store.getters.getSelectedTab, this.searchCategory + ':' + this.searchQuery).compose();
                } else {
                    new NewNavigatorSearchMessageComposer(this.$store.getters.getWebsocket.connection, this.$store.getters.getSelectedTab, this.searchQuery).compose();
                }
            }
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
            getCategories(): [] {
                let tabs = this.$store.getters.getTabs;
                return tabs.find((tab) => tab.name === this.$store.getters.getSelectedTab).categories;
            },
            getTitle(): string {
                return this.$store.getters.getTitle('navigator');
            },
            isLoading(): boolean {
                return this.$store.getters.getLoading;
            },
            getSavedSearches(): string {
                return this.$store.getters.getSavedSearches;
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
        background-image: url(../../../../static/images/saved_search_icon.png);
        left: 16px;
        top: 9px;
        position: absolute;
        cursor: pointer;
    }
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
        background-image: url(../../../../static/images/navigator_left_panel_header.png);
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
        background-image: url(../../../../static/images/saved_search_remove.png);
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
        background-image: url(../../../../static/images/saved_search_remove_hover.png);
    }
    .Habbo-Navigator__Left-Panel .Habbo-Navigator__Saved-Search .Habbo-Navigator__Remove-Button:active {
        display: block;
        background-image: url(../../../../static/images/saved_search_remove_active.png);
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
        background-image: url(../../../../static/images/create_room_button.png);
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
        background-image: url(../../../../static/images/create_event_button.png);
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
        background-image: url(./../../../../static/images/refresh_search_button.png);
        margin-left: -6px;
        cursor: pointer;
    }
    .Habbo-Navigator__Search-Panel .Habbo-Navigator__Refresh-Button:hover {
        background-position: 0 -23px;
    }
    .Habbo-Navigator__Search-Panel .Habbo-Navigator__Refresh-Button:active {
        background-position: 0 -46px;
    }
    .Habbo-Navigator__Content-Panel {
        width: 405px;
        height: 330px;
        right: 1px;
        margin-top: 41px;
        position: absolute;
    }
    .Habbo-Navigator__Content-Panel .Habbo-Navigator__Content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .Habbo-Navigator__Content-Panel .Habbo-Navigator__Content .Habbo-Navigator__Content--loading {
        opacity: .5;
    }
    .Habbo-Navigator__Content-Panel .Habbo-Navigator__Content .Habbo-Navigator__Category {
        background-color: #FFFFFF;
        width: 100%;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Header {
        width: 100%;
        height: 28px;
        display: flex;
        flex-direction: row;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Show-Button {
        width: 10px;
        height: 26px;
        margin-left: 6px;
        margin-right: 7px;
        background-image: url(../../../../static/images/show_button.png);
        cursor: pointer;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Show-Button.Habbo-Navigator__Show-Button--active {
        background-position: -10px 0;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Title {
        color: #15597E;
        font-size: 10.8pt;
        font-family: Ubuntu;
        padding-top: 4px;
        cursor: pointer;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Button-Group {
        padding: 5px 7px;
        margin-left: auto;
        display: flex;
        flex-direction: row-reverse;
        gap: 5px;
        align-items: center;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Button-Group .Habbo-Navigator__Saved-Search-Button {
        width: 18px;
        height: 18px;
        background-image: url(../../../../static/images/saved_search_icon.png);
        cursor: pointer;
        position: relative;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Button-Group .Habbo-Navigator__More-Results-Button {
        width: 11px;
        height: 11px;
        background-image: url(../../../../static/images/more_results_button.png);
        cursor: pointer;
        position: relative;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Button-Group .Habbo-Navigator__More-Results-Button.Habbo-Navigator__More-Results-Button--active {
        background-position: -11px 0;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Button-Group .Habbo-Navigator__Display-Button {
        width: 11px;
        height: 11px;
        background-image: url(../../../../static/images/display_button.png);
        cursor: pointer;
        position: relative;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Button-Group .Habbo-Navigator__Display-Button.Habbo-Navigator__Display-Button--active {
        background-position: -11px 0;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Thumbnail {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        row-gap: 5px;
        column-gap: 7px;
        padding-top: 1px;
        padding-left: 4px;
        padding-bottom: 4px;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line {
        width: 100%;
        padding-left: 4px;
        padding-right: 1px;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line .Habbo-Navigator__Room {
        width: 100%;
        padding-top: 1px;
        padding-bottom: 1px;
        height: 20px;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line .Habbo-Navigator__Room:nth-child(2n+1) {
        background-color: #D5EDFF;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line .Habbo-Navigator__Room .Habbo-Navigator__Room-Info-Button {
        height: 18px;
        width: 18px;
        background-image: url(../../../../static/images/room_info_button.png);
        position: absolute;
        right: 6px;
        cursor: pointer;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line .Habbo-Navigator__Room .Habbo-Navigator__Room-Group-Icon {
         height: 11px;
         width: 13px;
         background-image: url(../../../../static/images/room_group_icon.png);
         position: absolute;
         right: 28px;
         top: 4px;
         cursor: pointer;
     }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line .Habbo-Navigator__Room .Habbo-Navigator__Room-State-Icon {
        height: 16px;
        width: 13px;
        position: absolute;
        right: 45px;
        top: 2px;
        cursor: pointer;
        background-image: url(../../../../static/images/room_locked_icon.png);
        display: none;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line .Habbo-Navigator__Room .Habbo-Navigator__Room-State-Icon.Habbo-Navigator__Room-State-Icon--locked {
        background-position: 0 0;
        display: block;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line .Habbo-Navigator__Room .Habbo-Navigator__Room-State-Icon.Habbo-Navigator__Room-State-Icon--password {
        background-position: 0 -32px;
        display: block;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line .Habbo-Navigator__Room .Habbo-Navigator__Room-State-Icon.Habbo-Navigator__Room-State-Icon--invisible {
        background-position: 0 -16px;
        display: block;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line .Habbo-Navigator__Room .Habbo-Navigator__Room-User-Count {
        position: absolute;
        left: 0;
    }
    .Habbo-Navigator__Category .Habbo-Navigator__Room-List-Line .Habbo-Navigator__Room .Habbo-Navigator__Room-Title {
        position: absolute;
        left: 47px;
        color: #000000;
        font-size: 9.4pt;
        font-family: Ubuntu Light;
        top: 1px;
        line-height: 16px;
    }
</style>
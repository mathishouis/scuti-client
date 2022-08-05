<template>
    <window :width="panel ? 564 : 411" :height="495" title="Navigateur" resizable-y>
        <div class="Habbo-Navigator__Tab-Container">
            <div class="Habbo-Navigator__Saved-Search-Icon" @click="togglePanel">
            </div>
            <div class="Habbo-Navigator__Tabs" :style="{ left: panel ? '117px' : '37px' }">
                <tabs :tabs="[
                    {
                        id: 'all',
                        title: 'Public',
                        slot: 'all-content',
                        tooltip: 'Une vue des différents apparts de Habbo Hôtel'
                    },
                    {
                        id: 'validation',
                        title: 'Tous les apparts',
                        slot: 'validate-content',
                        tooltip: 'Une vue des différents apparts de Habbo Hôtel'
                    },
                    {
                        id: 'validation',
                        title: 'Events',
                        slot: 'validate-content',
                        tooltip: 'Une vue des différents apparts de Habbo Hôtel'
                    },
                    {
                        id: 'validation',
                        title: 'Mon monde',
                        slot: 'validate-content',
                        tooltip: 'Une vue des différents apparts de Habbo Hôtel'
                    }

                ]" :selected-tab="0" large/>
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
            <tooltip tooltip="Recherche avec les paramètres sauvegardés">
                <div class="Habbo-Navigator__Saved-Search">
                    Lieux Publics
                    <div class="Habbo-Navigator__Remove-Button">
                    </div>
                </div>
            </tooltip>
            <tooltip tooltip="Recherche avec les paramètres sauvegardés">
                <div class="Habbo-Navigator__Saved-Search">
                    Recommandé par toi
                    <div class="Habbo-Navigator__Remove-Button">
                    </div>
                </div>
            </tooltip>
            <tooltip tooltip="Recherche avec les paramètres sauvegardés">
                <div class="Habbo-Navigator__Saved-Search">
                    Mes apparts
                    <div class="Habbo-Navigator__Remove-Button">
                    </div>
                </div>
            </tooltip>
            <tooltip tooltip="Recherche avec les paramètres sauvegardés">
                <div class="Habbo-Navigator__Saved-Search">
                    Mes apparts préférés
                    <div class="Habbo-Navigator__Remove-Button">
                    </div>
                </div>
            </tooltip>
        </div>
        <div class="Habbo-Navigator__Search-Panel">
            <textfield class="Habbo-Navigator__Search-Textfield" :width="235" placeholder="Filtrer apparts par..."/>
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
    </window>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        data() {
            return {
                panel: true,
            }
        },
        methods: {
            togglePanel() {
                this.panel = !this.panel;
            }
        }
    });
</script>

<style scoped>
    .Habbo-Navigator__Tab-Container {
        height: 33px;
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
        width: 369px;
    }
    .Habbo-Navigator__Saved-Search-Icon {
        width: 18px;
        height: 18px;
        background-image: url(./../../static/images/saved_search_icon.png);
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
        background-image: url(./../../static/images/navigator_left_panel_header.png);
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
        height: 9px;
        width: calc(100% - 12px);
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
        background-image: url(./../../static/images/saved_search_remove.png);
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
        background-image: url(./../../static/images/saved_search_remove_hover.png);
    }
    .Habbo-Navigator__Left-Panel .Habbo-Navigator__Saved-Search .Habbo-Navigator__Remove-Button:active {
        display: block;
        background-image: url(./../../static/images/saved_search_remove_active.png);
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
        width: 111px;
        height: 37px;
        background-image: url(./../../static/images/create_room_button.png);
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
        width: 111px;
        height: 37px;
        background-image: url(./../../static/images/create_event_button.png);
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
        width: 364px;
        height: 24px;
        position: absolute;
        right: 41px;
        margin-top: 9px;
    }
    .Habbo-Navigator__Search-Panel .Habbo-Navigator__Search-Textfield {
        position: absolute;
        right: 0px;
    }
</style>
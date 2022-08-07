<template>
    <div class="Habbo-Navigator__Content-Panel">
        <scrollbox width="100%" height="330px">
            <div class="Habbo-Navigator__Content" :class="[isLoading ? 'Habbo-Navigator__Content--loading' : '']">
                <div class="Habbo-Navigator__Category" v-for="category in getCategories">
                    <div class="Habbo-Navigator__Header">
                        <tooltip :tooltip="getCategory(category.id).minimised ? __locale('navigator.tooltip.category.expand') : __locale('navigator.tooltip.category.collapse')">
                            <div class="Habbo-Navigator__Minimise-Button" :class="[getCategory(category.id).minimised ? '' : 'Habbo-Navigator__Minimise-Button--active']" @click="toggleMinimised(category.id)">
                            </div>
                        </tooltip>
                        <div class="Habbo-Navigator__Title" @click="toggleMinimised(category.id)">
                            {{ category.name }}<span v-if="category.id === 'query'">Recherche</span>
                        </div>
                        <div class="Habbo-Navigator__Button-Group">
                            <tooltip :tooltip="__locale('navigator.tooltip.add.saved.search')">
                                <div class="Habbo-Navigator__Saved-Search-Button" @click="addSavedSearch(category.id, '')">
                                </div>
                            </tooltip>
                            <tooltip :tooltip="__locale('navigator.tooltip.category.show.more')">
                                <div class="Habbo-Navigator__More-Results-Button" @click="showMoreResults(category.id)">
                                </div>
                            </tooltip>
                            <tooltip :tooltip="getCategory(category.id).view === 1 ? __locale('navigator.tooltip.rows') : __locale('navigator.tooltip.tiles')">
                                <div class="Habbo-Navigator__View-Mode-Button" :class="[getCategory(category.id).view === 1 ? 'Habbo-Navigator__View-Mode-Button--active' : '']" @click="toggleViewMode(category.id)">
                                </div>
                            </tooltip>
                        </div>
                    </div>
                    <div class="Habbo-Navigator__Room-List-Thumbnail" v-if="getCategory(category.id).view === 1 && !getCategory(category.id).minimised">
                        <navigator-layout-room-thumbnail-widget :id="room.id" :name="room.name" :owner-name="room.ownerName" :description="room.description" :trade="room.trade" :tags="room.tags" :user-count="room.userCount" :max-users="room.maxUsers" :skip-auth="room.skipAuth" v-for="room in category.rooms" :key="room.id"/>
                    </div>
                    <div class="Habbo-Navigator__Room-List-Line" v-else-if="!getCategory(category.id).minimised">
                        <navigator-layout-room-list-widget :id="room.id" :index="index" :name="room.name" :owner-name="room.ownerName" :description="room.description" :trade="room.trade" :tags="room.tags" :user-count="room.userCount" :max-users="room.maxUsers" :skip-auth="room.skipAuth" v-for="(room, index) in category.rooms" :key="room.id"/>
                    </div>
                </div>
            </div>
        </scrollbox>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import NavigatorLayoutRoomThumbnailWidget from './NavigatorLayoutRoomThumbnailWidget.vue';
    import NavigatorLayoutRoomListWidget from './NavigatorLayoutRoomListWidget.vue';

    import {SaveNavigatorSearchMessageComposer} from '../../../websockets/messages/outgoing/navigator/updated/SaveNavigatorSearchMessageComposer';
    import {NewNavigatorSearchMessageComposer} from '../../../websockets/messages/outgoing/navigator/updated/NewNavigatorSearchMessageComposer';
    import {NavigatorSaveViewModeMessageComposer} from '../../../websockets/messages/outgoing/navigator/updated/NavigatorSaveViewModeMessageComposer';

    import {mapGetters, mapMutations} from "vuex";

    export default defineComponent({

        components: {
            NavigatorLayoutRoomThumbnailWidget,
            NavigatorLayoutRoomListWidget
        },

        methods: {
            ...mapMutations("Navigator/Categories", ["setCategory"]),
            addSavedSearch(view: string, searchQuery: string): void {
                this.$store.getters.getWebsocket.sendMessageComposer(new SaveNavigatorSearchMessageComposer(view, searchQuery));
            },

            showMoreResults(view: string): void {
                this.$store.getters.getWebsocket.sendMessageComposer(new NewNavigatorSearchMessageComposer(view, ''));
            },

            toggleViewMode(id: string): void {
                let category: {} = this.getCategory(id);
                category.view = category.view === 1 ? 0 : 1;
                this.setCategory({ id: id, category: category });
                this.$store.getters.getWebsocket.sendMessageComposer(new NavigatorSaveViewModeMessageComposer(category.id, category.view));
            },

            toggleMinimised(id: string): void {
                let category: {} = this.getCategory(id);
                category.minimised = !category.minimised;
                this.setCategory({ id: id, category: category });
                // TODO: Send minimised packet (add support in emulator)
            },
        },

        computed: {
            ...mapGetters("Navigator/Categories", ["getCategories", "getCategory"]),
            ...mapGetters("Navigator", ["isLoading"]),
        }

    });
</script>

<style scoped>

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

    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Minimise-Button {
        width: 10px;
        height: 26px;
        margin-left: 6px;
        margin-right: 7px;
        background-image: url(../../../assets/images/navigator/buttons/minimise.png);
        cursor: pointer;
    }

    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Minimise-Button.Habbo-Navigator__Minimise-Button--active {
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
        background-image: url(../../../assets/images/navigator/buttons/saved_search.png);
        cursor: pointer;
        position: relative;
    }

    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Button-Group .Habbo-Navigator__More-Results-Button {
        width: 11px;
        height: 11px;
        background-image: url(../../../assets/images/navigator/buttons/more_results.png);
        cursor: pointer;
        position: relative;
    }

    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Button-Group .Habbo-Navigator__More-Results-Button.Habbo-Navigator__More-Results-Button--active {
        background-position: -11px 0;
    }

    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Button-Group .Habbo-Navigator__View-Mode-Button {
        width: 11px;
        height: 11px;
        background-image: url(../../../assets/images/navigator/buttons/view_mode.png);
        cursor: pointer;
        position: relative;
    }

    .Habbo-Navigator__Category .Habbo-Navigator__Header .Habbo-Navigator__Button-Group .Habbo-Navigator__View-Mode-Button.Habbo-Navigator__View-Mode-Button--active {
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

</style>
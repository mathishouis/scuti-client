<template>
    <teleport to="body">
        <card :id="5" class="Habbo-Navigator__Room-Info" :style="{ left: x + 24 + 'px', top: y + 8 + 'px' }">
            <card :id="6" class="Habbo-Navigator__Header">
                <navigator-room-thumbnail-widget width="112px" height="112px"/>
                <div class="Habbo-Navigator__Room-Group-Icon">
                </div>
                <div class="Habbo-Navigator__Room-Info-Panel">
                    <div class="Habbo-Navigator__Room-Name">
                        {{ name }}
                    </div>
                    <div class="Habbo-Navigator__Room-Description">
                        {{ description }}
                    </div>
                </div>
            </card>
            <div class="Habbo-Navigator__Room-Info-Panel">
                <div class="Habbo-Navigator__Left-Panel">
                    <tooltip :tooltip="__locale('navigator.tooltip.roominfo.owner')">
                        <div class="Habbo-Navigator__Owner-Profile">
                            <div class="Habbo-Navigator__Icon">
                            </div>
                            {{ ownerName }}
                        </div>
                    </tooltip>
                    <div class="Habbo-Navigator__Room-Settings">
                        <div class="Habbo-Navigator__Settings-Row">
                            <div class="Habbo-Navigator__Row-Left">
                                {{ __locale('navigator.roompopup.property.trading') }}
                            </div>
                            <div class="Habbo-Navigator__Row-Right">
                                <span v-if="trade === 0">Pas autorisé</span>
                                <span v-if="trade === 1">Utilisateurs avec droits</span>
                                <span v-if="trade === 2">Autorisé</span>
                            </div>
                        </div>
                        <div class="Habbo-Navigator__Settings-Row">
                            <div class="Habbo-Navigator__Row-Left">
                                {{ __locale('navigator.roompopup.property.max_users') }}
                            </div>
                            <div class="Habbo-Navigator__Row-Right">
                                {{ maxUsers }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Habbo-Navigator__Right-Panel">
                    <tooltip :tooltip="__locale('navigator.tooltip.groupinfo.owner')">
                        <div class="Habbo-Navigator__Group-Info">
                            <div class="Habbo-Navigator__Icon">
                            </div>
                            LIGUE 1
                        </div>
                    </tooltip>
                    <div class="Habbo-Navigator__Room-Actions">
                        <div class="Habbo-Navigator__Actions-Row">
                            <div class="Habbo-Navigator__Row-Left">
                                <div class="Habbo-Navigator__Action-Button Habbo-Navigator__Button-Favorite">
                                </div>
                            </div>
                            <div class="Habbo-Navigator__Row-Right">
                                {{ __locale('navigator.room.popup.room.info.favorite') }}
                            </div>
                        </div>
                        <div class="Habbo-Navigator__Actions-Row">
                            <div class="Habbo-Navigator__Row-Left">
                                <div class="Habbo-Navigator__Action-Button Habbo-Navigator__Button-Home">
                                </div>
                            </div>
                            <div class="Habbo-Navigator__Row-Right">
                                {{ __locale('navigator.room.popup.room.info.home') }}
                            </div>
                        </div>
                        <div class="Habbo-Navigator__Actions-Row">
                            <div class="Habbo-Navigator__Row-Left">
                                <div class="Habbo-Navigator__Action-Button Habbo-Navigator__Button-Report">
                                </div>
                            </div>
                            <div class="Habbo-Navigator__Row-Right">
                                {{ __locale('navigator.room.popup.report.room') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </card>
    </teleport>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import NavigatorRoomThumbnailWidget from "./NavigatorRoomThumbnailWidget.vue";

    export default defineComponent({

        components: {
            NavigatorRoomThumbnailWidget,
        },

        props: {
            x: Number,
            y: Number,
            name: String,
            ownerName: String,
            maxUsers: Number,
            description: String,
            trade: Number,
            tags: Object
        },

    });
</script>

<style scoped>

    .Habbo-Navigator__Room-Info {
        position: absolute !important;
        z-index: 3;
        width: 362px;
        height: 261px;
        transform: translateY(-50%);
        /*height: 316px; If event*/
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Header {
        width: 100%;
        height: 125px;
        padding: 0px 2px 1px;
        display: flex;
        flex-direction: row;
        gap: 9px;
    }
    .Habbo-Navigator__Room-Info .Habbo-Navigator__Header .Habbo-Navigator__Room-Group-Icon {
        width: 39px;
        height: 39px;
        top: 1px;
        left: 1px;
        position: absolute;
        background-image: url(../../../assets/images/group_badge.png);
    }
    .Habbo-Navigator__Room-Info .Habbo-Navigator__Header .Habbo-Navigator__Room-Info-Panel {
        position: relative;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Header .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Room-Name {
        font-family: UbuntuBold;
        font-size: 9.4pt;
        color: #000000;
        line-height: 14px;
        padding-top: 1px;
        position: absolute;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Header .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Room-Description {
        font-family: Ubuntu Light;
        font-size: 9.4pt;
        color: #000000;
        line-height: 14px;
        padding-top: 34px;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel {
        width: 100%;
        height: 122px;
        padding-left: 2px;
        padding-right: 2px;
        display: flex;
        flex-direction: row;
        position: relative;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Left-Panel {
        display: flex;
        flex-direction: column;
        width: 137px;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Left-Panel .Habbo-Navigator__Owner-Profile {
        display: flex;
        gap: 7px;
        font-family: UbuntuBold;
        font-size: 9.4pt;
        color: #000000;
        text-decoration: underline;
        align-items: center;
        padding-top: 3px;
        padding-left: 3px;
        width: 100%;
        cursor: pointer;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Left-Panel .Habbo-Navigator__Owner-Profile .Habbo-Navigator__Icon {
        width: 15px;
        height: 13px;
        background-image: url(../../../assets/images/common/icons/user_profile.png);
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Left-Panel .Habbo-Navigator__Room-Settings {
        display: flex;
        flex-direction: column;
        padding-top: 14px;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Left-Panel .Habbo-Navigator__Room-Settings .Habbo-Navigator__Settings-Row {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    .Habbo-Navigator__Room-Settings .Habbo-Navigator__Settings-Row .Habbo-Navigator__Row-Left {
        font-family: UbuntuBold;
        font-size: 9.4pt;
        color: #000000;
        width: 50%;
        white-space: nowrap;
        overflow: hidden;
    }

    .Habbo-Navigator__Room-Settings .Habbo-Navigator__Settings-Row .Habbo-Navigator__Row-Right {
        font-family: Ubuntu Light;
        font-size: 9.4pt;
        color: #000000;
        width: 50%;
        white-space: nowrap;
        overflow: hidden;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Right-Panel {
        display: flex;
        flex-direction: column;
        width: 168px;
        margin-left: auto;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Right-Panel .Habbo-Navigator__Group-Info {
        display: flex;
        gap: 7px;
        font-family: UbuntuBold;
        font-size: 9.4pt;
        color: #000000;
        text-decoration: underline;
        align-items: center;
        padding-top: 3px;
        width: 100%;
        cursor: pointer;
        height: 21px;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Right-Panel .Habbo-Navigator__Group-Info .Habbo-Navigator__Icon {
        width: 15px;
        height: 13px;
        background-image: url(../../../assets/images/common/icons/group.png);
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Right-Panel .Habbo-Navigator__Room-Actions {
        width: 100%;
        padding-left: 6px;
        padding-right: 6px;
        display: flex;
        flex-direction: column;
        padding-top: 13px;
        gap: 5px;
    }

    .Habbo-Navigator__Room-Info .Habbo-Navigator__Room-Info-Panel .Habbo-Navigator__Right-Panel .Habbo-Navigator__Room-Actions .Habbo-Navigator__Actions-Row {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: end;
    }

    .Habbo-Navigator__Room-Actions .Habbo-Navigator__Actions-Row .Habbo-Navigator__Row-Left {
        font-family: UbuntuBold;
        font-size: 9.4pt;
        color: #000000;
        min-width: 13px;
        white-space: nowrap;
        overflow: hidden;
    }

    .Habbo-Navigator__Room-Actions .Habbo-Navigator__Actions-Row .Habbo-Navigator__Row-Right {
        font-family: Ubuntu Light;
        font-size: 9.4pt;
        color: #000000;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
    }

    .Habbo-Navigator__Room-Actions .Habbo-Navigator__Actions-Row .Habbo-Navigator__Row-Left .Habbo-Navigator__Action-Button {
        width: 13px;
        height: 12px;
        background-image: url(../../../assets/images/navigator/buttons/room_actions.png);
        cursor: pointer;
    }

    .Habbo-Navigator__Room-Actions .Habbo-Navigator__Actions-Row .Habbo-Navigator__Row-Left .Habbo-Navigator__Action-Button.Habbo-Navigator__Button-Favorite {
        background-position: 0 0;
    }

    .Habbo-Navigator__Room-Actions .Habbo-Navigator__Actions-Row .Habbo-Navigator__Row-Left .Habbo-Navigator__Action-Button.Habbo-Navigator__Button-Home {
        background-position: 0 -12px;
    }

    .Habbo-Navigator__Room-Actions .Habbo-Navigator__Actions-Row .Habbo-Navigator__Row-Left .Habbo-Navigator__Action-Button.Habbo-Navigator__Button-Report {
        background-position: 0 -24px;
        height: 15px;
    }

</style>
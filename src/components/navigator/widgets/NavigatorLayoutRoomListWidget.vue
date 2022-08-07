<template>
    <tooltip tooltip="Aller dans l'appart">
        <div class="Habbo-Navigator__Room" :class="[index % 2 !== 0 ? 'Habbo-Navigator__Room--white' : '']">
            <navigator-user-count-widget class="Habbo-Navigator__Room-User-Count" :user-count="userCount" :max-user="maxUsers"/>
            <div class="Habbo-Navigator__Room-Info-Button" @mouseout="hideInfo" @mouseover="showInfo($event)">
            </div>
            <div class="Habbo-Navigator__Room-Group-Icon">
            </div>
            <div class="Habbo-Navigator__Room-State-Icon" :class="[skipAuth === 1 ? 'Habbo-Navigator__Room-State-Icon--locked' : kipAuth === 2 ? 'Habbo-Navigator__Room-State-Icon--password' : skipAuth === 3 ? 'Habbo-Navigator__Room-State-Icon--invisible' : '']">
            </div>
            <div class="Habbo-Navigator__Room-Title">
                {{ name }}
            </div>
            <navigator-room-info-widget :x="x" :y="y" class="Habbo-Navigator__Room-Info" v-if="info"/>
        </div>
    </tooltip>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';

    import NavigatorUserCountWidget from './NavigatorUserCountWidget.vue';
    import NavigatorRoomInfoWidget from './NavigatorRoomInfoWidget.vue';

    export default defineComponent({

        components: {
            NavigatorUserCountWidget,
            NavigatorRoomInfoWidget
        },

        props: {
            index: Number,
            name: String,
            userCount: Number,
            maxUsers: Number,
            skipAuth: Number,
        },

        data() {
            return {
                info: false,
                x: 0,
                y: 0,
            }
        },

        methods: {
            showInfo(event): void {
                const offsets: DOMRect = event.target.getBoundingClientRect();
                this.y = offsets.top;
                this.x = offsets.left;
                this.info = true;
            },

            hideInfo(): void {
                this.info = false;
            }
        }

    });
</script>

<style scoped>

    .Habbo-Navigator__Room {
        width: 100%;
        padding-top: 1px;
        padding-bottom: 1px;
        height: 20px;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        background-color: #D5EDFF;
    }

    .Habbo-Navigator__Room--white {
        background-color: #FFFFFF;
    }

    .Habbo-Navigator__Room .Habbo-Navigator__Room-Info-Button {
        height: 18px;
        width: 18px;
        background-image: url(../../../assets/images/navigator/icons/info.png);
        position: absolute;
        right: 6px;
        cursor: pointer;
    }

    .Habbo-Navigator__Room .Habbo-Navigator__Room-Group-Icon {
        height: 11px;
        width: 13px;
        background-image: url(../../../assets/images/navigator/icons/room_group.png);
        position: absolute;
        right: 28px;
        top: 4px;
        cursor: pointer;
    }

    .Habbo-Navigator__Room .Habbo-Navigator__Room-State-Icon {
        height: 16px;
        width: 13px;
        position: absolute;
        right: 45px;
        top: 2px;
        cursor: pointer;
        background-image: url(../../../assets/images/navigator/icons/room_locked.png);
        display: none;
    }

    .Habbo-Navigator__Room .Habbo-Navigator__Room-State-Icon.Habbo-Navigator__Room-State-Icon--locked {
        background-position: 0 0;
        display: block;
    }

    .Habbo-Navigator__Room .Habbo-Navigator__Room-State-Icon.Habbo-Navigator__Room-State-Icon--password {
        background-position: 0 -32px;
        display: block;
    }

    .Habbo-Navigator__Room .Habbo-Navigator__Room-State-Icon.Habbo-Navigator__Room-State-Icon--invisible {
        background-position: 0 -16px;
        display: block;
    }

    .Habbo-Navigator__Room .Habbo-Navigator__Room-User-Count {
        position: absolute;
        left: 0;
    }

    .Habbo-Navigator__Room .Habbo-Navigator__Room-Title {
        position: absolute;
        left: 47px;
        color: #000000;
        font-size: 9.4pt;
        font-family: Ubuntu Light;
        top: 1px;
        line-height: 16px;
    }


</style>
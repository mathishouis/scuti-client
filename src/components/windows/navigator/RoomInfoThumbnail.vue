<template>
    <div class="Habbo-Room-Info-Thumbnail">
        <div class="Habbo-Room-Info-Thumbnail__Room-Info-Button">
        </div>
        <room-thumbnail class="Habbo-Room-Info-Thumbnail__Room-Thumbnail"/>
        <div class="Habbo-Room-Info-Thumbnail__Room-Title">
            {{ name }}
        </div>
        <user-count class="Habbo-Room-Info-Thumbnail__Room-User-Count" :user-count="userCount" :max-users="maxUsers"/>
        <div class="Habbo-Room-Info-Thumbnail__Room-State-Icon" :class="[skipAuth === 1 ? 'Habbo-Navigator__Room-State-Icon--locked' : skipAuth === 2 ? 'Habbo-Navigator__Room-State-Icon--password' : skipAuth === 3 ? 'Habbo-Navigator__Room-State-Icon--invisible' : '']">
        </div>
        <div class="Habbo-Room-Info-Thumbnail__Room-Group-Icon">
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import RoomThumbnail from "../../RoomThumbnail.vue";

    export default defineComponent({
        components: {RoomThumbnail},
        props: {
            name: String,
            userCount: Number,
            maxUsers: Number,
            skipAuth: Number,
        }
    });
</script>

<style scoped>
    .Habbo-Room-Info-Thumbnail {
        width: 122px;
        height: 146px;
        position: relative;
        border-image: url(../../../../static/images/border_3.png) 6 6 8 6 fill;
        border-top: 6px solid transparent;
        border-left: 6px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 6px solid transparent;
    }
    .Habbo-Room-Info-Thumbnail .Habbo-Room-Info-Thumbnail__Room-Info-Button {
        height: 18px;
        width: 18px;
        background-image: url(../../../../static/images/room_info_button.png);
        position: absolute;
        right: 0px;
        bottom: 0px;
        cursor: pointer;
    }
    .Habbo-Room-Info-Thumbnail .Habbo-Room-Info-Thumbnail__Room-Thumbnail {
        position: absolute;
        top: 0;
        left: 1px;
    }
    .Habbo-Room-Info-Thumbnail .Habbo-Room-Info-Thumbnail__Room-Title {
        position: absolute;
        top: 113px;
        left: 3px;
        font-size: 8pt;
        color: #000000;
        font-family: Ubuntu Light;
        line-height: 12px;
        max-width: calc(100% - 24px);
        max-height: 24px;
        overflow: hidden;
    }
    .Habbo-Room-Info-Thumbnail__Room-User-Count {
        left: 34px;
        top: 87px;
        position: absolute;
    }

    .Habbo-Room-Info-Thumbnail .Habbo-Room-Info-Thumbnail__Room-State-Icon {
        height: 16px;
        width: 13px;
        position: absolute;
        right: 10px;
        top: 89px;
        cursor: pointer;
        background-image: url(../../../../static/images/room_locked_icon.png);
        display: none;
    }
    .Habbo-Room-Info-Thumbnail .Habbo-Room-Info-Thumbnail__Room-State-Icon.Habbo-Room-Info-Thumbnail__Room-State-Icon--locked {
        background-position: 0 0;
        display: block;
    }
    .Habbo-Room-Info-Thumbnail .Habbo-Room-Info-Thumbnail__Room-State-Icon.Habbo-Room-Info-Thumbnail__Room-State-Icon--password {
        background-position: 0 -32px;
        display: block;
    }
    .Habbo-Room-Info-Thumbnail .Habbo-Room-Info-Thumbnail__Room-State-Icon.Habbo-Room-Info-Thumbnail__Room-State-Icon--invisible {
        background-position: 0 -16px;
        display: block;
    }
    .Habbo-Room-Info-Thumbnail .Habbo-Room-Info-Thumbnail__Room-Group-Icon {
        width: 39px;
        height: 39px;
        top: 2px;
        left: 3px;
        position: absolute;
        background-image: url(./../../../../static/images/group_badge.png);
    }
</style>
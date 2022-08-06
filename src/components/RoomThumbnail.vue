<template>
    <div class="Habbo-Room-Thumbnail" :style="{ backgroundImage: 'url(./images/room_thumbnail.png)' }">

    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        props: {
            thumbnail: String
        },
        methods: {
            getThumbnail(): string {
                if(this.thumbnail) return this.thumbnail;
                return '/images/room_thumbnail.png';
            }
        }
    });
</script>

<style scoped>
    .Habbo-Room-Thumbnail {
        width: 108px;
        height: 109px;
        border: 1px solid #000000;
        background-color: #B4B3AA;
        background-position: center center;
    }
</style>
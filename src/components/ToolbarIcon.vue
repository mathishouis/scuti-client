<template>
    <div class="Habbo-Toolbar-Icon">
        <tooltip :tooltip="tooltip">
            <img :src="icon" :style="{ marginTop: margin + 'px' }">
        </tooltip>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            tooltip: String,
            icon: String,
            margin: Number,
        },
        methods: {
            click() {
                this.$emit('clickd');
            }
        }
    });
</script>

<style scoped>
    .Habbo-Toolbar-Icon {
        height: 41px;
        width: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .Habbo-Toolbar-Icon img {
        -webkit-filter: drop-shadow(1px 1px 0px #141312);
        filter: drop-shadow(1px 1px 0px #141312);
    }
    .Habbo-Toolbar-Icon:hover img {
        margin: -1px 1px 1px -1px;
        -webkit-filter: drop-shadow(2px 2px 0px #141312);
        filter: drop-shadow(2px 2px 0px #141312);
    }
    .Habbo-Toolbar-Icon:active img {
        margin: 0;
        opacity: .7;
        -webkit-filter: drop-shadow(0px 0px 0px #141312);
        filter: drop-shadow(0px 0px 0px #141312);
    }
</style>
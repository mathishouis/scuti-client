<template>
    <div class="Habbo-Toolbar">
        <div class="Habbo-Toolbar__Bottom-Bar-Left">
            <div class="Habbo-Toolbar__Arrow-Container-Left">
            </div>
            <div class="Habbo-Toolbar__Icon-List">
                <toolbar-icon tooltip="Aller sur la vue aérienne" icon="images/toolbar/icons/hotel_view.png" :margin="-2"/>
                <toolbar-icon tooltip="A visiter" icon="images/toolbar/icons/navigator.png" :margin="-1" @click="toggle('navigator')"/>
                <toolbar-icon tooltip="Boutique" icon="images/toolbar/icons/shop.png" :margin="-1"/>
                <toolbar-icon tooltip="Inventaire" icon="images/toolbar/icons/inventory.png"/>
            </div>
            <div class="Habbo-Toolbar__Separator">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        methods: {
            toggle(name: string): void {
                this.$store.commit('setVisible', { name: name, visible: !this.$store.getters.getVisible(name) });
            }
        }
    });
</script>

<style scoped>
    .Habbo-Toolbar {
        height: 47px;
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: rgba(47, 47, 44, 0.58);
        border-bottom: 1px solid rgba(112, 112, 105, 0.44);
        border-top: 2px solid rgba(112, 112, 105, 0.44);
        z-index: 1;
    }
    .Habbo-Toolbar:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        top: -3px;
        background-color: rgba(0, 0, 0, 0.63);
    }
    .Habbo-Toolbar__Bottom-Bar-Left {
        height: 100%;
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
    }
    .Habbo-Toolbar__Bottom-Bar-Left .Habbo-Toolbar__Arrow-Container-Left {
        width: 14px;
        height: 43px;
        background-image: url(../../assets/images/arrow_container_left_collapse_left.png);
    }
    .Habbo-Toolbar__Bottom-Bar-Left .Habbo-Toolbar__Icon-List {
        height: 41px;
        display: flex;
        gap: 8px;
        margin-left: 4.5px;
    }
    .Habbo-Toolbar__Separator {
        height: 40px;
        width: 1px;
        background-color: #454442;
        margin-left: 12px;
        margin-right: 12px;
    }
</style>
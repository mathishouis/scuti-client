<template>
    <div class="Habbo-Inventory__Content-Panel">
        <div class="Habbo-Inventory__Furnitures-Panel">
            <scrollbox width="100%" height="221px">
                <div class="Habbo-Navigator__Content" :class="[isLoading ? 'Habbo-Navigator__Content--loading' : '']">

                </div>
            </scrollbox>
        </div>
        <div class="Habbo-Inventory__Visualization-Panel">
            <div class="Habbo-Inventory__Furniture-Visualizer">
                <div class="Habbo-Inventory__Canvas">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import {mapGetters, mapMutations} from "vuex";

    export default defineComponent({

        components: {

        },

        methods: {
            ...mapMutations("Navigator/Categories", ["setCategory"]),
        },

        computed: {
            ...mapGetters("Navigator/Categories", ["getCategories", "getCategory"]),
            ...mapGetters("Navigator", ["isLoading"]),
        }

    });
</script>

<style scoped>

    .Habbo-Inventory__Content-Panel {
        width: calc(100% - 10px);
        height: 235px;
        margin-left: 5px;
        margin-top: 2px;
        position: absolute;
        display: flex;
        flex-direction: row;
        gap: 6px;
    }

    .Habbo-Inventory__Content-Panel .Habbo-Inventory__Furnitures-Panel {
        height: 100%;
        margin-left: 1px;
        width: 283px;
    }

    .Habbo-Inventory__Content-Panel .Habbo-Inventory__Visualization-Panel {
        width: 178px;
    }

    .Habbo-Inventory__Content-Panel .Habbo-Inventory__Visualization-Panel .Habbo-Inventory__Furniture-Visualizer {
        width: 100%;
        height: 130px;
        position: relative;
    }

    .Habbo-Inventory__Content-Panel .Habbo-Inventory__Visualization-Panel .Habbo-Inventory__Furniture-Visualizer .Habbo-Inventory__Canvas {
        margin-left: 5px;
        width: calc(100% - 8px);
        height: 100%;
        background-color: black;
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
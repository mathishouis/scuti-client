<template>
    <div class="Habbo-Furniture-Widget">
        <window :id="1" width="190px" height="369px" :title="getSelectedItem.name" @close="close">
            <div class="Habbo-Furniture-Widget__Image">
                <img :src="getSelectedItem.image">
            </div>
            <div class="Habbo-Furniture-Widget__Description">
                {{ getSelectedItem.description }}
            </div>
            <div class="Habbo-Furniture-Widget__Action">
                <tooltip tooltip="Clique pour voir le profil">
                    <div class="Habbo-Furniture-Widget__Owner-Profile">
                        <div class="Habbo-Furniture-Widget__Icon">
                        </div>
                        Kozenn
                    </div>
                </tooltip>
                <habbo-button :id="2" class="Habbo-Furniture-Widget__Buy-One-Button">Acheter un</habbo-button>
            </div>
        </window>
        <div class="Habbo-Furniture-Widget__Button-Group">
            <habbo-button :id="1" @click="move">Déplacer</habbo-button>
            <habbo-button :id="1" @click="rotate">Tourner</habbo-button>
            <habbo-button :id="1" @click="pickup">Prendre</habbo-button>
            <habbo-button :id="1" @click="use">Utiliser</habbo-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {mapGetters, mapMutations} from "vuex";
    import {store} from "../../../../store";
    import {ChangeFloorItemStateMessageComposer} from "../../../../websockets/messages/outgoing/room/item/ChangeFloorItemStateMessageComposer";
    import {ChangeFloorItemPositionMessageComposer} from "../../../../websockets/messages/outgoing/room/item/ChangeFloorItemPositionMessageComposer";
    import {FloorFurniture} from "scuti-renderer";
    import {PickUpItemMessageComposer} from "../../../../websockets/messages/outgoing/room/item/PickUpItemMessageComposer";


    export default defineComponent({

        methods: {
            ...mapMutations("Room/InfoStands", ["setSelectedItem"]),
            pickup(): void {
                store.getters['getWebsocket'].sendMessageComposer(new PickUpItemMessageComposer(true, this.getSelectedItem.id));
                this.close();
            },
            rotate(): void {
                const furniture: FloorFurniture = store.getters['Room/Furnitures/getFloorItem'](this.getSelectedItem.id).furniture;
                console.log(furniture);
                let direction: number = furniture.direction;
                if(furniture.visualization.directions.indexOf(direction) === furniture.visualization.directions.length - 1) {
                    direction = furniture.visualization.directions[0];
                } else {
                    direction = furniture.visualization.directions[furniture.visualization.directions.indexOf(direction) + 1];
                }
                store.getters['getWebsocket'].sendMessageComposer(new ChangeFloorItemPositionMessageComposer(this.getSelectedItem.id, furniture.roomPosition.x, furniture.roomPosition.y, direction));
            },
            use(): void {
                store.getters['getWebsocket'].sendMessageComposer(new ChangeFloorItemStateMessageComposer(this.getSelectedItem.id));
            },
            move(): void {

            },
            close(): void {
                this.setSelectedItem(undefined);
            }
        },

        computed: {
            ...mapGetters("Room/InfoStands", ["getSelectedItem"]),
        }

    });
</script>

<style scoped>
    .Habbo-Furniture-Widget {
        position: fixed;
        right: 5px;
        bottom: 57px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: end;
    }

    .Habbo-Furniture-Widget__Image {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #333333;
    }

    .Habbo-Furniture-Widget__Description {
        font-family: Goldfish;
        font-size: 9px;
        color: #FFFFFF;
        letter-spacing: 0.1pt;
        padding-top: 5px;
        padding-bottom: 6px;
        padding-left: 2px;
        padding-right: 2px;
        border-bottom: 1px solid #333333;
        width: 100%;
    }

    .Habbo-Furniture-Widget__Action {
        padding-top: 6px;
        padding-bottom: 5px;
        border-bottom: 1px solid #333333;
        width: 100%;
    }

    .Habbo-Furniture-Widget__Action .Habbo-Furniture-Widget__Owner-Profile {
        font-family: Goldfish;
        font-size: 9px;
        color: #FFFFFF;
        letter-spacing: 0.1pt;
        display: flex;
        gap: 9px;
        align-items: center;
        width: 100%;
        cursor: pointer;
    }

    .Habbo-Furniture-Widget__Action .Habbo-Furniture-Widget__Owner-Profile .Habbo-Furniture-Widget__Icon {
        width: 13px;
        height: 11px;
        background-image: url(../../../../assets/images/common/buttons/user_profile.png);
    }
    .Habbo-Furniture-Widget__Action .Habbo-Furniture-Widget__Owner-Profile:hover .Habbo-Furniture-Widget__Icon {
        background-position: 0 -11px;
    }

    .Habbo-Furniture-Widget__Action .Habbo-Furniture-Widget__Buy-One-Button {
        margin-top: 8px;
    }

    .Habbo-Furniture-Widget__Button-Group {
        height: 25px;
        display: flex;
        gap: 10px;
        flex-direction: row;
    }


</style>
import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {InitializeRoomMessageComposer} from "../../../outgoing/room/engine/InitializeRoomMessageComposer";
import {AddUserToRoomMessageComposer} from "../../../outgoing/room/engine/AddUserToRoomMessageComposer";
import {FloorFurniture} from "scuti-renderer";
import {ChangeFloorItemStateMessageComposer} from "../../../outgoing/room/item/ChangeFloorItemStateMessageComposer";

export class FloorItemsMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const ownerSize: number = this.readInt();

        for (let i: number = 0; i < ownerSize; i++) {
            const key: number = this.readInt();
            const value: string = this.readString();
        }

        const itemSize: number = this.readInt();

        for (let i: number = 0; i < itemSize; i++) {
            const virtualId: number = this.readInt();
            const spriteId: number = this.readInt();
            const x: number = this.readInt();
            const y: number = this.readInt();
            const direction: number = this.readInt();
            const z: number = parseFloat(this.readString());
            const height: number = parseFloat(this.readString());

            this.readInt();
            this.readInt();

            const extradata: string = this.readString();

            this.readInt();
            this.readInt();
            const ownerId: number = this.readInt();

            const furniture: FloorFurniture = new FloorFurniture(store.getters['Room/Renderer/getRenderer'], {
                x: x,
                y: y,
                z: z,
                direction: direction,
                id: spriteId,
                state: Number(extradata),
            });

            furniture.doubleClick = (event) => {
                console.log(event);
                store.getters['getWebsocket'].sendMessageComposer(new ChangeFloorItemStateMessageComposer(virtualId));
            }

            store.getters['Room/Renderer/getRoom'].addRoomObject(furniture);

            store.commit('Room/Furnitures/addFloorItem', {
                id: virtualId,
                furniture: furniture
            });

        }


    }

}
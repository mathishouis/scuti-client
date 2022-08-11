import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {WallFurniture} from "scuti-renderer";

export class SendWallItemMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const virtualId: number = Number(this.readString());
        const spriteId: number = this.readInt();
        const wallPosition: string = this.readString();

        const extradata: string = this.readString();

        this.readInt();
        this.readInt();

        const ownerId: number = this.readInt();

        const wallCoords: [] = wallPosition.split(" ")[0].split("=")[1].split(",");
        const wallOffsets: [] = wallPosition.split(" ")[1].split("=")[1].split(",");
        const direction: number = wallPosition.split(" ")[2] === "l" ? 2 : 4

        const furniture: WallFurniture = new WallFurniture(store.getters['Room/Renderer/getRenderer'], {
            x: wallCoords[0],
            y: wallCoords[1],
            offsetX: wallOffsets[0],
            offsetY: wallOffsets[1],
            direction: direction,
            id: spriteId,
            state: Number(extradata),
        });

        store.getters['Room/Renderer/getRoom'].addRoomObject(furniture);

        store.commit('Room/Furnitures/addWallItem', {
            id: virtualId,
            furniture: furniture
        });


    }

}
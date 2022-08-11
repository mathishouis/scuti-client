import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {WallFurniture} from "scuti-renderer";

export class UpdateWallItemMessageEvent extends IncomingPacket {

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

        const furniture: WallFurniture = store.getters['Room/Furnitures/getWallItem'](virtualId).furniture;

        if(furniture.direction !== direction) {
            furniture.direction = direction;
        }

        if(furniture.state !== Number(extradata)) {
            furniture.state = Number(extradata);
        }

        if(furniture._x !== wallCoords[0] || furniture._y !== wallCoords[1] || furniture._offsetX !== wallOffsets[0] || furniture._offsetY !== wallOffsets[1]) {
            furniture.move(wallCoords[0], wallCoords[1], wallOffsets[0], wallOffsets[1], false);
        }


    }

}
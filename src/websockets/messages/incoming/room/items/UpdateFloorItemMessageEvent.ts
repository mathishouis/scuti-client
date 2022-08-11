import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {InitializeRoomMessageComposer} from "../../../outgoing/room/engine/InitializeRoomMessageComposer";
import {AddUserToRoomMessageComposer} from "../../../outgoing/room/engine/AddUserToRoomMessageComposer";
import {FloorFurniture} from "scuti-renderer";

export class UpdateFloorItemMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const virtualId: number = this.readInt();
        const spriteId: number = this.readInt();
        const x: number = this.readInt();
        const y: number = this.readInt();
        const direction: number = this.readInt();
        const z: number = parseFloat(this.readString());
        const height: number = parseFloat(this.readString());

        // TODO: Implement limited edition support

        this.readInt();
        this.readInt();

        const extradata: string = this.readString();

        this.readInt();
        this.readInt();

        const ownerId: number = this.readInt();

        const furniture: FloorFurniture = store.getters['Room/Furnitures/getFloorItem'](virtualId).furniture;

        if(furniture.direction !== direction) {
            furniture.rotate(direction, true);
        }

        if(furniture.state !== Number(extradata)) {
            furniture.state = Number(extradata);
        }

        if(furniture.roomPosition.x !== x || furniture.roomPosition.y !== y || furniture.roomPosition.z !== z) {
            furniture.move(x, y, z, false);
        }


    }

}
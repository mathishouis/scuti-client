import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {FloorFurniture, Room} from "scuti-renderer";

export class RemoveFloorItemMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const id: number = Number(this.readString());
        const expired: number = this.readBool();
        const ownerId: number = this.readInt();
        const delay: number = this.readInt();

        const furniture: FloorFurniture = store.getters['Room/Furnitures/getFloorItem'](id).furniture;
        const room: Room = store.getters['Room/Renderer/getRoom'];

        room.removeRoomObject(furniture);

        store.commit('Room/Furnitures/removeFloorItem', id);

    }

}
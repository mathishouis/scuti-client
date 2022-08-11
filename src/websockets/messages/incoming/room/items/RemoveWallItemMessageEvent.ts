import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {WallFurniture, Room} from "scuti-renderer";

export class RemoveWallItemMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const id: number = Number(this.readString());
        const ownerId: number = this.readInt();

        console.log(id);
        console.log(store.getters['Room/Furnitures/getWallItems']);

        const furniture: WallFurniture = store.getters['Room/Furnitures/getWallItem'](id).furniture;
        const room: Room = store.getters['Room/Renderer/getRoom'];

        room.removeRoomObject(furniture);

        store.commit('Room/Furnitures/removeWallItem', id);

    }

}
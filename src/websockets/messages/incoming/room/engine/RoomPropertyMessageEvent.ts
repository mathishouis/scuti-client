import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {InitializeRoomMessageComposer} from "../../../outgoing/room/engine/InitializeRoomMessageComposer";

export class RoomPropertyMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const key: string = this.readString();
        const value: string = this.readString();

        console.log(key, value);

        switch(key) {
            case 'wallpaper':
                store.getters['Room/Renderer/getRoom'].wallMaterial = store.getters['Room/Renderer/getRenderer'].materials.getWallMaterial(Number(value));
                break;
            case 'floor':
                store.getters['Room/Renderer/getRoom'].floorMaterial = store.getters['Room/Renderer/getRenderer'].materials.getFloorMaterial(Number(value));
                break;
            case 'landscape':
                break;
        }

    }

}
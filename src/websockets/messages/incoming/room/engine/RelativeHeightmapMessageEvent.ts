import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {Room, FloorFurniture} from "scuti-renderer";
import {InitializeRoomMessageComposer} from "../../../outgoing/room/engine/InitializeRoomMessageComposer";

export class RelativeHeightmapMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        this.readBool();

        const wallHeight: number = this.readInt();
        const heightmap: string = this.readString();

        store.getters['Room/Renderer/getRoom'].heightmap = heightmap;

    }

}
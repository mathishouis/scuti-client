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

    }

}
import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {InitializeRoomMessageComposer} from "../../../outgoing/room/engine/InitializeRoomMessageComposer";

export class RoomReadyMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const model: string = this.readString();
        const id: number = this.readInt();

    }

}
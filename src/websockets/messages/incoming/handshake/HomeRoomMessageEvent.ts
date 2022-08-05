import {IncomingPacket} from "../../IncomingPacket";
import {Buffer} from "buffer";

export class HomeRoomMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        const roomId: number = this.readInt();
        const newRoom: number = this.readInt();
    }

}
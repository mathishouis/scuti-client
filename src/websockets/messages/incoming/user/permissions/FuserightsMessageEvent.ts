import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";

export class FuserightsMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        this.readInt(); // ?
        this.readInt(); // Rank
        this.readBool(); // Is ambassador!
    }

}
import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";

export class AvailabilityStatusMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        this.readBool(); // ?
        this.readBool(); // ?
        this.readBool(); // ?
    }

}
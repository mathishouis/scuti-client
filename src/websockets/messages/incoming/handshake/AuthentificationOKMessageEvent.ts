import {IncomingPacket} from "../../IncomingPacket";
import {Buffer} from "buffer";

export class AuthentificationOKMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        //console.log(this.header);
    }

}
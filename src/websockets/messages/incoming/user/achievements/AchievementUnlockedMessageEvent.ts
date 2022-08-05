import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";

export class AchievementUnlockedMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        //console.log(this.header);
    }

}
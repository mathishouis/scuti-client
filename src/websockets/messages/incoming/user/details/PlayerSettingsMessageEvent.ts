import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";

export class PlayerSettingsMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        const systemVolume: number = this.readInt(); // System volume
        const furniVolume: number = this.readInt(); // Furniture volume
        const traxVolume: number = this.readInt(); // Trax volume
        const isUseOldChat: boolean = this.readBool(); // Old chat enabled ?
        const ignoreEvents: boolean = this.readBool(); // Ignore room invites
        const getHideInRoom: boolean = this.readBool(); // disable_room_camera_follow_checkbox (or not ??)
        this.readInt(); // ?
        const chatColor: number = this.readInt(); // Chat bubble color
    }

}
import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class ExitRoomMessageComposer extends OutgoingPacket {

    constructor() {
        super(Outgoing.ExitRoomMessageComposer);
    }

    public compose(): Buffer {
        return this.prepare();
    }


}
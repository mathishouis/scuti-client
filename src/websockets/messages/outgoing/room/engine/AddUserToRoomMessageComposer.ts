import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class AddUserToRoomMessageComposer extends OutgoingPacket {

    constructor() {
        super(Outgoing.AddUserToRoomMessageComposer);
    }

    public compose(): Buffer {
        return this.prepare();
    }


}
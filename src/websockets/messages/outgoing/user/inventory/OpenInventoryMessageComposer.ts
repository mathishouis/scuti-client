import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class OpenInventoryMessageComposer extends OutgoingPacket {

    constructor() {
        super(Outgoing.OpenInventoryMessageComposer);
    }

    public compose(): Buffer {
        return this.prepare();
    }


}
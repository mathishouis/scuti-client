import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class InfoRetrieveMessageComposer extends OutgoingPacket {

    constructor() {
        super(Outgoing.InfoRetrieveMessageComposer);
    }

    public compose(): Buffer {
        return this.prepare();
    }


}
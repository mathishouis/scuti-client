import {OutgoingPacket} from "../../OutgoingPacket";
import {Outgoing} from "../../headers/Outgoing";
import {Buffer} from "buffer";

export class EventCategoriesMessagecomposer extends OutgoingPacket {

    constructor() {
        super(Outgoing.EventCategoriesMessageComposer);
    }

    public compose(): Buffer {
        return this.prepare();
    }


}
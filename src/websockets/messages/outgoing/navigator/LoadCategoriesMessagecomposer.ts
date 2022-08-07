import {OutgoingPacket} from "../../OutgoingPacket";
import {Outgoing} from "../../headers/Outgoing";
import {Buffer} from "buffer";

export class LoadCategoriesMessagecomposer extends OutgoingPacket {

    constructor() {
        super(Outgoing.LoadCategoriesMessageComposer);
    }

    public compose(): Buffer {
        return this.prepare();
    }


}
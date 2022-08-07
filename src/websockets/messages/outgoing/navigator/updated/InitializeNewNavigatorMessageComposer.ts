import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class InitializeNewNavigatorMessageComposer extends OutgoingPacket {

    constructor() {
        super(Outgoing.InitializeNewNavigatorMessageComposer);
    }

    public compose(): Buffer {
        return this.prepare();
    }


}
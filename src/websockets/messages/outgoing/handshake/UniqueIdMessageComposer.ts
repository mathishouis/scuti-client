import {OutgoingPacket} from "../../OutgoingPacket";
import {Outgoing} from "../../headers/Outgoing";
import {Buffer} from "buffer";

export class UniqueIdMessageComposer extends OutgoingPacket {

    constructor() {
        super(Outgoing.UniqueIdMessageComposer);
    }

    public compose(): Buffer {
        // TODO: Send player username
        this.writeString("11848329");
        this.writeString("11848329");
        this.writeString("11848329");
        return this.prepare();
    }


}
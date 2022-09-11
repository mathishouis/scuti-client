import {OutgoingPacket} from "../../OutgoingPacket";
import {Outgoing} from "../../headers/Outgoing";
import {Buffer} from "buffer";

export class ConfirmUsernameMessageComposer extends OutgoingPacket {

    constructor() {
        super(Outgoing.ConfirmUsernameMessageComposer);
    }

    public compose(): Buffer {
        // TODO: Send player username
        this.writeString("Anis");
        return this.prepare();
    }


}
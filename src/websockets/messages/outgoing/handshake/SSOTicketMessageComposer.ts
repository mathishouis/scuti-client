import {OutgoingPacket} from "../../OutgoingPacket";
import {Outgoing} from "../../headers/Outgoing";
import {Buffer} from "buffer";

export class SSOTicketMessageComposer extends OutgoingPacket {

    private readonly _authTicket: string;

    constructor(authTicket: string) {
        super(Outgoing.SSOTicketMessageComposer);

        this._authTicket = authTicket;
    }

    public compose(): Buffer {
        this.writeString(this._authTicket);
        return this.prepare();
    }


}
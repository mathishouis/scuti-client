import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class ChangeFloorItemStateMessageComposer extends OutgoingPacket {

    private readonly _virtualId: number;

    constructor(virtualId: number) {
        super(Outgoing.ChangeFloorItemStateMessageComposer);

        this._virtualId = virtualId;
    }

    public compose(): Buffer {
        this.writeInt(this._virtualId);
        this.writeInt(0);
        return this.prepare();
    }


}
import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class PickUpItemMessageComposer extends OutgoingPacket {

    private readonly _id: number;
    private readonly _isFloorItem: boolean

    constructor(isFloorItem: boolean, id: number) {
        super(Outgoing.PickUpItemMessageComposer);

        this._id = id;
        this._isFloorItem = isFloorItem;
    }

    public compose(): Buffer {
        this.writeInt(this._isFloorItem ? 2 : 1);
        this.writeInt(this._id);
        return this.prepare();
    }


}
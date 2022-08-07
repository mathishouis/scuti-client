import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class DeleteNavigatorSavedSearchMessageComposer extends OutgoingPacket {

    private readonly  _id: number;

    constructor(id: number) {
        super(Outgoing.DeleteNavigatorSavedSearchMessageComposer);

        this._id = id;
    }

    public compose(): Buffer {
        this.writeInt(this._id);
        return this.prepare();
    }


}
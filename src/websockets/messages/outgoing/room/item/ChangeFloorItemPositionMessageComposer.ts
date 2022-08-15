import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class ChangeFloorItemPositionMessageComposer extends OutgoingPacket {

    private readonly _id: number;
    private readonly _x: number;
    private readonly _y: number;
    private readonly _direction: number;

    constructor(id: number, x: number, y: number, direction: number) {
        super(Outgoing.ChangeFloorItemPositionMessageComposer);

        this._id = id;
        this._x = x;
        this._y = y;
        this._direction = direction;
    }

    public compose(): Buffer {
        this.writeInt(this._id);
        this.writeInt(this._x);
        this.writeInt(this._y);
        this.writeInt(this._direction);
        return this.prepare();
    }


}
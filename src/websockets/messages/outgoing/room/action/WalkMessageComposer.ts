import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class WalkMessageComposer extends OutgoingPacket {

    private readonly _goalX: number;
    private readonly _goalY: number;

    constructor(goalX: number, goalY: number) {
        super(Outgoing.WalkMessageComposer);

        this._goalX = goalX;
        this._goalY = goalY;
    }

    public compose(): Buffer {
        this.writeInt(this._goalX);
        this.writeInt(this._goalY);
        return this.prepare();
    }


}
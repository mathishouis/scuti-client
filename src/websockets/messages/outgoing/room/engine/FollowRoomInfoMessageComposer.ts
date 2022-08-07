import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class FollowRoomInfoMessageComposer extends OutgoingPacket {

    private readonly _roomId: number;
    private readonly _isLoading: number;
    private readonly _checkEntry: number;

    constructor(roomId: number, isLoading: number, checkEntry: number) {
        super(Outgoing.FollowRoomInfoMessageComposer);

        this._roomId = roomId;
        this._isLoading = isLoading;
        this._checkEntry = checkEntry;
    }

    public compose(): Buffer {
        this.writeInt(this._roomId);
        this.writeInt(this._isLoading);
        this.writeInt(this._checkEntry);
        return this.prepare();
    }


}
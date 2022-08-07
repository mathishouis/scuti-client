import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class InitializeRoomMessageComposer extends OutgoingPacket {

    private readonly _roomId: number;
    private readonly _password: string;

    constructor(roomId: number, password: string) {
        super(Outgoing.InitializeRoomMessageComposer);

        this._roomId = roomId;
        this._password = password
    }

    public compose(): Buffer {
        console.log(this._roomId)
        this.writeInt(this._roomId);
        this.writeString(this._password);
        return this.prepare();
    }


}
import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";

export class DeleteNavigatorSavedSearchMessageComposer extends OutgoingPacket {

    private readonly _connection: WebSocket;
    private readonly  _id: number;

    constructor(connection: WebSocket, id: number) {
        super(Outgoing.DeleteNavigatorSavedSearchMessageComposer);

        this._id = id;

        this._connection = connection;
    }

    public compose(): void {
        this.writeInt(this._id);
        this._connection.send(this.prepare());
    }


}
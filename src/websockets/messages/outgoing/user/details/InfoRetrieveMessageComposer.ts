import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";

export class InfoRetrieveMessageComposer extends OutgoingPacket {

    private readonly _connection: WebSocket;

    constructor(connection: WebSocket) {
        super(Outgoing.InfoRetrieveMessageComposer);

        this._connection = connection;
    }

    public compose(): void {
        this._connection.send(this.prepare());
    }


}
import {OutgoingPacket} from "../../OutgoingPacket";
import {Outgoing} from "../../headers/Outgoing";

export class LoadCategoriesMessagecomposer extends OutgoingPacket {

    private readonly _connection: WebSocket;

    constructor(connection: WebSocket) {
        super(Outgoing.LoadCategoriesMessageComposer);

        this._connection = connection;
    }

    public compose(): void {
        this._connection.send(this.prepare());
    }


}
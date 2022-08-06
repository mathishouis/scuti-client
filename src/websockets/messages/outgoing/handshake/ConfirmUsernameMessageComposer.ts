import {OutgoingPacket} from "../../OutgoingPacket";
import {Outgoing} from "../../headers/Outgoing";

export class ConfirmUsernameMessageComposer extends OutgoingPacket {

    private readonly _connection: WebSocket;

    constructor(connection: WebSocket) {
        super(Outgoing.ConfirmUsernameMessageComposer);

        this._connection = connection;
    }

    public compose(): void {
        // TODO: Send player username
        this.writeString("username");
        this._connection.send(this.prepare());
    }


}
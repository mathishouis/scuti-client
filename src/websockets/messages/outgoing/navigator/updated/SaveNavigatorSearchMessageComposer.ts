import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";

export class SaveNavigatorSearchMessageComposer extends OutgoingPacket {

    private readonly _connection: WebSocket;
    private readonly  _view: string;
    private readonly  _searchQuery: string;

    constructor(connection: WebSocket, view: string, searchQuery: string) {
        super(Outgoing.SaveNavigatorSearchMessageComposer);

        this._view = view;
        this._searchQuery = searchQuery;

        this._connection = connection;
    }

    public compose(): void {
        this.writeString(this._view);
        this.writeString(this._searchQuery);
        this._connection.send(this.prepare());
    }


}
import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {store} from "../../../../../store/store";

export class NewNavigatorSearchMessageComposer extends OutgoingPacket {

    private readonly _connection: WebSocket;
    private readonly  _category: string;
    private readonly  _data: string;

    constructor(connection: WebSocket, category: string, data: string) {
        super(Outgoing.NewNavigatorSearchMessageComposer);

        this._category = category;
        this._data = data;

        this._connection = connection;
    }

    public compose(): void {
        store.commit('setLoading', true);
        this.writeString(this._category);
        this.writeString(this._data);
        this._connection.send(this.prepare());
    }


}
import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {store} from "../../../../../stores/store";

export class NavigatorSearchMessageComposer extends OutgoingPacket {

    private readonly _connection: WebSocket;
    private readonly _category: string;

    constructor(connection: WebSocket, category: string) {
        super(Outgoing.NavigatorSearchMessageComposer);

        this._connection = connection;

        this._category = category;
    }

    public compose(): void {

        store.commit('setLoading', true);

        this.writeString(this._category);
        this.writeInt(0);
        this._connection.send(this.prepare());
    }


}
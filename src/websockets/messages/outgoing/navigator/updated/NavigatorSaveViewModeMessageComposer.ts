import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";

export class NavigatorSaveViewModeMessageComposer extends OutgoingPacket {

    private readonly _connection: WebSocket;
    private readonly  _category: string;
    private readonly  _viewMode: number;

    constructor(connection: WebSocket, category: string, viewMode: number) {
        super(Outgoing.NavigatorSaveViewModeMessageComposer);

        this._category = category;
        this._viewMode = viewMode;

        this._connection = connection;
    }

    public compose(): void {
        this.writeString(this._category);
        this.writeInt(this._viewMode);
        this._connection.send(this.prepare());
    }


}
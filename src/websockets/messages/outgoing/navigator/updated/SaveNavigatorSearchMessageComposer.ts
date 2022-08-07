import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class SaveNavigatorSearchMessageComposer extends OutgoingPacket {

    private readonly  _view: string;
    private readonly  _searchQuery: string;

    constructor(view: string, searchQuery: string) {
        super(Outgoing.SaveNavigatorSearchMessageComposer);

        this._view = view;
        this._searchQuery = searchQuery;
    }

    public compose(): Buffer {
        this.writeString(this._view);
        this.writeString(this._searchQuery);
        return this.prepare();
    }


}
import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {store} from "../../../../../store";
import {Buffer} from "buffer";

export class NewNavigatorSearchMessageComposer extends OutgoingPacket {

    private readonly  _category: string;
    private readonly  _data: string;

    constructor(category: string, data: string) {
        super(Outgoing.NewNavigatorSearchMessageComposer);

        this._category = category;
        this._data = data;
    }

    public compose(): Buffer {
        store.commit('Navigator/setLoading', true);
        this.writeString(this._category);
        this.writeString(this._data);
        return this.prepare();
    }


}
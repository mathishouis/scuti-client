import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {store} from "../../../../../store";
import {Buffer} from "buffer";

export class NavigatorSearchMessageComposer extends OutgoingPacket {

    private readonly _category: string;

    constructor(category: string) {
        super(Outgoing.NavigatorSearchMessageComposer);

        this._category = category;
    }

    public compose(): Buffer {

        store.commit('setLoading', true);

        this.writeString(this._category);
        this.writeInt(0);
        return this.prepare();
    }


}
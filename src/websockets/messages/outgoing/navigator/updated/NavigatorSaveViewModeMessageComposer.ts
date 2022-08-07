import {OutgoingPacket} from "../../../OutgoingPacket";
import {Outgoing} from "../../../headers/Outgoing";
import {Buffer} from "buffer";

export class NavigatorSaveViewModeMessageComposer extends OutgoingPacket {

    private readonly  _category: string;
    private readonly  _viewMode: number;

    constructor(category: string, viewMode: number) {
        super(Outgoing.NavigatorSaveViewModeMessageComposer);

        this._category = category;
        this._viewMode = viewMode;
    }

    public compose(): Buffer{
        this.writeString(this._category);
        this.writeInt(this._viewMode);
        return this.prepare();
    }


}
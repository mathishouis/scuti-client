import {IncomingPacket} from "../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../store";
import {LoadCategoriesMessagecomposer} from "../../outgoing/navigator/LoadCategoriesMessagecomposer";
import {EventCategoriesMessagecomposer} from "../../outgoing/navigator/EventCategoriesMessagecomposer";

export class NavigatorMetaDataMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const size: number = this.readInt();
        for(let i: number = 0; i < size; i++){
            store.commit('Navigator/Views/addView', this.readString());
            this.readInt();
        }

        store.getters.getWebsocket.sendMessageComposer(new LoadCategoriesMessagecomposer());
        store.getters.getWebsocket.sendMessageComposer(new EventCategoriesMessagecomposer());

    }

}
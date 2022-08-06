import {IncomingPacket} from "../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../stores/store";
import {LoadCategoriesMessagecomposer} from "../../outgoing/navigator/LoadCategoriesMessagecomposer";
import {EventCategoriesMessagecomposer} from "../../outgoing/navigator/EventCategoriesMessagecomposer";

export class NavigatorMetaDataMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const size: number = this.readInt();
        for(let i: number = 0; i < size; i++){
            store.commit('addTab', { name: this.readString(), header: true });
            this.readInt();
        }

        new LoadCategoriesMessagecomposer(store.getters.getWebsocket.connection).compose();
        new EventCategoriesMessagecomposer(store.getters.getWebsocket.connection).compose();

    }

}
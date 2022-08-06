import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../stores/store";

export class NavigatorSavedSearchesMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        store.commit('clearSavedSearched');

        const size: number = this.readInt();

        for (let i: number = 0; i < size; i++) {
            const id: number = this.readInt();
            const view: string = this.readString();
            const searchQuery: string = this.readString();
            this.readString();

            store.commit('addSavedSearch', {
                'id': id,
                'view': view,
                'searchQuery': searchQuery
            });
        }
    }

}
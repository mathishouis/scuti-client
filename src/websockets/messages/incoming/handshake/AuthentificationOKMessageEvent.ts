import {IncomingPacket} from "../../IncomingPacket";
import {Buffer} from "buffer";
import {InfoRetrieveMessageComposer} from "../../outgoing/user/details/InfoRetrieveMessageComposer";
import {store} from "../../../../stores/store";

export class AuthentificationOKMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        new InfoRetrieveMessageComposer(store.getters.getWebsocket.connection).compose();
    }

}
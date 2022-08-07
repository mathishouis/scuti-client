import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {InitializeRoomMessageComposer} from "../../../outgoing/room/engine/InitializeRoomMessageComposer";

export class OpenConnectionMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        store.commit('LandingView/setVisible', false);
        store.commit('Room/setVisible', true);

    }

}
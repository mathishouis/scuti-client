import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {Avatar, Action} from "scuti-renderer";

export class LeaveRoomMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const playerId: number = Number(this.readString());

        store.getters['Room/Renderer/getRoom'].removeRoomObject(store.getters['Room/Avatars/getAvatar'](playerId));
        store.commit('Room/Avatars/removeAvatar', playerId);

        console.log(playerId);
        console.log(store.getters['Room/Avatars/getAvatars']);

    }

}
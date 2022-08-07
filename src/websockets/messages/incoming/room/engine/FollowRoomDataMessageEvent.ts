import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store/store";
import {InitializeRoomMessageComposer} from "../../../outgoing/room/engine/InitializeRoomMessageComposer";

export class FollowRoomDataMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const isLoading: boolean = this.readBool();
        const roomId: number = this.readInt();
        const roomName: string = this.readString();
        const roomOwnerId: number = this.readInt();
        const roomOwnerName: string = this.readString();
        const skipAuth: number = this.readInt();
        const userCount: number = this.readInt();
        const maxUsers: number = this.readInt();
        const description: string = this.readString();
        const trade: number = this.readInt();
        const score: number = this.readInt();
        this.readInt();
        const categoryId: number = this.readInt();

        const tagSize: number = this.readInt();

        for (let k: number = 0; k < tagSize; k++) {
            const tag: string = this.readString();
            // TODO: Add tags
        }

        // TODO: Thumbnails
        const thumbnail: number = this.readInt();
        if(thumbnail === 1) {
            const thumbnailUrl: string = this.readString();
        }

        // TODO: Password system
        store.getters.getWebsocket.sendMessageComposer(new InitializeRoomMessageComposer(roomId, ""));

    }

}
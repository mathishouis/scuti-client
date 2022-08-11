import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {InitializeRoomMessageComposer} from "../../../outgoing/room/engine/InitializeRoomMessageComposer";
import {AddUserToRoomMessageComposer} from "../../../outgoing/room/engine/AddUserToRoomMessageComposer";

export class RoomReadyMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const model: string = this.readString();
        const id: number = this.readInt();

        store.commit('Room/setVisible', true);
        store.getters['Room/Renderer/getRoom'].wallMaterial = store.getters['Room/Renderer/getRenderer'].materials.getWallMaterial(201);
        store.getters['Room/Renderer/getRoom'].floorMaterial = store.getters['Room/Renderer/getRenderer'].materials.getFloorMaterial(111);
        store.getters.getWebsocket.sendMessageComposer(new AddUserToRoomMessageComposer());

    }

}
import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {InitializeRoomMessageComposer} from "../../../outgoing/room/engine/InitializeRoomMessageComposer";
import {AddUserToRoomMessageComposer} from "../../../outgoing/room/engine/AddUserToRoomMessageComposer";
import {FloorFurniture} from "scuti-renderer";
import {ChangeFloorItemStateMessageComposer} from "../../../outgoing/room/item/ChangeFloorItemStateMessageComposer";

export class SlideObjectBundleMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const fromX: number = this.readInt();
        const fromY: number = this.readInt();

        const toX: number = this.readInt();
        const toY: number = this.readInt();

        const size: number = this.readInt();

        for (let i: number = 0; i < size; i++) {
            const key: number = this.readInt();

            const fromZ: number = parseFloat(this.readString());
            const toZ: number = parseFloat(this.readString());

            const furniture: FloorFurniture = store.getters['Room/Furnitures/getFloorItem'](key).furniture;

            furniture.move(fromX, fromY, fromZ, false);
            furniture.move(toX, toY, toZ, true);
        }

        const rollerItemId: number = this.readInt();

        const action: number = this.readInt(); // 1 = mv, 2 = std

        const avatarId: number = this.readInt();

        const fromZ: number = parseFloat(this.readString());
        const toZ: number = parseFloat(this.readString());

        if(avatarId !== 0) {
            store.getters['Room/Avatars/getAvatar'](avatarId).avatar.move(fromX, fromY, fromZ, false);
            store.getters['Room/Avatars/getAvatar'](avatarId).avatar.move(toX, toY, toZ, true);
        }
    }

}
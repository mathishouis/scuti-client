import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {Avatar, Action} from "scuti-renderer";

export class AvatarsMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const size: number = this.readInt();

        for (let i: number = 0; i < size; i++) {
            const id: number = this.readInt();
            const username: string = this.readString();
            const motto: string = this.readString();
            const figure: string = this.readString();
            const avatarId: number = this.readInt();
            const x: number = this.readInt();
            const y: number = this.readInt();
            const z: number = parseFloat(this.readString());
            const bodyRotation: number = this.readInt();
            const type: number = this.readInt();
            const gender: number = this.readString();

            const groupId: number = this.readInt();

            if(groupId === -1) {
                this.readInt();
                this.readInt();
            } else {
                this.readInt();
                this.readString();
                this.readString();
            }

            this.readInt();
            this.readBool();

            const avatar = new Avatar(store.getters['Room/Renderer/getRenderer'], {
                x: x,
                y: y,
                z: z,
                direction: bodyRotation,
                headDirection: bodyRotation,
                figure: figure
            });

            console.log({
                x: x,
                y: y,
                z: z,
                direction: bodyRotation,
                headDirection: bodyRotation,
                figure: figure,
                actions: [ Action.Walk]
            })

            store.getters['Room/Renderer/getRoom'].addRoomObject(avatar);

            store.commit('Room/Avatars/addAvatar', {
                id: avatarId,
                avatar: avatar
            });

        }

    }

}
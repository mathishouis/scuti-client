import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {Avatar, Action} from "scuti-renderer";

export class AvatarUpdateMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const size: number = this.readInt();

        for (let i: number = 0; i < size; i++) {

            const avatarId: number = this.readInt();
            const x: number = this.readInt();
            const y: number = this.readInt();
            const z: number = parseFloat(this.readString());
            const headRotation: number = this.readInt();
            const bodyRotation: number = this.readInt();
            const state: number = this.readString();

            console.log(x, y, z, store.getters['Room/Avatars/getAvatar'](avatarId).avatar);

            if(store.getters['Room/Avatars/getAvatar'](avatarId).avatar.headDirection !== headRotation) store.getters['Room/Avatars/getAvatar'](avatarId).avatar.headDirection = headRotation;
            if(store.getters['Room/Avatars/getAvatar'](avatarId).avatar.direction !== bodyRotation) store.getters['Room/Avatars/getAvatar'](avatarId).avatar.direction = bodyRotation;

            state.substring(1).split("/").forEach(parsedState => {
                let action = parsedState.split(" ")[0];
                let value = parsedState.split(" ")[1];
                if(action === "mv") {
                    store.getters['Room/Avatars/getAvatar'](avatarId).avatar.move(Number(value.split(",")[0]), Number(value.split(",")[1]), parseFloat(value.split(",")[2]), true);
                    if(!store.getters['Room/Avatars/getAvatar'](avatarId).avatar._actions.includes("Move")) {
                        store.getters['Room/Avatars/getAvatar'](avatarId).avatar.addAction(Action.Walk);
                    }
                } else if(action === "sit") {
                    if(!store.getters['Room/Avatars/getAvatar'](avatarId).avatar._actions.includes("Sit")) {
                        store.getters['Room/Avatars/getAvatar'](avatarId).avatar.addAction(Action.Sit);
                    }
                }
            });
            if(!state.includes("mv")) {
                store.getters['Room/Avatars/getAvatar'](avatarId).avatar.removeAction(Action.Walk);
            }
            if(!state.includes("sit")) {
                store.getters['Room/Avatars/getAvatar'](avatarId).avatar.removeAction(Action.Sit);
            }
            store.getters['Room/Avatars/getAvatar'](avatarId).avatar.move(x, y, z, false);


        }

    }

}
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

            if(store.getters['Room/Avatars/getAvatar'](avatarId).avatar.headDirection !== headRotation) store.getters['Room/Avatars/getAvatar'](avatarId).avatar.headDirection = headRotation;
            if(store.getters['Room/Avatars/getAvatar'](avatarId).avatar.direction !== bodyRotation) store.getters['Room/Avatars/getAvatar'](avatarId).avatar.direction = bodyRotation;
        console.log(state);
            state.substring(1).split("/").forEach(parsedState => {
                let action = parsedState.split(" ")[0];
                let value = parsedState.split(" ")[1];
                if(action === "mv") {
                    console.log(store.getters['Room/Avatars/getAvatar'](avatarId).avatar._actions.includes("Move"))
                    store.getters['Room/Avatars/getAvatar'](avatarId).avatar.move(value.split(",")[0], value.split(",")[1], value.split(",")[2], true);
                    if(!store.getters['Room/Avatars/getAvatar'](avatarId).avatar._actions.includes("Move")) {
                        store.getters['Room/Avatars/getAvatar'](avatarId).avatar.addAction(Action.Walk);
                    }
                }
            });
            if(!state.includes("mv")) {
                store.getters['Room/Avatars/getAvatar'](avatarId).avatar.removeAction(Action.Walk);
            }


        }

    }

}
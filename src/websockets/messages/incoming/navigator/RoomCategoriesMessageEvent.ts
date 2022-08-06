import {IncomingPacket} from "../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../stores/store";
import {LoadCategoriesMessagecomposer} from "../../outgoing/navigator/LoadCategoriesMessagecomposer";
import {EventCategoriesMessagecomposer} from "../../outgoing/navigator/EventCategoriesMessagecomposer";

export class RoomCategoriesMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const size: number = this.readInt();
        for(let i: number = 0; i < size; i++){
            const id: number = this.readInt();
            const name: number = this.readString();
            const rank: boolean = this.readBool();
            this.readBool();
            this.readString();
            this.readString();
            this.readBool();
        }

    }

}
import {IncomingPacket} from "../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../store";
import {LoadCategoriesMessagecomposer} from "../../outgoing/navigator/LoadCategoriesMessagecomposer";
import {EventCategoriesMessagecomposer} from "../../outgoing/navigator/EventCategoriesMessagecomposer";

export class EventCategoriesMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        this.readInt();
        this.readInt();
        const name: string = this.readString();
        this.readBool();

    }

}
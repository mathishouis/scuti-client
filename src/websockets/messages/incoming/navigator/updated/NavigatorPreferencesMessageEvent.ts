import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../stores/store";

export class NavigatorPreferencesMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        const navigatorX: number = this.readInt();
        const navigatorY: number = this.readInt();
        const navigatorWidth: number = this.readInt();
        const navigatorHeight: number = this.readInt();

        const showSearches: boolean = this.readBool();

        this.readInt();
    }

}
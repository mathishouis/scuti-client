import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";

export class EffectsInventoryMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        const size: number = this.readInt(); // Effect inventory list size

        for (let i: number = 0; i<size; i++) {
            const effectId: number = this.readInt(); // Effect ID
            const type: number = this.readInt(); // Effect type, 0 = Hand, 1 = Full
            this.readInt(); // ?
            this.readInt(); // ?
            this.readInt(); // ?
            this.readInt(); // ?
            const duration: boolean = this.readBool(); // Effect duration
        }
    }

}
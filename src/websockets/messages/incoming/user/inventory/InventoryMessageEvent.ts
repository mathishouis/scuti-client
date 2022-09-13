import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";

export class InventoryMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        //console.log(this.header);
        store.commit('Inventory/setVisible', true);

        const pageCount: number = this.readInt();
        const currentPage: number = this.readInt();
        const size: number = this.readInt();

        for(let i: number = 0; i < size; i++){
            const virtualId: number = this.readInt();
            const type: string = this.readString();
            const virtualId2: number = this.readInt();
            const spriteId: number = this.readInt();
        }
    }

}
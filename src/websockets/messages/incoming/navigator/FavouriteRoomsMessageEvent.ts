import {IncomingPacket} from "../../IncomingPacket";
import {Buffer} from "buffer";

export class FavouriteRoomsMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        const maxFavouriteRooms: number = this.readInt(); // Max favourite rooms
        const size: number = this.readInt(); // Favourite rooms list size

        for (let i: number = 0; i<size; i++) {
            const roomId = this.readInt(); // Favourite room id
        }
    }

}
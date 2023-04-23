import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { useNavigatorStore } from "@/stores/Navigator";

export class FavouritesRoomsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const maxFavouritesRooms: number = this.readInt();
    const favouritesRoomsSize: number = this.readInt();
    useNavigatorStore().favouritesRooms = [];
    useNavigatorStore().maxFavouritesRooms = maxFavouritesRooms;
    for (let i = 0; i < favouritesRoomsSize; i++) {
      const roomId: number = this.readInt();
      useNavigatorStore().favouritesRooms.push(roomId);
    }
  }
}

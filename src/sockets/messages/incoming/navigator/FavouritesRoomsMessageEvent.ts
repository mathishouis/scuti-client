// @ts-nocheck
import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";

export class FavouritesRoomsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const maxFavouritesRooms: number = this.readInt();
    const favouritesRoomsSize: number = this.readInt();
    store.commit("Navigator/clearFavouritesRooms");
    store.commit("Navigator/updateMaxFavouriteRooms", maxFavouritesRooms);
    for (let i = 0; i < favouritesRoomsSize; i++) {
      const roomId: number = this.readInt();
      store.commit("Navigator/addFavouriteRoom", roomId);
    }
  }
}

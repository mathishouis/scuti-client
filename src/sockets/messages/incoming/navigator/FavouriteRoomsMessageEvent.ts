import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { useNavigatorStore } from "@/stores/Navigator";
import { FavouriteRoomsMessageParser } from "@/sockets/messages/parsers/navigator/FavouriteRoomsMessageParser";

export class FavouriteRoomsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: FavouriteRoomsMessageParser = this
      .parser as FavouriteRoomsMessageParser;
    useNavigatorStore().maxFavouritesRooms = parser.maxFavouritesRooms;
    useNavigatorStore().favouritesRooms = parser.favouritesRooms;
  }
}

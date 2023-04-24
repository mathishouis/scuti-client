import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class FavouriteRoomsMessageParser implements MessageParser {
  private _maxFavouritesRooms!: number;
  private _favouritesRooms!: number[];

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._maxFavouritesRooms = 0;
    this._favouritesRooms = [];
  }

  public parse(message: IncomingMessage): void {
    this._maxFavouritesRooms = message.readInt();
    const favouritesRoomsSize: number = message.readInt();

    for (let i = 0; i < favouritesRoomsSize; i++) {
      this._favouritesRooms.push(message.readInt());
    }
  }

  public get maxFavouritesRooms(): number {
    return this._maxFavouritesRooms;
  }

  public get favouritesRooms(): number[] {
    return this._favouritesRooms;
  }
}

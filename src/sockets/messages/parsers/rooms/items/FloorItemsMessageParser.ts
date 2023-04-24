import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { FloorItemDataParser } from "@/sockets/messages/parsers/rooms/utils/FloorItemDataParser";

export class FloorItemsMessageParser implements MessageParser {
  private _owners!: Map<number, string>;
  private _items!: FloorItemDataParser[];

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._owners = new Map();
    this._items = [];
  }

  public parse(message: IncomingMessage): void {
    this._parseOwners(message);
    this._parseItems(message);
  }

  private _parseOwners(message: IncomingMessage): void {
    const ownersSize: number = message.readInt();
    for (let i = 0; i < ownersSize; i++) {
      this._owners.set(message.readInt(), message.readString());
    }
  }

  private _parseItems(message: IncomingMessage): void {
    const itemsSize: number = message.readInt();
    for (let i = 0; i < itemsSize; i++) {
      const item: FloorItemDataParser = new FloorItemDataParser(message);
      const ownerName = this._owners.get(item.ownerId);
      if (ownerName) item.ownerName = ownerName;
      this._items.push(item);
    }
  }

  public get owners(): Map<number, string> {
    return this._owners;
  }

  public get items(): FloorItemDataParser[] {
    return this._items;
  }
}

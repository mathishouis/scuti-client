import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { ObjectData } from "@/sockets/messages/parsers/rooms/utils/ObjectData";
import { StringDataType } from "@/sockets/messages/parsers/rooms/items/data/StringDataType";
import { LegacyDataType } from "@/sockets/messages/parsers/rooms/items/data/LegacyDataType";

export enum FurnitureDataKey {
  LEGACY_KEY,
  STRING_KEY,
  MAP_KEY,
  VOTE_KEY,
  EMPTY_KEY,
  NUMBER_KEY,
  HIGHSCORE_KEY,
  CRACKABLE_KEY,
}

export class FurnitureDataParser implements MessageParser {
  private _itemId!: number;
  private _data!: ObjectData | null;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._itemId = 0;
    this._data = null;
  }

  public parse(message: IncomingMessage): void {
    this._itemId = message.readInt();
    this._data = FurnitureDataParser.parseObjectData(message);
  }

  public static parseObjectData(message: IncomingMessage): ObjectData | null {
    const data: ObjectData | null = FurnitureDataParser.getData(
      message.readInt()
    );
    if (data === null) return null;
    data.parse(message);
    return data;
  }

  public static getData(flags: number): ObjectData | null {
    let objectData: ObjectData | null = null;

    switch (flags & 0xff) {
      case FurnitureDataKey.LEGACY_KEY:
        objectData = new LegacyDataType();
        break;
      case FurnitureDataKey.STRING_KEY:
        objectData = new StringDataType();
        break;
    }
    if (objectData) objectData.flags = flags & 0xff;
    return objectData;
  }
}

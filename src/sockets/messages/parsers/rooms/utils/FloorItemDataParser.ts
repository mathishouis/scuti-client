import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { ObjectData } from "@/sockets/messages/parsers/rooms/utils/ObjectData";
import { FurnitureDataParser } from "@/sockets/messages/parsers/rooms/utils/FurnitureDataParser";

export class FloorItemDataParser implements MessageParser {
  private _itemId!: number;
  private _spriteId!: number;
  private _spriteName!: string | null;
  private _x!: number;
  private _y!: number;
  private _direction!: number;
  private _z!: number;
  private _stackHeight!: number;
  private _extra!: number;
  private _type!: number;
  private _data!: ObjectData | null;
  private _state!: number;
  private _expires!: number;
  private _usagePolicy!: number;
  private _ownerId!: number;
  private _ownerName!: string | null;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._itemId = 0;
    this._spriteId = 0;
    this._spriteName = null;
    this._x = 0;
    this._y = 0;
    this._direction = 0;
    this._z = 0;
    this._stackHeight = 0;
    this._extra = 0;
    this._type = 0;
    this._data = null;
    this._state = 0;
    this._expires = 0;
    this._usagePolicy = 0;
    this._ownerId = 0;
    this._ownerName = null;
  }

  public parse(message: IncomingMessage): void {
    this._itemId = message.readInt();
    this._spriteId = message.readInt();
    this._x = message.readInt();
    this._y = message.readInt();
    this._direction = message.readInt();
    this._z = parseFloat(message.readString());
    console.log("z:", this._z);
    this._stackHeight = parseFloat(message.readString());
    console.log("h:", this._stackHeight);
    this._extra = message.readInt();
    //this._type = message.readInt();
    this._data = FurnitureDataParser.parseObjectData(message);
    /*if (this._type === 0) {
      this._data = message.readString(); //
      this._state = Number(this._data);
      this._expires = message.readInt(); //
      this._usagePolicy = message.readInt(); //
      this._ownerId = message.readInt(); //
      this._ownerName = null;
    } else if (this._type === 1) {
      const count: number = message.readInt();
      for (let i = 0; i < count * 2; i++) {
        const value: string = message.readString();
        console.log(value);
      }
      this._expires = message.readInt(); //
      this._usagePolicy = message.readInt(); //
      this._ownerId = message.readInt(); //
      this._ownerName = null;
    }*/
    this._state = parseFloat(this._data && this._data.data) || 0;
    this._expires = message.readInt(); //
    this._usagePolicy = message.readInt(); //
    this._ownerId = message.readInt(); //
    this._ownerName = null;
    /*
    this._data = message.readString(); //
    this._state = Number(this._data);
    this._expires = message.readInt(); //
    this._usagePolicy = message.readInt(); //
    this._ownerId = message.readInt(); //
    this._ownerName = null;*/

    //if (this._spriteId < 0) this._spriteName = message.readString();
  }

  public get itemId(): number {
    return this._itemId;
  }

  public get spriteId(): number {
    return this._spriteId;
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  public get direction(): number {
    return this._direction;
  }

  public get z(): number {
    return isNaN(this._z) ? 0 : this._z;
  }

  public get stackHeight(): number {
    return isNaN(this._stackHeight) ? 0 : this._stackHeight;
  }

  public get extra(): number {
    return this._extra;
  }

  public get type(): number {
    return this._type;
  }

  public get data(): ObjectData | null {
    return this._data;
  }

  public get state(): number {
    return this._state;
  }

  public get expires(): number {
    return this._expires;
  }

  public get usagePolicy(): number {
    return this._usagePolicy;
  }

  public get ownerId(): number {
    return this._ownerId;
  }

  // @ts-ignore
  public get ownerName(): string | null {
    return this._ownerName;
  }

  public set ownerName(username: string) {
    this._ownerName = username;
  }

  // @ts-ignore
  public get spriteName(): string | null {
    return this._spriteName;
  }

  public set spriteName(type: string) {
    this._spriteName = type;
  }
}

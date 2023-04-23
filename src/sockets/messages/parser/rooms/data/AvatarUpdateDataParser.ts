import { MessageParser } from "@/interfaces/Socket.interface";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { AvatarDataParser } from "@/sockets/messages/parser/rooms/data/AvatarDataParser";

export class AvatarUpdateDataParser implements MessageParser {
  private _avatarId!: number;
  private _x!: number;
  private _y!: number;
  private _z!: number;
  private _headRotation!: number;
  private _bodyRotation!: number;
  private _status!: string | null;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._avatarId = 0;
    this._x = 0;
    this._y = 0;
    this._z = 0;
    this._headRotation = 0;
    this._bodyRotation = 0;
    this._status = null;
  }

  public parse(message: IncomingMessage): void {
    this._avatarId = message.readInt();
    this._x = message.readInt();
    this._y = message.readInt();
    this._z = parseFloat(message.readString());
    this._headRotation = message.readInt();
    this._bodyRotation = message.readInt();
    this._status = message.readString();
  }

  public get avatarId(): number {
    return this._avatarId;
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  public get z(): number {
    return this._z;
  }

  public get headRotation(): number {
    return this._headRotation;
  }

  public get bodyRotation(): number {
    return this._bodyRotation;
  }

  public get status(): string | null {
    return this._status;
  }
}

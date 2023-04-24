import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class RoomPromotionMessageParser implements MessageParser {
  private _roomId!: number;
  private _ownerId!: number;
  private _ownerName!: string | null;
  private _promotionId!: number;
  private _promotionType!: number;
  private _promotionTitle!: string | null;
  private _promotionDescription!: string | null;
  private _startedSince!: number;
  private _expiresIn!: number;
  private _category!: number;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._roomId = 0;
    this._ownerId = 0;
    this._ownerName = null;
    this._promotionId = 0;
    this._promotionType = 0;
    this._promotionTitle = null;
    this._promotionDescription = null;
    this._startedSince = 0;
    this._expiresIn = 0;
    this._category = 0;
  }

  public parse(message: IncomingMessage): void {
    this._roomId = message.readInt();
    this._ownerId = message.readInt();
    this._ownerName = message.readString();
    this._promotionId = message.readInt();
    this._promotionType = message.readInt();
    this._promotionTitle = message.readString();
    this._promotionDescription = message.readString();
    this._startedSince = message.readInt();
    this._expiresIn = message.readInt();
    this._category = message.readInt();
  }

  public get roomId(): number {
    return this._roomId;
  }

  public get ownerId(): number {
    return this._ownerId;
  }

  public get ownerName(): string | null {
    return this._ownerName;
  }

  public get promotionId(): number {
    return this._promotionId;
  }

  public get promotionType(): number {
    return this._promotionType;
  }

  public get promotionTitle(): string | null {
    return this._promotionTitle;
  }

  public get promotionDescription(): string | null {
    return this._promotionDescription;
  }

  public get startedSince(): number {
    return this._startedSince;
  }

  public get expiresIn(): number {
    return this._expiresIn;
  }

  public get category(): number {
    return this._category;
  }
}

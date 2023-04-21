import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export enum BitMask {
  THUMBNAIL = 1,
  GROUPDATA = 2,
  ROOMEVENT = 4,
  SHOWOWNER = 8,
  ALLOW_PETS = 16,
  DISPLAY_ROOMEVENT = 32,
}

export class RoomDataParser {
  private _roomId!: number;
  private _roomName!: string | null;
  private _ownerId!: number;
  private _ownerName!: string | null;
  private _showOwner!: boolean;
  private _skipAuth!: number;
  private _userCount!: number;
  private _maxUserCount!: number;
  private _description!: string | null;
  private _trade!: number;
  private _score!: number;
  private _ranking!: number;
  private _categoryId!: number;
  private _tags!: string[];
  private _groupId!: number;
  private _groupName!: string | null;
  private _groupBadge!: string | null;
  private _eventName!: string | null;
  private _eventDescription!: string | null;
  private _eventExpiresIn!: number;
  private _allowPets!: boolean;
  private _displayEvent!: boolean;
  private _bitMask!: number;
  private _thumbnail!: string | null;

  constructor(message: IncomingMessage) {
    this._flush();
    this._parse(message);
  }

  private _flush(): void {
    this._roomId = 0;
    this._roomName = null;
    this._ownerId = 0;
    this._ownerName = null;
    this._showOwner = false;
    this._skipAuth = 0;
    this._userCount = 0;
    this._maxUserCount = 0;
    this._description = null;
    this._trade = 0;
    this._score = 0;
    this._ranking = 0;
    this._categoryId = 0;
    this._tags = [];
    this._groupId = 0;
    this._groupName = null;
    this._groupBadge = null;
    this._eventName = null;
    this._eventDescription = null;
    this._eventExpiresIn = 0;
    this._allowPets = false;
    this._displayEvent = false;
    this._bitMask = 0;
    this._thumbnail = null;
  }

  private _parse(message: IncomingMessage): void {
    this._roomId = message.readInt();
    this._roomName = message.readString();
    this._ownerId = message.readInt();
    this._ownerName = message.readString();
    this._skipAuth = message.readInt();
    this._userCount = message.readInt();
    this._maxUserCount = message.readInt();
    this._description = message.readString();
    this._trade = message.readInt();
    this._score = message.readInt();
    this._ranking = message.readInt();
    this._categoryId = message.readInt();

    this._parseTags(message);
    this._parseBitMask(message);
  }

  private _parseTags(message: IncomingMessage): void {
    this._tags = [];
    const tagSize: number = message.readInt();
    for (let i = 0; i < tagSize; i++) {
      this._tags.push(message.readString());
    }
  }

  private _parseBitMask(message: IncomingMessage): void {
    this._bitMask = message.readInt();

    if (this._bitMask & BitMask.THUMBNAIL)
      this._thumbnail = message.readString();

    if (this._bitMask & BitMask.GROUPDATA) {
      this._groupId = message.readInt();
      this._groupName = message.readString();
      this._groupBadge = message.readString();
    }

    if (this._bitMask & BitMask.ROOMEVENT) {
      this._eventName = message.readString();
      this._eventDescription = message.readString();
      this._eventExpiresIn = message.readInt();
    }

    this._showOwner = (this._bitMask & BitMask.SHOWOWNER) > 0;
    this._allowPets = (this._bitMask & BitMask.ALLOW_PETS) > 0;
    this._displayEvent = (this._bitMask & BitMask.DISPLAY_ROOMEVENT) > 0;
  }

  public get roomId(): number {
    return this._roomId;
  }

  public get roomName(): string | null {
    return this._roomName;
  }

  public get ownerId(): number {
    return this._ownerId;
  }

  public get ownerName(): string | null {
    return this._ownerName;
  }

  public get showOwner(): boolean {
    return this._showOwner;
  }

  public get skipAuth(): number {
    return this._skipAuth;
  }

  public get userCount(): number {
    return this._userCount;
  }

  public get maxUserCount(): number {
    return this._maxUserCount;
  }

  public get description(): string | null {
    return this._description;
  }

  public get trade(): number {
    return this._trade;
  }

  public get score(): number {
    return this._score;
  }

  public get ranking(): number {
    return this._ranking;
  }

  public get categoryId(): number {
    return this._categoryId;
  }

  public get tags(): string[] {
    return this._tags;
  }

  public get groupId(): number {
    return this._groupId;
  }

  public get groupName(): string | null {
    return this._groupName;
  }

  public get groupBadge(): string | null {
    return this._groupBadge;
  }

  public get eventName(): string | null {
    return this._eventName;
  }

  public get eventDescription(): string | null {
    return this._eventDescription;
  }

  public get eventExpiresIn(): number {
    return this._eventExpiresIn;
  }

  public get allowPets(): boolean {
    return this._allowPets;
  }

  public get displayEvent(): boolean {
    return this._displayEvent;
  }

  public get bitMask(): number {
    return this._bitMask;
  }

  public get thumbnail(): string | null {
    return this._thumbnail;
  }
}

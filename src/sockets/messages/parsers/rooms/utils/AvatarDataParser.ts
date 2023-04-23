import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { MessageParser } from "@/interfaces/Socket.interface";
import { Avatar } from "@/interfaces/Room.interface";

export enum AvatarType {
  USER = 1,
  PET = 2,
  BOT = 4,
}

export class AvatarDataParser implements MessageParser {
  private _playerId!: number;
  private _username!: string | null;
  private _motto!: string | null;
  private _figure!: string | null;
  private _avatarId!: number;
  private _x!: number;
  private _y!: number;
  private _z!: number;
  private _bodyRotation!: number;
  private _avatarType!: AvatarType;
  private _gender!: string | null;
  /** USER **/
  private _groupId!: number;
  private _groupType!: number;
  private _groupTitle!: string | null;
  private _groupDescription!: string | null;
  private _achievementPoints!: number;
  private _bool1!: boolean;
  /** BOT **/
  private _ownerId!: number;
  private _ownerName!: string | null;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._playerId = 0;
    this._username = null;
    this._motto = null;
    this._figure = null;
    this._avatarId = 0;
    this._x = 0;
    this._y = 0;
    this._z = 0;
    this._bodyRotation = 0;
    this._avatarType = AvatarType.USER;
    this._gender = null;
    this._groupId = 0;
    this._groupType = 0;
    this._groupTitle = null;
    this._groupDescription = null;
    this._achievementPoints = 0;
    this._bool1 = false;
    this._ownerId = 0;
    this._ownerName = null;
  }

  public parse(message: IncomingMessage): void {
    this._playerId = message.readInt();
    this._username = message.readString();
    this._motto = message.readString();
    this._figure = message.readString();
    this._avatarId = message.readInt();
    this._x = message.readInt();
    this._y = message.readInt();
    this._z = parseFloat(message.readString());
    this._bodyRotation = message.readInt();
    this._avatarType = message.readInt();
    this._gender = message.readString();

    switch (this._avatarType) {
      case AvatarType.USER:
        this._parseUser(message);
        break;
      case AvatarType.PET:
        break;
      case AvatarType.BOT:
        this._parseBot(message);
        break;
    }
  }

  private _parseUser(message: IncomingMessage): void {
    this._parseGroup(message);

    this._achievementPoints = message.readInt();
    this._bool1 = message.readBool();
  }

  private _parseGroup(message: IncomingMessage): void {
    this._groupId = message.readInt();
    if (this._groupId !== -1) {
      this._groupType = message.readInt();
      this._groupTitle = message.readString();
      this._groupDescription = message.readString();
    } else {
      message.readInt();
      message.readInt();
    }
  }

  private _parseBot(message: IncomingMessage): void {
    this._ownerId = message.readInt();
    this._ownerName = message.readString();
    message.readInt();
    message.readShort();
    message.readShort();
    message.readShort();
    message.readShort();
    message.readShort();
  }

  public get playerId(): number {
    return this._playerId;
  }

  public get username(): string | null {
    return this._username;
  }

  public get motto(): string | null {
    return this._motto;
  }

  public get figure(): string | null {
    return this._figure;
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

  public get bodyRotation(): number {
    return this._bodyRotation;
  }

  public get avatarType(): AvatarType {
    return this._avatarType;
  }

  public get gender(): string | null {
    return this._gender;
  }

  public get groupId(): number {
    return this._groupId;
  }

  public get groupType(): number {
    return this._groupType;
  }

  public get groupTitle(): string | null {
    return this._groupTitle;
  }

  public get groupDescription(): string | null {
    return this._groupDescription;
  }

  public get achievementPoints(): number {
    return this._achievementPoints;
  }

  public get avatar(): Avatar {
    return {
      playerId: this._playerId,
      username: this._username,
      motto: this._motto,
      figure: this._figure,
      avatarId: this._avatarId,
      gender: this._gender,
      achievementPoints: this._achievementPoints,
      favouriteGroupId: this._groupId,
      favouriteGroupTitle: this._groupTitle,
    };
  }
}

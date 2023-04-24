import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class UserDataParser implements MessageParser {
  private _userId!: number;
  private _username!: string | null;
  private _figure!: string | null;
  private _gender!: string | null;
  private _motto!: string | null;
  private _realName!: string | null;
  private _directMail!: boolean;
  private _respectsReceived!: number;
  private _respectsRemaining!: number;
  private _respectsPetRemaining!: number;
  private _streamPublishingAllowed!: boolean;
  private _lastAccessDate!: string | null;
  private _canChangeName!: boolean;
  private _safetyLocked!: boolean;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._userId = 0;
    this._username = null;
    this._figure = null;
    this._gender = null;
    this._motto = null;
    this._realName = null;
    this._directMail = false;
    this._respectsReceived = 0;
    this._respectsRemaining = 0;
    this._respectsPetRemaining = 0;
    this._streamPublishingAllowed = false;
    this._lastAccessDate = null;
    this._canChangeName = false;
    this._safetyLocked = false;
  }

  public parse(message: IncomingMessage): void {
    this._userId = message.readInt();
    this._username = message.readString();
    this._figure = message.readString();
    this._gender = message.readString();
    this._motto = message.readString();
    this._realName = message.readString();
    this._directMail = message.readBool();
    this._respectsReceived = message.readInt();
    this._respectsRemaining = message.readInt();
    this._respectsPetRemaining = message.readInt();
    this._streamPublishingAllowed = message.readBool();
    this._lastAccessDate = message.readString();
    this._canChangeName = message.readBool();
    this._safetyLocked = message.readBool();
  }

  public get userId(): number {
    return this._userId;
  }

  public get username(): string | null {
    return this._username;
  }

  public get figure(): string | null {
    return this._figure;
  }

  public get gender(): string | null {
    return this._gender;
  }

  public get motto(): string | null {
    return this._motto;
  }

  public get realName(): string | null {
    return this._realName;
  }

  public get directMail(): boolean {
    return this._directMail;
  }

  public get respectsReceived(): number {
    return this._respectsReceived;
  }

  public get respectsRemaining(): number {
    return this._respectsRemaining;
  }

  public get respectsPetRemaining(): number {
    return this._respectsPetRemaining;
  }

  public get streamPublishingAllowed(): boolean {
    return this._streamPublishingAllowed;
  }

  public get lastAccessedDate(): string | null {
    return this._lastAccessDate;
  }

  public get canChangeName(): boolean {
    return this._canChangeName;
  }

  public get safetyLocked(): boolean {
    return this._safetyLocked;
  }
}

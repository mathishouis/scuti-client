import { MessageParser } from "@/interfaces/Socket.interface";
import { RoomDataParser } from "@/sockets/messages/parsers/rooms/utils/RoomDataParser";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { RoomSettings } from "@/interfaces/Room.interface";

export class GetGuestRoomResultParser implements MessageParser {
  private _isLoading!: boolean;
  private _room!: RoomDataParser | null;
  private _checkEntry!: boolean;
  private _staffPicked!: boolean;
  private _bool1!: boolean;
  private _muted!: boolean;
  private _muteState!: number;
  private _kickState!: number;
  private _banState!: number;
  private _canMute!: boolean;
  private _bubbleMode!: number;
  private _bubbleType!: number;
  private _bubbleScroll!: number;
  private _chatDistance!: number;
  private _antiFlood!: number;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._isLoading = false;
    this._room = null;
    this._checkEntry = false;
    this._staffPicked = false;
    this._bool1 = false;
    this._muted = false;
    this._muteState = 0;
    this._kickState = 0;
    this._banState = 0;
    this._canMute = false;
    this._bubbleMode = 0;
    this._bubbleType = 0;
    this._bubbleScroll = 0;
    this._chatDistance = 0;
    this._antiFlood = 0;
  }

  public parse(message: IncomingMessage): void {
    this._isLoading = message.readBool();
    this._room = new RoomDataParser(message);
    this._checkEntry = message.readBool();
    this._staffPicked = message.readBool();
    this._bool1 = message.readBool();
    this._muted = message.readBool();
    this._muteState = message.readInt();
    this._kickState = message.readInt();
    this._banState = message.readInt();
    this._canMute = message.readBool();
    this._bubbleMode = message.readInt();
    this._bubbleType = message.readInt();
    this._bubbleScroll = message.readInt();
    this._chatDistance = message.readInt();
    this._antiFlood = message.readInt();
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public get room(): RoomDataParser | null {
    return this._room;
  }

  public get checkEntry(): boolean {
    return this._checkEntry;
  }

  public get staffPicked(): boolean {
    return this._staffPicked;
  }

  public get muted(): boolean {
    return this._muted;
  }

  public get muteState(): number {
    return this._muteState;
  }

  public get kickState(): number {
    return this._kickState;
  }

  public get banState(): number {
    return this._banState;
  }

  public get canMute(): boolean {
    return this._canMute;
  }

  public get bubbleMode(): number {
    return this._bubbleMode;
  }

  public get bubbleType(): number {
    return this._bubbleMode;
  }

  public get bubbleScroll(): number {
    return this._bubbleMode;
  }

  public get chatDistance(): number {
    return this._chatDistance;
  }

  public get antiFlood(): number {
    return this._antiFlood;
  }

  public get settings(): RoomSettings {
    return {
      isLoading: this._isLoading,
      checkEntry: this._checkEntry,
      staffPicked: this._staffPicked,
      muted: this._muted,
      muteState: this._muteState,
      kickState: this._kickState,
      banState: this._banState,
      canMute: this._canMute,
      bubbleMode: this._bubbleMode,
      bubbleType: this._bubbleType,
      bubbleScroll: this._bubbleScroll,
      chatDistance: this._chatDistance,
      antiFlood: this._antiFlood,
    };
  }
}

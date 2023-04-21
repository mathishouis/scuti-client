import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { RoomDataParser } from "@/sockets/messages/parser/rooms/data/RoomDataParser";

export class NavigatorCategoryDataParser {
  private _id!: string | null;
  private _name!: string | null;
  private _minRank!: number;
  private _minimised!: boolean;
  private _view!: number;
  private _rooms!: RoomDataParser[];

  constructor(message: IncomingMessage) {
    this._flush();
    this._parse(message);
  }

  private _flush(): void {
    this._id = null;
    this._name = null;
    this._minRank = 0;
    this._minimised = false;
    this._view = 0;
    this._rooms = [];
  }

  private _parse(message: IncomingMessage): void {
    this._id = message.readString();
    this._name = message.readString();
    this._minRank = message.readInt();
    this._minimised = message.readBool();
    this._view = message.readInt();

    const roomsSize: number = message.readInt();

    for (let i = 0; i < roomsSize; i++) {
      this._rooms.push(new RoomDataParser(message));
    }
  }

  public get id(): string | null {
    return this._id;
  }

  public get name(): string | null {
    return this._name;
  }

  public get minRank(): number {
    return this._minRank;
  }

  public get minimised(): boolean {
    return this._minimised;
  }

  public get view(): number {
    return this._view;
  }

  public get rooms(): RoomDataParser[] {
    return this._rooms;
  }
}

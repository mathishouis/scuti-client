import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class HomeRoomMessageParser implements MessageParser {
  private _roomId!: number;
  private _newRoom!: number;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._roomId = 0;
    this._newRoom = 0;
  }

  public parse(message: IncomingMessage): void {
    this._roomId = message.readInt();
    this._newRoom = message.readInt();
  }

  public get roomId(): number {
    return this._roomId;
  }

  public get newRoom(): number {
    return this._newRoom;
  }
}

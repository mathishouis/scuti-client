import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class CreateRoomMessageParser implements MessageParser {
  private _roomId!: number;
  private _roomName!: string | null;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._roomId = 0;
    this._roomName = null;
  }

  public parse(message: IncomingMessage): void {
    this._roomId = message.readInt();
    this._roomName = message.readString();
  }

  public get roomId(): number {
    return this._roomId;
  }

  public get roomName(): string | null {
    return this._roomName;
  }
}

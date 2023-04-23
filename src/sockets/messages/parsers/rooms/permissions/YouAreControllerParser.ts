import { MessageParser } from "@/interfaces/Socket.interface";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class YouAreControllerParser implements MessageParser {
  private _rightId!: number;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._rightId = 0;
  }

  public parse(message: IncomingMessage): void {
    this._rightId = message.readInt();
  }

  public get rightId(): number {
    return this._rightId;
  }
}

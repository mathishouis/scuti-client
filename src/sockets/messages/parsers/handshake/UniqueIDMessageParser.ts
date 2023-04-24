import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class UniqueIDMessageParser implements MessageParser {
  private _uniqueId!: string | null;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._uniqueId = null;
  }

  public parse(message: IncomingMessage): void {
    this._uniqueId = message.readString();
  }

  public get uniqueId(): string | null {
    return this._uniqueId;
  }
}

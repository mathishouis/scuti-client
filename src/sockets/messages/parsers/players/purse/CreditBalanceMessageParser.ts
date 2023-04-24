import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class CreditBalanceMessageParser implements MessageParser {
  private _credits!: number;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._credits = 0;
  }

  public parse(message: IncomingMessage): void {
    this._credits = parseInt(message.readString().replace(".0", ""));
  }

  public get credits(): number {
    return this._credits;
  }
}

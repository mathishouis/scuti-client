import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class ActivityPointsMessageParser implements MessageParser {
  private _currencies!: Map<number, number>;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._currencies = new Map();
  }

  public parse(message: IncomingMessage): void {
    const currenciesSize: number = message.readInt();
    for (let i = 0; i < currenciesSize; i++) {
      this._currencies.set(message.readInt(), message.readInt());
    }
  }

  public get currencies(): Map<number, number> {
    return this._currencies;
  }
}

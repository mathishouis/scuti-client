import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class RoomPropertyParser implements MessageParser {
  private _key!: string | null;
  private _value!: string | null;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._key = null;
    this._value = null;
  }

  public parse(message: IncomingMessage): void {
    this._key = message.readString();
    this._value = message.readString();
  }

  public get key(): string | null {
    return this._key;
  }

  public get value(): string | null {
    return this._value;
  }
}

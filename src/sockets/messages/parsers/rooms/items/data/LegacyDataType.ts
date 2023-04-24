import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { ObjectData } from "@/sockets/messages/parsers/rooms/utils/ObjectData";

export class LegacyDataType implements ObjectData {
  private _data!: string | null;
  private _flags!: number;

  constructor() {
    this.flush();
  }

  public flush(): void {
    this._data = null;
  }

  public parse(message: IncomingMessage): void {
    this._data = message.readString();
  }

  public get data(): string | null {
    return this._data;
  }

  public get flags(): number {
    return this._flags;
  }

  set flags(flags: number) {
    this._flags = flags;
  }
}

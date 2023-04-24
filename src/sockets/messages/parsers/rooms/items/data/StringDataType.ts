import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { ObjectData } from "@/sockets/messages/parsers/rooms/utils/ObjectData";

export class StringDataType implements ObjectData {
  private _data!: string[];
  private _flags!: number;

  constructor() {
    this.flush();
  }

  public flush(): void {
    this._data = [];
  }

  public parse(message: IncomingMessage): void {
    const stringsSize: number = message.readInt();
    for (let i = 0; i < stringsSize * 2; i++) {
      this._data.push(message.readString());
    }
  }

  public get data(): string[] {
    return this._data;
  }

  public get flags(): number {
    return this._flags;
  }

  set flags(flags: number) {
    this._flags = flags;
  }
}

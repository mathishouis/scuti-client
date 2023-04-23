import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class FloorHeightMapParser implements MessageParser {
  private _bool1!: boolean;
  private _wallHeight!: number;
  private _heightMap!: string | null;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._bool1 = false;
    this._wallHeight = 0;
    this._heightMap = null;
  }

  public parse(message: IncomingMessage): void {
    this._bool1 = message.readBool();
    this._wallHeight = message.readInt();
    this._heightMap = message.readString();
  }

  public get wallHeight(): number {
    return this._wallHeight;
  }

  public get heightMap(): string | null {
    return this._heightMap;
  }
}

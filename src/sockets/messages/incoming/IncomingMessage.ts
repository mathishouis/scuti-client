import { BufferWS } from "buffer.ws";
import { Buffer } from "buffer";
import { MessageParser } from "@/interfaces/Socket.interface";

export class IncomingMessage extends BufferWS {
  private readonly _length: number;
  private readonly _header: number;

  private _parser!: MessageParser;

  constructor(packet: Buffer) {
    super(packet);

    this._length = this.readInt();
    this._header = this.readShort();
  }

  public get header(): number {
    return this._header;
  }

  public get length(): number {
    return this._length;
  }

  public get parser(): MessageParser {
    return this._parser;
  }

  public set parser(parser: MessageParser) {
    this._parser = parser;
  }
}

import { BufferWS } from "buffer.ws";
import { Buffer } from "buffer";

export class OutgoingMessage extends BufferWS {
  private readonly _header: number;

  constructor(header: number) {
    super();

    this._header = header;
    this.writeInt(0);
    this.writeShort(this._header);
  }

  public get header(): number {
    return this._header;
  }

  public prepare(): Buffer {
    this.flip();
    this.writeInt(32);
    return new Buffer(this.getByteArray());
  }
}

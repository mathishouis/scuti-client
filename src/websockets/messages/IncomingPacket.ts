import { BufferWS } from 'buffer.ws';
import { Buffer } from "buffer";

export class IncomingPacket extends BufferWS {

    private readonly  _length: number;
    private readonly _header: number;

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

}
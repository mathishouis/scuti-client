import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { HeightMapMessageParser } from "@/sockets/messages/parsers/rooms/engine/HeightMapMessageParser";

export class HeightMapMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: HeightMapMessageParser = this
      .parser as HeightMapMessageParser;
    // TODO: Implement the packet
  }
}

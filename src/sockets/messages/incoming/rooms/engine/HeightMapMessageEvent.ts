import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { HeightMapParser } from "@/sockets/messages/parsers/rooms/engine/HeightMapParser";

export class HeightMapMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: HeightMapParser = this.parser as HeightMapParser;
    // TODO: Implement the packet
  }
}

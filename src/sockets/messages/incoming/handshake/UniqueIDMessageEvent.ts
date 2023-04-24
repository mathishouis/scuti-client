import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { UniqueIDMessageParser } from "@/sockets/messages/parsers/handshake/UniqueIDMessageParser";

export class UniqueIDMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: UniqueIDMessageParser = this.parser as UniqueIDMessageParser;
    // TODO: Complete this packet
  }
}

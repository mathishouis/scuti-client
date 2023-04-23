import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { RoomReadyParser } from "@/sockets/messages/parsers/rooms/access/RoomReadyParser";

export class FloorItemsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: RoomReadyParser = this.parser as RoomReadyParser;

  }
}

import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { RoomRatingParser } from "@/sockets/messages/parsers/rooms/settings/RoomRatingParser";

export class RoomRatingMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: RoomRatingParser = this.parser as RoomRatingParser;
    // TODO: Implement the packet
  }
}

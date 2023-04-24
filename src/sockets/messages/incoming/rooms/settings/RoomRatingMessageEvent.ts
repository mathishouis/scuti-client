import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { RoomRatingMessageParser } from "@/sockets/messages/parsers/rooms/settings/RoomRatingMessageParser";

export class RoomRatingMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: RoomRatingMessageParser = this
      .parser as RoomRatingMessageParser;
    // TODO: Implement the packet
  }
}

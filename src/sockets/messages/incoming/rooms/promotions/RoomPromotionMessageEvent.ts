import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { RoomPromotionMessageParser } from "@/sockets/messages/parsers/rooms/promotions/RoomPromotionMessageParser";

export class RoomPromotionMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: RoomPromotionMessageParser = this
      .parser as RoomPromotionMessageParser;
  }
}

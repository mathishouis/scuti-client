import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { RoomPromotionParser } from "@/sockets/messages/parsers/rooms/promotions/RoomPromotionParser";

export class RoomPromotionMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: RoomPromotionParser = this.parser as RoomPromotionParser;
  }
}

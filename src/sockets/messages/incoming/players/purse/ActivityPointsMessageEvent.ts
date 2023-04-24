import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { usePlayerStore } from "@/stores/Player";
import { ActivityPointsMessageParser } from "@/sockets/messages/parsers/players/purse/ActivityPointsMessageParser";

export class ActivityPointsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: ActivityPointsMessageParser = this
      .parser as ActivityPointsMessageParser;
    usePlayerStore().data.currencies = parser.currencies;
  }
}

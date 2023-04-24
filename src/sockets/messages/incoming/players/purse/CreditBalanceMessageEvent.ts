import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { usePlayerStore } from "@/stores/Player";
import { CreditBalanceMessageParser } from "@/sockets/messages/parsers/players/purse/CreditBalanceMessageParser";

export class CreditBalanceMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: CreditBalanceMessageParser = this
      .parser as CreditBalanceMessageParser;
    usePlayerStore().data.currencies.set(1, parser.credits);
  }
}

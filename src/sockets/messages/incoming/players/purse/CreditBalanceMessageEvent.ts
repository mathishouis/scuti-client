import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { usePlayerStore } from "@/stores/Player";

export class CreditBalanceMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const credits: string = this.readString();
    usePlayerStore().data.currencies.set(
      1,
      parseInt(credits.replace(".0", ""))
    );
  }
}

import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { usePlayerStore } from "@/stores/Player";

export class ActivityPointsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const currenciesSize: number = this.readInt();
    for (let i = 0; i < currenciesSize; i++) {
      const type: number = this.readInt();
      const amount: number = this.readInt();
      usePlayerStore().data.currencies.set(type, amount);
    }
  }
}

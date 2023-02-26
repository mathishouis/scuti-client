import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";

export class ActivityPointsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const currenciesSize: number = this.readInt();
    for (let i = 0; i < currenciesSize; i++) {
      const type: number = this.readInt();
      const amount: number = this.readInt();
      store.commit("User/updateCurrency", { type: type, amount: amount });
      console.log(type, amount);
    }
  }
}

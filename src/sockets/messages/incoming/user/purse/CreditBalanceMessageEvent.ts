// @ts-nocheck
import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";

export class CreditBalanceMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const credits: string = this.readString();
    store.commit("User/updateCurrency", {
      type: 1,
      amount: parseInt(credits.replace(".0", "")),
    });
  }
}

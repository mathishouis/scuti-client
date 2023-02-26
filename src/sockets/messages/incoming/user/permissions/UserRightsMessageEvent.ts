// @ts-nocheck
import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";

export class UserRightsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const hasClub: number = this.readInt();
    const rank: number = this.readInt();
    const isAmbassador: number = this.readBool();
    store.commit("User/updateClub", hasClub);
    store.commit("User/updateRank", rank);
    store.commit("User/updateAmbassador", isAmbassador);
  }
}

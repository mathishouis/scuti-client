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
    const isAmbassador: boolean = this.readBool();
    store.commit("User/setClub", hasClub);
    store.commit("User/setRank", rank);
    store.commit("User/setAmbassador", isAmbassador);
  }
}

// @ts-nocheck
import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";

export class FriendRequestsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    store.commit("Messenger/clearFriendRequests");
    this.readInt(); // ?
    const requestsSize: number = this.readInt();
    for (let i = 0; i < requestsSize; i++) {
      const id: number = this.readInt();
      const username: string = this.readString();
      const figure: string = this.readString();
      store.commit("Messenger/addFriendRequest", {
        id: id,
        username: username,
        figure: figure,
      });
    }
  }
}

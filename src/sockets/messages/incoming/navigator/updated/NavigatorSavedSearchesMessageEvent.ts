import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";

export class NavigatorSavedSearchesMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    store.commit("Navigator/Searches/clear");
    const searchesSize: number = this.readInt();
    for (let i = 0; i < searchesSize; i++) {
      const id: number = this.readInt();
      const view: string = this.readString();
      const searchQuery: string = this.readString();
      this.readString(); // ?
      store.commit("Navigator/Searches/add", {
        id: id,
        view: view,
        query: searchQuery,
      });
    }
  }
}

import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { useNavigatorStore } from "@/stores/Navigator";

export class NavigatorSavedSearchesMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    useNavigatorStore().savedSearches = [];
    const searchesSize: number = this.readInt();
    for (let i = 0; i < searchesSize; i++) {
      const id: number = this.readInt();
      const view: string = this.readString();
      const searchQuery: string = this.readString();
      this.readString(); // ?
      useNavigatorStore().savedSearches.push({
        id: id,
        view: view,
        query: searchQuery,
      });
    }
  }
}

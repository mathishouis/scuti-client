import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { useMessengerStore } from "@/stores/Messenger";

export class FriendRequestsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    useMessengerStore().requests = [];
    this.readInt(); // ?
    const requestsSize: number = this.readInt();
    for (let i = 0; i < requestsSize; i++) {
      const id: number = this.readInt();
      const username: string = this.readString();
      const figure: string = this.readString();
      useMessengerStore().requests.push({
        id: id,
        username: username,
        figure: figure,
      });
    }
  }
}

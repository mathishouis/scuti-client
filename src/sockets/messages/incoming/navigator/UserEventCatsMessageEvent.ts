import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";

export class UserEventCatsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    this.readInt(); // ?
    this.readInt(); // ?
    const name: string = this.readString();
    this.readBool(); // ?
  }
}

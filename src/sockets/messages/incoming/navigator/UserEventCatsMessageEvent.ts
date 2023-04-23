import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

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

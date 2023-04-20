import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";

export class UserFlatCatsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const categoriesSize: number = this.readInt();
    for (let i = 0; i < categoriesSize; i++) {
      const id: number = this.readInt();
      const name: string = this.readString();
      const minRank: boolean = this.readBool();
      this.readBool(); // ?
      this.readString(); // ?
      this.readString(); // ?
      this.readBool(); // ?
    }
  }
}

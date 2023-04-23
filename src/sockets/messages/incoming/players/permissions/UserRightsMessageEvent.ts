import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { usePlayerStore } from "@/stores/Player";

export class UserRightsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const hasClub: number = this.readInt();
    const rank: number = this.readInt();
    const isAmbassador: boolean = this.readBool();
    usePlayerStore().data.club = hasClub === 1;
    usePlayerStore().data.ambassador = isAmbassador;
    usePlayerStore().data.rank = rank;
  }
}

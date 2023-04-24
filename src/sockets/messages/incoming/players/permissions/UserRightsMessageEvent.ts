import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { usePlayerStore } from "@/stores/Player";
import { UserRightsMessageParser } from "@/sockets/messages/parsers/players/permissions/UserRightsMessageParser";

export class UserRightsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: UserRightsMessageParser = this
      .parser as UserRightsMessageParser;
    usePlayerStore().data.club = parser.hasClub;
    usePlayerStore().data.ambassador = parser.isAmbassador;
    usePlayerStore().data.rank = parser.rank;
  }
}

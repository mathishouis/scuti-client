import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { HomeRoomMessageParser } from "@/sockets/messages/parsers/handshake/HomeRoomMessageParser";
import { usePlayerStore } from "@/stores/Player";

export class HomeRoomMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: HomeRoomMessageParser = this.parser as HomeRoomMessageParser;
    usePlayerStore().data.homeRoom = parser.newRoom;
  }
}

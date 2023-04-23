import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { YouAreControllerParser } from "@/sockets/messages/parsers/rooms/permissions/YouAreControllerParser";
import { useRoomStore } from "@/stores/Room";

export class YouAreControllerMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: YouAreControllerParser = this
      .parser as YouAreControllerParser;
    useRoomStore().accessLevel = parser.rightId;
    // TODO: Implement the packet
  }
}

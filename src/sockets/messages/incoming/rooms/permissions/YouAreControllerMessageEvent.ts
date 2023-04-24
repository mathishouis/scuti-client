import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { YouAreControllerMessageParser } from "@/sockets/messages/parsers/rooms/permissions/YouAreControllerMessageParser";
import { useRoomStore } from "@/stores/Room";

export class YouAreControllerMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: YouAreControllerMessageParser = this
      .parser as YouAreControllerMessageParser;
    useRoomStore().accessLevel = parser.rightId;
    // TODO: Implement the packet
  }
}

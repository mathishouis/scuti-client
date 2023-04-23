import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { YouAreControllerParser } from "@/sockets/messages/parsers/rooms/permissions/YouAreControllerParser";

export class YouAreControllerMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: YouAreControllerParser = this
      .parser as YouAreControllerParser;
    store.commit("Room/setAccessLevel", parser.rightId);
    // TODO: Implement the packet
  }
}

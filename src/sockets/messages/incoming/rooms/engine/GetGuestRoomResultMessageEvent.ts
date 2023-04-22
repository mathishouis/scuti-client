import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { GuestRoomResultParser } from "@/sockets/messages/parser/rooms/GuestRoomResultParser";

export class GetGuestRoomResultMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: GuestRoomResultParser = this.parser as GuestRoomResultParser;
    console.log(parser.room);
    // TODO: Implement the packet
  }
}

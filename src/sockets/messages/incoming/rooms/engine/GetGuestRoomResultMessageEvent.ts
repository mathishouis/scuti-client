import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { GuestRoomResultParser } from "@/sockets/messages/parser/rooms/GuestRoomResultParser";
import { OpenFlatConnectionMessageComposer } from "@/sockets/messages/outgoing/rooms/engine/OpenFlatConnectionMessageComposer";

export class GetGuestRoomResultMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: GuestRoomResultParser = this.parser as GuestRoomResultParser;
    console.log(parser.room);
    // TODO: Implement the packet
    if (!parser.room) return;
    store.getters["Socket/socket"].send(
      new OpenFlatConnectionMessageComposer(parser.room?.roomId, "")
    );
  }
}

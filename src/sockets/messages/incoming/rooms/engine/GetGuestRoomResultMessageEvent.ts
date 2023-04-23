import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { GetGuestRoomResultParser } from "@/sockets/messages/parsers/rooms/engine/GetGuestRoomResultParser";
import { OpenFlatConnectionMessageComposer } from "@/sockets/messages/outgoing/rooms/engine/OpenFlatConnectionMessageComposer";

export class GetGuestRoomResultMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: GetGuestRoomResultParser = this
      .parser as GetGuestRoomResultParser;
    // TODO: Implement the packet
    store.commit("Room/updateData", parser.room);
    store.commit("Room/updateSettings", parser.settings);
    if (!parser.room) return;
    store.getters["Socket/socket"].send(
      new OpenFlatConnectionMessageComposer(parser.room?.roomId, "")
    );
  }
}

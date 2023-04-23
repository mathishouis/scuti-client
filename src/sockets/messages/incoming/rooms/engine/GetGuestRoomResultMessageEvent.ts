import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { GetGuestRoomResultParser } from "@/sockets/messages/parsers/rooms/engine/GetGuestRoomResultParser";
import { OpenFlatConnectionMessageComposer } from "@/sockets/messages/outgoing/rooms/engine/OpenFlatConnectionMessageComposer";
import { useRoomStore } from "@/stores/Room";
import { useSocketStore } from "@/stores/Socket";

export class GetGuestRoomResultMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: GetGuestRoomResultParser = this
      .parser as GetGuestRoomResultParser;
    // TODO: Implement the packet
    // @ts-ignore
    useRoomStore().data = parser.room;
    useRoomStore().settings = parser.settings;
    if (!parser.room) return;
    useSocketStore().socket?.send(
      new OpenFlatConnectionMessageComposer(parser.room?.roomId, "")
    );
  }
}

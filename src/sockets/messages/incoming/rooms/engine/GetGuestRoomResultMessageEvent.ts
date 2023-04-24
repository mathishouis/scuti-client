import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { GetGuestRoomResultMessageParser } from "@/sockets/messages/parsers/rooms/engine/GetGuestRoomResultMessageParser";
import { OpenFlatConnectionMessageComposer } from "@/sockets/messages/outgoing/rooms/engine/OpenFlatConnectionMessageComposer";
import { useRoomStore } from "@/stores/Room";
import { useSocketStore } from "@/stores/Socket";

export class GetGuestRoomResultMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: GetGuestRoomResultMessageParser = this
      .parser as GetGuestRoomResultMessageParser;
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

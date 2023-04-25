import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { useSocketStore } from "@/stores/Socket";
import { CreateRoomMessageParser } from "@/sockets/messages/parsers/navigator/CreateRoomMessageParser";
import { GetGuestRoomMessageComposer } from "@/sockets/messages/outgoing/rooms/engine/GetGuestRoomMessageComposer";
import { useWindowStore } from "@/stores/WindowView";

export class CreateRoomMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: CreateRoomMessageParser = this
      .parser as CreateRoomMessageParser;
    useSocketStore().socket!.send(
      new GetGuestRoomMessageComposer(parser.roomId, 0, 1)
    );
    useWindowStore().getWindow("navigator")!.visible = false;
    useWindowStore().getWindow("roomCreator")!.visible = false;
  }
}

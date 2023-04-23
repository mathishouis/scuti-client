import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { GetGuestRoomResultParser } from "@/sockets/messages/parsers/rooms/engine/GetGuestRoomResultParser";
import { OpenFlatConnectionMessageComposer } from "@/sockets/messages/outgoing/rooms/engine/OpenFlatConnectionMessageComposer";

export class OpenConnectionMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    store.commit("LandingView/setVisible", false);
  }
}

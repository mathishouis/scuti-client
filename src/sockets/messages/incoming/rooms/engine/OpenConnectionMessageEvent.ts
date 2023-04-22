import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { GuestRoomResultParser } from "@/sockets/messages/parser/rooms/GuestRoomResultParser";
import { OpenFlatConnectionMessageComposer } from "@/sockets/messages/outgoing/rooms/engine/OpenFlatConnectionMessageComposer";

export class OpenConnectionMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    store.commit("LandingView/setVisible", false);
  }
}

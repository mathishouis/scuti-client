import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { useLandingViewStore } from "@/stores/LandingView";

export class OpenConnectionMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    useLandingViewStore().visible = false;
  }
}

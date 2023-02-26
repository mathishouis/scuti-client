import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class MessengerInitMessageComposer extends OutgoingMessage {
  constructor() {
    super(Outgoing.MessengerInitMessageComposer);
  }

  public compose(): Buffer {
    return this.prepare();
  }
}

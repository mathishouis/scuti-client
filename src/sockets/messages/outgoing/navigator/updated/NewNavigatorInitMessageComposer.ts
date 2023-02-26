import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class NewNavigatorInitMessageComposer extends OutgoingMessage {
  constructor() {
    super(Outgoing.NewNavigatorInitMessageComposer);
  }

  public compose(): Buffer {
    return this.prepare();
  }
}

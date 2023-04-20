import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class GetUserEventCatsMessageComposer extends OutgoingMessage {
  constructor() {
    super(Outgoing.GetUserEventCatsMessageComposer);
  }

  public compose(): Buffer {
    return this.prepare();
  }
}

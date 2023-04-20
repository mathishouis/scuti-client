import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class GetUserFlatCatsMessageComposer extends OutgoingMessage {
  constructor() {
    super(Outgoing.GetUserFlatCatsMessageComposer);
  }

  public compose(): Buffer {
    return this.prepare();
  }
}

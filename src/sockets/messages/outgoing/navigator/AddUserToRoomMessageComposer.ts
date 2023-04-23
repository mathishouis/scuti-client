import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class AddUserToRoomMessageComposer extends OutgoingMessage {
  constructor() {
    super(Outgoing.AddUserToRoomMessageComposer);
  }

  public compose(): Buffer {
    return this.prepare();
  }
}

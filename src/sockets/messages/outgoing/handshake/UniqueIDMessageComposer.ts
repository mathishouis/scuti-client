// @ts-nocheck
import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class UniqueIDMessageComposer extends OutgoingMessage {
  constructor() {
    super(Outgoing.UniqueIDMessageComposer);
  }

  public compose(): Buffer {
    // TODO: Send player username
    this.writeString("11848329");
    this.writeString("11848329");
    this.writeString("11848329");
    return this.prepare();
  }
}

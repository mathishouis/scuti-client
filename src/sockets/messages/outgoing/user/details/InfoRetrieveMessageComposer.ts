// @ts-nocheck
import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class InfoRetrieveMessageComposer extends OutgoingMessage {
  constructor() {
    super(Outgoing.InfoRetrieveMessageComposer);
  }

  public compose(): Buffer {
    return this.prepare();
  }
}

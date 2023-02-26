import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class SSOTicketMessageComposer extends OutgoingMessage {
  private readonly _authTicket: string;

  constructor(authTicket: string) {
    super(Outgoing.SSOTicketMessageComposer);

    this._authTicket = authTicket;
  }

  public compose(): Buffer {
    this.writeString(this._authTicket);
    return this.prepare();
  }
}

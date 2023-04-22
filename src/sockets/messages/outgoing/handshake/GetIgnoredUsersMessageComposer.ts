import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class ConfirmUsernameMessageComposer extends OutgoingMessage {
  private readonly _username: string;

  constructor(username: string) {
    super(Outgoing.ConfirmUsernameMessageComposer);

    this._username = username;
  }

  public compose(): Buffer {
    this.writeString(this._username);
    return this.prepare();
  }
}

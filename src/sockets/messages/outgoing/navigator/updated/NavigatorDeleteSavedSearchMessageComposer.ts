import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class NavigatorDeleteSavedSearchMessageComposer extends OutgoingMessage {
  private readonly _id: number;

  constructor(id: number) {
    super(Outgoing.NavigatorDeleteSavedSearchMessageComposer);

    this._id = id;
  }

  public compose(): Buffer {
    this.writeInt(this._id);
    return this.prepare();
  }
}

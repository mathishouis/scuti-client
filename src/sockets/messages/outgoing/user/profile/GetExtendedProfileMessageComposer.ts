import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class GetExtendedProfileMessageComposer extends OutgoingMessage {
  private readonly _userId: number;

  constructor(userId: number) {
    super(Outgoing.GetExtendedProfileMessageComposer);

    this._userId = userId;
  }

  public compose(): Buffer {
    this.writeInt(this._userId);
    return this.prepare();
  }
}

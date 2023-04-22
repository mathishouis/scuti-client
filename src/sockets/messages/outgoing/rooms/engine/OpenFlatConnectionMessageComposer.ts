import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class OpenFlatConnectionMessageComposer extends OutgoingMessage {
  private readonly _roomId: number;
  private readonly _password: string;

  constructor(roomId: number, password: string) {
    super(Outgoing.OpenFlatConnectionMessageComposer);

    this._roomId = roomId;
    this._password = password;
  }

  public compose(): Buffer {
    this.writeInt(this._roomId);
    this.writeString(this._password);
    return this.prepare();
  }
}

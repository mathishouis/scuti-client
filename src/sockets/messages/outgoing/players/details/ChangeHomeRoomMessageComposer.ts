import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class ChangeHomeRoomMessageComposer extends OutgoingMessage {
  private readonly _roomId: number;

  constructor(roomId: number) {
    super(Outgoing.ChangeHomeRoomMessageComposer);

    this._roomId = roomId;
  }

  public compose(): Buffer {
    this.writeInt(this._roomId);
    return this.prepare();
  }
}

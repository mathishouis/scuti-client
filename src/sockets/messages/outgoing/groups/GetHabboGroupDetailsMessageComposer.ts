import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class GetHabboGroupDetailsMessageComposer extends OutgoingMessage {
  private readonly _groupId: number;
  private readonly _flag: boolean;

  constructor(groupId: number, flag: boolean) {
    super(Outgoing.GetHabboGroupDetailsMessageComposer);

    this._groupId = groupId;
    this._flag = flag;
  }

  public compose(): Buffer {
    this.writeInt(this._groupId);
    this.writeBool(this._flag);
    return this.prepare();
  }
}

import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class WalkMessageComposer extends OutgoingMessage {
  private readonly _goalX: number;
  private readonly _goalY: number;

  constructor(goalX: number, goalY: number) {
    super(Outgoing.WalkMessageComposer);

    this._goalX = goalX;
    this._goalY = goalY;
  }

  public compose(): Buffer {
    this.writeInt(this._goalX);
    this.writeInt(this._goalY);
    return this.prepare();
  }
}

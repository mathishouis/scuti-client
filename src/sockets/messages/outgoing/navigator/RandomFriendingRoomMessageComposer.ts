import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class RandomFriendingRoomMessageComposer extends OutgoingMessage {
  constructor() {
    super(Outgoing.RandomFriendingRoomMessageComposer);
  }

  public compose(): Buffer {
    return this.prepare();
  }
}

import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";
import store from "@/store";

export class GetGuestRoomMessageComposer extends OutgoingMessage {
  private readonly _roomId: number;
  private readonly _isLoading: number;
  private readonly _checkEntry: number;

  constructor(roomId: number, isLoading: number, checkEntry: number) {
    super(Outgoing.GetGuestRoomMessageComposer);

    this._roomId = roomId;
    this._isLoading = isLoading;
    this._checkEntry = checkEntry;
  }

  public compose(): Buffer {
    store.commit("Room/setVisible", false); // TODO: Move to LeaveRoomMessageComposer
    this.writeInt(this._roomId);
    this.writeInt(this._isLoading);
    this.writeInt(this._checkEntry);
    return this.prepare();
  }
}

import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class NavigatorSetSearchCodeViewModeMessageComposer extends OutgoingMessage {
  private readonly _category: string;
  private readonly _viewMode: number;

  constructor(category: string, viewMode: number) {
    super(Outgoing.NavigatorSetSearchCodeViewModeMessageComposer);

    this._category = category;
    this._viewMode = viewMode;
  }

  public compose(): Buffer {
    this.writeString(this._category);
    this.writeInt(this._viewMode);
    return this.prepare();
  }
}

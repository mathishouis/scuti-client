import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class NavigatorAddSavedSearchMessageComposer extends OutgoingMessage {
  private readonly _view: string;
  private readonly _query: string;

  constructor(view: string, query: string) {
    super(Outgoing.NavigatorAddSavedSearchMessageComposer);

    this._view = view;
    this._query = query;
  }

  public compose(): Buffer {
    this.writeString(this._view);
    this.writeString(this._query);
    return this.prepare();
  }
}

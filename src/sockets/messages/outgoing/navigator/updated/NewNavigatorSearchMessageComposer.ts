import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";
import store from "@/store";

export class NewNavigatorSearchMessageComposer extends OutgoingMessage {
  private readonly _category: string;

  constructor(category: string) {
    super(Outgoing.NewNavigatorSearchMessageComposer);

    this._category = category;
  }

  public compose(): Buffer {
    store.commit("Navigator/setLoading", true);
    this.writeString(this._category);
    this.writeString("");
    return this.prepare();
  }
}

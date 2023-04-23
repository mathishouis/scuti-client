import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";
import { useNavigatorStore } from "@/stores/Navigator";

export class NewNavigatorSearchMessageComposer extends OutgoingMessage {
  private readonly _category: string;
  private readonly _query: string;

  constructor(category: string, query: string) {
    super(Outgoing.NewNavigatorSearchMessageComposer);

    this._category = category;
    this._query = query;
  }

  public compose(): Buffer {
    useNavigatorStore().loading = true;
    this.writeString(this._category);
    this.writeString(this._query);
    return this.prepare();
  }
}

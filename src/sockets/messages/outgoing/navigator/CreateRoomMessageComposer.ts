import { Buffer } from "buffer";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Outgoing } from "@/sockets/messages/headers/Outgoing";

export class CreateRoomMessageComposer extends OutgoingMessage {
  private readonly _name: string;
  private readonly _description: string;
  private readonly _model: string;
  private readonly _category: number;
  private readonly _maxVisitors: number;
  private readonly _tradeState: number;

  constructor(
    name: string,
    description: string,
    model: string,
    category: number,
    maxVisitors: number,
    tradeState: number
  ) {
    super(Outgoing.CreateRoomMessageComposer);

    this._name = name;
    this._description = description;
    this._model = model;
    this._category = category;
    this._maxVisitors = maxVisitors;
    this._tradeState = tradeState;
  }

  public compose(): Buffer {
    this.writeString(this._name);
    this.writeString(this._description);
    this.writeString(this._model);
    this.writeInt(this._category);
    this.writeInt(this._maxVisitors);
    this.writeInt(this._tradeState);
    return this.prepare();
  }
}

import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class RoomReadyMessageParser implements MessageParser {
  private _id!: number;
  private _model!: string | null;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._id = 0;
    this._model = null;
  }

  public parse(message: IncomingMessage): void {
    this._id = message.readInt();
    this._model = message.readString();
  }

  public get id(): number {
    return this._id;
  }

  public get model(): string | null {
    return this._model;
  }
}

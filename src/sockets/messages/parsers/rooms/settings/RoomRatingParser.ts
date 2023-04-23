import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class RoomRatingParser implements MessageParser {
  private _score!: number;
  private _canRate!: boolean;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._score = 0;
    this._canRate = false;
  }

  public parse(message: IncomingMessage): void {
    this._score = message.readInt();
    this._canRate = message.readBool();
  }

  public get score(): number {
    return this._score;
  }

  public get canRate(): boolean {
    return this._canRate;
  }
}

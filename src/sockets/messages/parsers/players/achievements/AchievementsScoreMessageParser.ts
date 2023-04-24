import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class AchievementsScoreMessageParser implements MessageParser {
  private _score!: number;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._score = 0;
  }

  public parse(message: IncomingMessage): void {
    this._score = message.readInt();
  }

  public get score(): number {
    return this._score;
  }
}

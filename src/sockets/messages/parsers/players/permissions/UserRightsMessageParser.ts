import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class UserRightsMessageParser implements MessageParser {
  private _hasClub!: boolean;
  private _isAmbassador!: boolean;
  private _rank!: number;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._hasClub = false;
    this._isAmbassador = false;
    this._rank = 0;
  }

  public parse(message: IncomingMessage): void {
    this._hasClub = message.readInt() === 1;
    this._rank = message.readInt();
    this._isAmbassador = message.readBool();
  }

  public get hasClub(): boolean {
    return this._hasClub;
  }

  public get isAmbassador(): boolean {
    return this._isAmbassador;
  }

  public get rank(): number {
    return this._rank;
  }
}

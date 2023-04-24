import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { UserDataParser } from "@/sockets/messages/parsers/players/utils/UserDataParser";

export class UserObjectMessageParser implements MessageParser {
  private _user!: UserDataParser | null;

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._user = null;
  }

  public parse(message: IncomingMessage): void {
    this._user = new UserDataParser(message);
  }

  public get user(): UserDataParser | null {
    return this._user;
  }
}

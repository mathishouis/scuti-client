import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { AvatarUpdateDataParser } from "@/sockets/messages/parsers/rooms/utils/AvatarUpdateDataParser";

export class AvatarUpdateMessageParser implements MessageParser {
  private _avatars!: AvatarUpdateDataParser[];

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._avatars = [];
  }

  public parse(message: IncomingMessage): void {
    const avatarsSize: number = message.readInt();

    for (let i = 0; i < avatarsSize; i++) {
      this._avatars.push(new AvatarUpdateDataParser(message));
    }
  }

  public get avatars(): AvatarUpdateDataParser[] {
    return this._avatars;
  }
}

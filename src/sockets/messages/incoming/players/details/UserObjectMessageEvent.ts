import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { ConfirmUsernameMessageComposer } from "@/sockets/messages/outgoing/handshake/GetIgnoredUsersMessageComposer";
import { useSocketStore } from "@/stores/Socket";
import { usePlayerStore } from "@/stores/Player";
import { UserObjectMessageParser } from "@/sockets/messages/parsers/players/details/UserObjectMessageParser";

export class UserObjectMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: UserObjectMessageParser = this
      .parser as UserObjectMessageParser;
    // TODO: Review this part later...
    usePlayerStore().data.id = <number>parser.user?.userId;
    usePlayerStore().data.username = <string>parser.user?.username;
    usePlayerStore().data.figure = <string>parser.user?.figure;
    usePlayerStore().data.gender = <string>parser.user?.gender;
    useSocketStore().socket?.send(
      new ConfirmUsernameMessageComposer(<string>parser.user?.username)
    );
  }
}

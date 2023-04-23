import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { ConfirmUsernameMessageComposer } from "@/sockets/messages/outgoing/handshake/GetIgnoredUsersMessageComposer";
import { useSocketStore } from "@/stores/Socket";
import { usePlayerStore } from "@/stores/Player";

export class UserObjectMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const id: number = this.readInt();
    const username: string = this.readString();
    const figure: string = this.readString();
    const gender: string = this.readString();
    const usernameLowerCase: string = this.readString();
    const bool1: boolean = this.readBool(); // ?
    const int1: number = this.readInt(); // ?
    const dailyRespects: number = this.readInt();
    const dailyScratches: number = this.readInt();
    const bool2: boolean = this.readBool(); // ?
    const string1: string = this.readString(); // ?
    const bool3: boolean = this.readBool(); // ?
    const bool4: boolean = this.readBool(); // ?
    usePlayerStore().data.id = id;
    usePlayerStore().data.username = username;
    usePlayerStore().data.figure = figure;
    usePlayerStore().data.gender = gender;
    useSocketStore().socket?.send(new ConfirmUsernameMessageComposer(username));
  }
}

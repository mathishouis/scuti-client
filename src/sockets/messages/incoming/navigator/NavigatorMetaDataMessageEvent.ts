import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { GetUserFlatCatsMessageComposer } from "@/sockets/messages/outgoing/navigator/GetUserFlatCatsMessageComposer";
import { GetUserEventCatsMessageComposer } from "@/sockets/messages/outgoing/navigator/GetUserEventCatsMessageComposer";
import { useNavigatorStore } from "@/stores/Navigator";
import { useSocketStore } from "@/stores/Socket";

export class NavigatorMetaDataMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    useNavigatorStore().tabs = [];
    const tabSize: number = this.readInt();
    for (let i = 0; i < tabSize; i++) {
      const name: string = this.readString();
      this.readInt(); // ?
      useNavigatorStore().tabs.push(name);
      if (i === 0) useNavigatorStore().selectedTab = name;
    }
    // Load the categories
    useSocketStore().socket?.send(new GetUserFlatCatsMessageComposer());
    useSocketStore().socket?.send(new GetUserEventCatsMessageComposer());
  }
}

import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { GetUserFlatCatsMessageComposer } from "@/sockets/messages/outgoing/navigator/GetUserFlatCatsMessageComposer";
import { GetUserEventCatsMessageComposer } from "@/sockets/messages/outgoing/navigator/GetUserEventCatsMessageComposer";
import { useNavigatorStore } from "@/stores/Navigator";

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
    store.getters["Socket/socket"].send(new GetUserFlatCatsMessageComposer());
    store.getters["Socket/socket"].send(new GetUserEventCatsMessageComposer());
  }
}

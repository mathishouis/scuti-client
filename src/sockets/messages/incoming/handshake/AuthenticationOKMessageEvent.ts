import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { InfoRetrieveMessageComposer } from "@/sockets/messages/outgoing/players/details/InfoRetrieveMessageComposer";
import { MessengerInitMessageComposer } from "@/sockets/messages/outgoing/messenger/MessengerInitMessageComposer";
import { NewNavigatorInitMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NewNavigatorInitMessageComposer";

export class AuthenticationOKMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    store.commit("Socket/updateAuthenticated", true);
    store.commit("Loading/setPercentage", 84);
    store.commit("Loading/setVisible", false);
    store.getters["Socket/socket"].send(new InfoRetrieveMessageComposer());
    store.getters["Socket/socket"].send(new MessengerInitMessageComposer());
    store.getters["Socket/socket"].send(new NewNavigatorInitMessageComposer());
  }
}

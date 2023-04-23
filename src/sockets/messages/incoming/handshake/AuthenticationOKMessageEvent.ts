import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { InfoRetrieveMessageComposer } from "@/sockets/messages/outgoing/players/details/InfoRetrieveMessageComposer";
import { MessengerInitMessageComposer } from "@/sockets/messages/outgoing/messenger/MessengerInitMessageComposer";
import { NewNavigatorInitMessageComposer } from "@/sockets/messages/outgoing/navigator/updated/NewNavigatorInitMessageComposer";
import { useLoadingViewStore } from "@/stores/LoadingView";
import { useSocketStore } from "@/stores/Socket";

export class AuthenticationOKMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    useSocketStore().authenticated = true;
    useLoadingViewStore().percentage = 84;
    useLoadingViewStore().visible = false;
    useSocketStore().socket?.send(new InfoRetrieveMessageComposer());
    useSocketStore().socket?.send(new MessengerInitMessageComposer());
    useSocketStore().socket?.send(new NewNavigatorInitMessageComposer());
  }
}

import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { NavigatorCategoryDataParser } from "@/sockets/messages/parser/navigator/data/NavigatorCategoryDataParser";
import { NavigatorSearchResultParser } from "@/sockets/messages/parser/navigator/NavigatorSearchResultParser";

export class NavigatorSearchResultBlocksMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: NavigatorSearchResultParser = this
      .parser as NavigatorSearchResultParser;
    store.commit("Navigator/Categories/clear");
    parser.categories.forEach((category: NavigatorCategoryDataParser) => {
      store.commit("Navigator/Categories/add", {
        id: category.id,
        name: category.name,
        minRank: category.minRank,
        minimised: category.minimised,
        view: category.view,
        rooms: category.rooms,
      });
    });
    store.commit("Navigator/setLoading", false);
  }
}

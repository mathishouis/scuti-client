import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { NavigatorCategoryDataParser } from "@/sockets/messages/parsers/navigator/utils/NavigatorCategoryDataParser";
import { NavigatorSearchResultParser } from "@/sockets/messages/parsers/navigator/NavigatorSearchResultParser";

export class NavigatorSearchResultBlocksMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: NavigatorSearchResultParser = this
      .parser as NavigatorSearchResultParser;
    store.commit("Navigator/Categories/clear");
    parser.categories.forEach((category: NavigatorCategoryDataParser) => {
      store.commit("Navigator/Categories/add", category.category);
    });
    store.commit("Navigator/setLoading", false);
  }
}

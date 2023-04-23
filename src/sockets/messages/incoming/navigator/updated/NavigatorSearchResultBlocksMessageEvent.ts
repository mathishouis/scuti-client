import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { NavigatorCategoryDataParser } from "@/sockets/messages/parsers/navigator/utils/NavigatorCategoryDataParser";
import { NavigatorSearchResultParser } from "@/sockets/messages/parsers/navigator/NavigatorSearchResultParser";
import { useNavigatorStore } from "@/stores/Navigator";

export class NavigatorSearchResultBlocksMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: NavigatorSearchResultParser = this
      .parser as NavigatorSearchResultParser;
    useNavigatorStore().categories = [];
    parser.categories.forEach((category: NavigatorCategoryDataParser) => {
      useNavigatorStore().categories.push(category);
    });
    useNavigatorStore().loading = false;
  }
}

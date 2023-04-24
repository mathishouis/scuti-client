import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { NavigatorCategoryDataParser } from "@/sockets/messages/parsers/navigator/utils/NavigatorCategoryDataParser";
import { NavigatorSearchResultBlocksMessageParser } from "@/sockets/messages/parsers/navigator/updated/NavigatorSearchResultBlocksMessageParser";
import { useNavigatorStore } from "@/stores/Navigator";

export class NavigatorSearchResultBlocksMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: NavigatorSearchResultBlocksMessageParser = this
      .parser as NavigatorSearchResultBlocksMessageParser;
    useNavigatorStore().categories = [];
    parser.categories.forEach((category: NavigatorCategoryDataParser) => {
      useNavigatorStore().categories.push(category);
    });
    useNavigatorStore().loading = false;
  }
}

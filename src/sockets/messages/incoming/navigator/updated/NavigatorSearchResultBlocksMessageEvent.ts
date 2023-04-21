import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { Category } from "@/interfaces/Navigator.interface";
import { NavigatorCategoryDataParser } from "@/sockets/messages/parser/navigator/data/NavigatorCategoryDataParser";

export class NavigatorSearchResultBlocksMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const category: string = this.readString();
    const data: string = this.readString();
    if (category !== null) {
      store.commit("Navigator/Categories/clear");

      const categoriesSize: number = this.readInt();

      for (let i = 0; i < categoriesSize; i++) {
        const categoryData: NavigatorCategoryDataParser =
          new NavigatorCategoryDataParser(this);
        const category: Category = {
          id: categoryData.id,
          name: categoryData.name,
          minRank: categoryData.minRank,
          minimised: categoryData.minimised,
          view: categoryData.view,
          rooms: categoryData.rooms,
        };
        store.commit("Navigator/Categories/add", category);
      }
    }
    console.log(store.getters["Navigator/Categories/categories"]);
    store.commit("Navigator/setLoading", false);
  }
}

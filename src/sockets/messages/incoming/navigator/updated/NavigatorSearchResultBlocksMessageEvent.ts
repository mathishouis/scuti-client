import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { Category } from "@/interfaces/Navigator.interface";

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
        const id: string = this.readString();
        const name: string = this.readString();
        const minRank: number = this.readInt();
        const minimised: boolean = this.readBool();
        const view: number = this.readInt();

        const category: Category = {
          id: id,
          name: name,
          minRank: minRank,
          minimised: minimised,
          view: view,
          rooms: [],
        };

        const roomsSize: number = this.readInt();
        if (id === "") break;
        console.log("Room Size:", roomsSize, id, name);

        for (let j = 0; j < roomsSize; j++) {
          const roomId: number = this.readInt();
          const roomName: string = this.readString();
          const roomOwnerId: number = this.readInt();
          const roomOwnerName: string = this.readString();
          const skipAuth: number = this.readInt();
          const userCount: number = this.readInt();
          const maxUsers: number = this.readInt();
          const description: string = this.readString();
          const trade: number = this.readInt();
          const score: number = this.readInt();
          this.readInt();
          const categoryId: number = this.readInt();

          category.rooms.push({
            id: roomId,
            name: roomName,
            ownerId: roomOwnerId,
            ownerName: roomOwnerName,
            skipAuth: skipAuth,
            userCount: userCount,
            maxUsers: maxUsers,
            description: description,
            trade: trade,
            score: score,
            categoryId: categoryId,
            tags: [],
          });

          const tagSize: number = this.readInt();

          for (let k = 0; k < tagSize; k++) {
            const tag: string = this.readString();
            // TODO: Add tags
          }

          // TODO: Thumbnails
          const thumbnail: number = this.readInt();
          if (thumbnail === 1) {
            const thumbnailUrl: string = this.readString();
          }
        }
        store.commit("Navigator/Categories/add", category);
      }
    }
    console.log(store.getters["Navigator/Categories/categories"]);
    store.commit("Navigator/setLoading", false);
  }
}

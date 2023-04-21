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
          let thumbnailUrl = "";
          let groupId = null;
          let groupName = null;
          let groupBadge = null;
          let eventName = null;
          let eventDescription = null;
          let eventExpiresIn = null;

          const tagSize: number = this.readInt();
          const tags: string[] = [];

          for (let k = 0; k < tagSize; k++) {
            const tag: string = this.readString();
            tags.push(tag);
          }

          // TODO: Thumbnails
          const THUMBNAIL_BITMASK = 1;
          const GROUPDATA_BITMASK = 2;
          const ROOMEVENT_BITMASK = 4;
          const SHOWOWNER_BITMASK = 8;
          const ALLOW_PETS_BITMASK = 16;
          const DISPLAY_ROOMAD_BITMASK = 32;

          const bitMask: number = this.readInt();

          if (bitMask & THUMBNAIL_BITMASK) thumbnailUrl = this.readString();

          if (bitMask & GROUPDATA_BITMASK) {
            groupId = this.readInt();
            groupName = this.readString();
            groupBadge = this.readString();
          }

          if (bitMask & ROOMEVENT_BITMASK) {
            eventName = this.readString();
            eventDescription = this.readString();
            eventExpiresIn = this.readInt();
          }
          //this._showOwner = (this._bitMask & RoomDataParser.SHOWOWNER_BITMASK) > 0;
          //this._allowPets = (this._bitMask & RoomDataParser.ALLOW_PETS_BITMASK) > 0;
          //this._displayAd = (this._bitMask & RoomDataParser.DISPLAY_ROOMAD_BITMASK) > 0;
          //console.log("thumbnail", specialType, roomName);
          /*let thumbnailUrl = "";
          if (specialType === 1) {
            thumbnailUrl = this.readString();
          }*/

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
            tags: tags,
            thumbnail: thumbnailUrl,
            groupId: groupId,
            groupName: groupName,
            groupBadge: groupBadge,
            eventName: eventName,
            eventDescription: eventDescription,
            eventExpiresIn: eventExpiresIn,
          });
        }
        store.commit("Navigator/Categories/add", category);
      }
    }
    console.log(store.getters["Navigator/Categories/categories"]);
    store.commit("Navigator/setLoading", false);
  }
}

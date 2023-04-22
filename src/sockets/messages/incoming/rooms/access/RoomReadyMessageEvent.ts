import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { RoomReadyParser } from "@/sockets/messages/parser/rooms/access/RoomReadyParser";
import { FloorMaterial, Room, WallMaterial } from "scuti-renderer";

export class RoomReadyMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: RoomReadyParser = this.parser as RoomReadyParser;
    // TODO: Implement the packet
    if (store.getters["Room/Renderer/room"] !== undefined)
      store.getters["Room/Renderer/room"].destroy();
    store.commit(
      "Room/Renderer/updateRoom",
      new Room(store.getters["Room/Renderer/renderer"], {
        tileMap: "",
        floorMaterial: new FloorMaterial(
          store.getters["Room/Renderer/renderer"],
          111
        ),
        wallMaterial: new WallMaterial(
          store.getters["Room/Renderer/renderer"],
          112
        ),
      })
    );
    console.log(parser.model);
  }
}

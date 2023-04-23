import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { RoomReadyParser } from "@/sockets/messages/parsers/rooms/access/RoomReadyParser";
import { FloorMaterial, Room, WallMaterial } from "scuti-renderer";
import { AddUserToRoomMessageComposer } from "@/sockets/messages/outgoing/navigator/AddUserToRoomMessageComposer";
import { WalkMessageComposer } from "@/sockets/messages/outgoing/rooms/actions/WalkMessageComposer";

export class RoomReadyMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: RoomReadyParser = this.parser as RoomReadyParser;
    // TODO: Implement the packet
    store.commit("Room/setVisible", true);
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
    store.getters["Room/Renderer/room"].tiles.onPointerDown = (event: any) => {
      console.log(event.position.x, event.position.y);
      store.getters["Socket/socket"].send(
        new WalkMessageComposer(event.position.x, event.position.y)
      );
    };
    store.getters["Socket/socket"].send(new AddUserToRoomMessageComposer());
  }
}

import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { RoomPropertyParser } from "@/sockets/messages/parsers/rooms/engine/RoomPropertyParser";
import { FloorMaterial, WallMaterial } from "scuti-renderer";

export class RoomPropertyMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: RoomPropertyParser = this.parser as RoomPropertyParser;
    switch (parser.key) {
      case "wallpaper":
        store.getters["Room/Renderer/room"].wallMaterial = new WallMaterial(
          store.getters["Room/Renderer/renderer"],
          Number(parser.value)
        );
        break;
      case "floor":
        store.getters["Room/Renderer/room"].floorMaterial = new FloorMaterial(
          store.getters["Room/Renderer/renderer"],
          Number(parser.value)
        );
        break;
      case "landscape":
        // TODO: Implement landscape
        break;
    }
  }
}

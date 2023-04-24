import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { RoomPropertyMessageParser } from "@/sockets/messages/parsers/rooms/engine/RoomPropertyMessageParser";
import { FloorMaterial, Room, Scuti, WallMaterial } from "scuti-renderer";
import { useRendererStore } from "@/stores/Renderer";

export class RoomPropertyMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: RoomPropertyMessageParser = this
      .parser as RoomPropertyMessageParser;
    switch (parser.key) {
      case "wallpaper":
        (<Room>useRendererStore().room).wallMaterial = new WallMaterial(
          <Scuti>useRendererStore().engine,
          Number(parser.value)
        );
        break;
      case "floor":
        (<Room>useRendererStore().room).floorMaterial = new FloorMaterial(
          <Scuti>useRendererStore().engine,
          Number(parser.value)
        );
        break;
      case "landscape":
        // TODO: Implement landscape
        break;
    }
  }
}

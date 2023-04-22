import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { FloorHeightMapParser } from "@/sockets/messages/parser/rooms/engine/FloorHeightMapParser";

export class FloorHeightMapMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: FloorHeightMapParser = this.parser as FloorHeightMapParser;
    console.log(parser.heightMap?.replaceAll("\r", "\n"));
    store.getters["Room/Renderer/room"].wallHeight = parser.wallHeight;
    store.getters["Room/Renderer/room"].tileMap = parser.heightMap?.replaceAll(
      "\r",
      "\n"
    );
  }
}

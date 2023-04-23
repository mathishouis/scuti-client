import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { FloorHeightMapParser } from "@/sockets/messages/parsers/rooms/engine/FloorHeightMapParser";
import { useRendererStore } from "@/stores/Renderer";
import { Room } from "scuti-renderer";

export class FloorHeightMapMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: FloorHeightMapParser = this.parser as FloorHeightMapParser;
    (<Room>useRendererStore().room).wallHeight = parser.wallHeight;
    (<Room>useRendererStore().room).tileMap = (<string>(
      parser.heightMap
    )).replaceAll("\r", "\n");
  }
}

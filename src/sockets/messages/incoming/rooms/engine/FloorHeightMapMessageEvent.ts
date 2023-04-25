import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { FloorHeightMapMessageParser } from "@/sockets/messages/parsers/rooms/engine/FloorHeightMapMessageParser";
import { useRendererStore } from "@/stores/Renderer";
import { Room } from "scuti-renderer";

export class FloorHeightMapMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: FloorHeightMapMessageParser = this
      .parser as FloorHeightMapMessageParser;
    if (parser.wallHeight > 1)
      (<Room>useRendererStore().room).wallHeight = parser.wallHeight;
    (<Room>useRendererStore().room).tileMap = (<string>(
      parser.heightMap
    )).replaceAll("\r", "\n");
  }
}

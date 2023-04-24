import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { FloorItemsMessageParser } from "@/sockets/messages/parsers/rooms/items/FloorItemsMessageParser";
import { FloorItemDataParser } from "@/sockets/messages/parsers/rooms/utils/FloorItemDataParser";
import { FloorFurniture, Room } from "scuti-renderer";
import { useRendererStore } from "@/stores/Renderer";

export class FloorItemsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: FloorItemsMessageParser = this
      .parser as FloorItemsMessageParser;
    console.log(parser.items);
    parser.items.forEach((item: FloorItemDataParser) => {
      const furniture: FloorFurniture = new FloorFurniture({
        id: item.spriteId,
        position: {
          x: item.x,
          y: item.y,
          z: item.z,
        },
        direction: item.direction,
        state: item.state,
      });
      useRendererStore().floorItems.set(item.itemId, furniture);
      (<Room>useRendererStore().room).objects.add(furniture);
    });
  }
}

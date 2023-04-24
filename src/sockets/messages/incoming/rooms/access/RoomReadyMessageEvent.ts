import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { RoomReadyMessageParser } from "@/sockets/messages/parsers/rooms/access/RoomReadyMessageParser";
import { FloorMaterial, Room, Scuti, WallMaterial } from "scuti-renderer";
import { AddUserToRoomMessageComposer } from "@/sockets/messages/outgoing/navigator/AddUserToRoomMessageComposer";
import { WalkMessageComposer } from "@/sockets/messages/outgoing/rooms/actions/WalkMessageComposer";
import { useRoomStore } from "@/stores/Room";
import { useRendererStore } from "@/stores/Renderer";
import { useSocketStore } from "@/stores/Socket";

export class RoomReadyMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: RoomReadyMessageParser = this
      .parser as RoomReadyMessageParser;
    // TODO: Implement the packet
    useRoomStore().visible = true;
    if (useRendererStore().room !== undefined)
      useRendererStore().room?.destroy();
    const room: Room = new Room(<Scuti>useRendererStore().engine, {
      tileMap: "",
      floorMaterial: new FloorMaterial(<Scuti>useRendererStore().engine, 111),
      wallMaterial: new WallMaterial(<Scuti>useRendererStore().engine, 112),
    });
    room.tiles.onPointerUp = (event: any) => {
      console.log(event.position.x, event.position.y);
      useSocketStore().socket?.send(
        new WalkMessageComposer(event.position.x, event.position.y)
      );
    };
    useRendererStore().room = room;
    useSocketStore().socket?.send(new AddUserToRoomMessageComposer());
  }
}

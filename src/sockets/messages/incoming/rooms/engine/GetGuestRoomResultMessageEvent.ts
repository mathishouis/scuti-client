import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { RoomDataParser } from "@/sockets/messages/parser/rooms/data/RoomDataParser";

export class GetGuestRoomResultMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const isLoading: boolean = this.readBool();
    const roomData: RoomDataParser = new RoomDataParser(this);
    // TODO: Implement the packet
  }
}

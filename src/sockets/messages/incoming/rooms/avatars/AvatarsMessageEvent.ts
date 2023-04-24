import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { Avatar } from "scuti-renderer";
import { AvatarsMessageParser } from "@/sockets/messages/parsers/rooms/avatars/AvatarsMessageParser";
import { AvatarDataParser } from "@/sockets/messages/parsers/rooms/utils/AvatarDataParser";
import { useRoomStore } from "@/stores/Room";
import { useRendererStore } from "@/stores/Renderer";

export class AvatarsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: AvatarsMessageParser = this.parser as AvatarsMessageParser;
    parser.avatars.forEach((avatar: AvatarDataParser) => {
      const scutiAvatar: Avatar = new Avatar({
        actions: [],
        figure:
          avatar.figure ?? "hr-100-61.hd-180-7.ch-210-66.lg-270-82.sh-290-80",
        position: {
          x: avatar.x,
          y: avatar.y,
          z: avatar.z,
        },
        bodyDirection: avatar.bodyRotation,
        headDirection: avatar.bodyRotation,
      });
      scutiAvatar.zIndex = 1000;
      useRendererStore().room?.objects.add(scutiAvatar);
      useRendererStore().avatars.set(avatar.avatarId, scutiAvatar);
      useRoomStore().players.push(avatar.player);
    });
  }
}

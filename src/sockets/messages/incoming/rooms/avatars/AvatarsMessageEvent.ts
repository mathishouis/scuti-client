import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { Avatar, AvatarAction } from "scuti-renderer";
import { AvatarsParser } from "@/sockets/messages/parsers/rooms/avatars/AvatarsParser";
import { AvatarDataParser } from "@/sockets/messages/parsers/rooms/utils/AvatarDataParser";

export class AvatarsMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: AvatarsParser = this.parser as AvatarsParser;
    console.log(parser.avatars);
    parser.avatars.forEach((avatar: AvatarDataParser) => {
      console.log(avatar.figure, avatar.username);
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
      console.log(avatar.x, avatar.y, avatar.z);
      store.getters["Room/Renderer/room"].objects.add(scutiAvatar);
      store.commit("Room/Renderer/addAvatar", {
        id: avatar.avatarId,
        avatar: scutiAvatar,
      });
      store.commit("Room/Avatars/addAvatar", avatar.avatar);
    });
  }
}

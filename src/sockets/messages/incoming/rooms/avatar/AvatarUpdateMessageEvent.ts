import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";
import { AvatarUpdateParser } from "@/sockets/messages/parser/rooms/avatar/AvatarUpdateParser";
import { AvatarUpdateDataParser } from "@/sockets/messages/parser/rooms/data/AvatarUpdateDataParser";
import { Avatar, AvatarAction } from "scuti-renderer";

export class AvatarUpdateMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: AvatarUpdateParser = this.parser as AvatarUpdateParser;
    parser.avatars.forEach((avatar: AvatarUpdateDataParser) => {
      this._handleAvatar(avatar);
    });
  }

  private _handleAvatar(avatar: AvatarUpdateDataParser): void {
    const rendererAvatar: Avatar = store.getters["Room/Renderer/avatars"].get(
      avatar.avatarId
    );
    rendererAvatar.headDirection = avatar.headRotation;
    rendererAvatar.bodyDirection = avatar.bodyRotation;
    avatar.status
      ?.substring(1)
      .split("/")
      .forEach((status: string) => {
        const key: string = status.split(" ")[0];
        const value: string = status.split(" ")[1];
        // User & All status
        switch (key) {
          case "mv": {
            const x = Number(value.split(",")[0]);
            const y = Number(value.split(",")[1]);
            const z = parseFloat(value.split(",")[2]);
            console.log(x, y, z);
            rendererAvatar.addAction(AvatarAction.Walk);
            //store.getters["Room/Renderer/avatars"].get(avatar.avatarId).addA
            rendererAvatar.pos = {
              x: x,
              y: y,
              z: z,
            };
            break;
          }
          case "sit":
            rendererAvatar.addAction(AvatarAction.Sit);
            break;
          case "lay":
            break;
          case "sign":
            break;
          case "flatcrl":
            break;
          case "trd":
            break;
          case "vote":
            break;
          case "gst":
            break;
        }
      });
    if (!avatar.status?.includes("mv"))
      rendererAvatar.removeAction(AvatarAction.Walk);
    if (!avatar.status?.includes("sit"))
      rendererAvatar.removeAction(AvatarAction.Sit);
  }
}

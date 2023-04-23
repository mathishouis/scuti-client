import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import store from "@/store";

export class AchievementsScoreMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const points: number = this.readInt();
    store.commit("User/updateAchievementPoints", points);
  }
}

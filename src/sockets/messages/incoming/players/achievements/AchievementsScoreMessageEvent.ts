import { Buffer } from "buffer";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { usePlayerStore } from "@/stores/Player";
import { AchievementsScoreMessageParser } from "@/sockets/messages/parsers/players/achievements/AchievementsScoreMessageParser";

export class AchievementsScoreMessageEvent extends IncomingMessage {
  constructor(packet: Buffer) {
    super(packet);
  }

  public handle(): void {
    const parser: AchievementsScoreMessageParser = this
      .parser as AchievementsScoreMessageParser;
    usePlayerStore().data.achievementPoints = parser.score;
  }
}

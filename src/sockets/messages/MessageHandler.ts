// @ts-nocheck
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Buffer } from "buffer";
import { Incoming } from "@/sockets/messages/headers/Incoming";
import { UniqueIDMessageEvent } from "@/sockets/messages/incoming/handshake/UniqueIDMessageEvent";
import { AuthenticationOKMessageEvent } from "@/sockets/messages/incoming/handshake/AuthenticationOKMessageEvent";
import { UserRightsMessageEvent } from "@/sockets/messages/incoming/user/permissions/UserRightsMessageEvent";
import { FavouritesRoomsMessageEvent } from "@/sockets/messages/incoming/navigator/FavouritesRoomsMessageEvent";
import { ActivityPointsMessageEvent } from "@/sockets/messages/incoming/user/purse/ActivityPointsMessageEvent";
import { CreditBalanceMessageEvent } from "@/sockets/messages/incoming/user/purse/CreditBalanceMessageEvent";
import { UserObjectMessageEvent } from "@/sockets/messages/incoming/user/details/UserObjectMessageEvent";
import { AchievementsScoreMessageEvent } from "@/sockets/messages/incoming/user/achievements/AchievementsScoreMessageEvent";
import { FriendListFragmentMessageEvent } from "@/sockets/messages/incoming/messenger/FriendListFragmentMessageEvent";
import { FriendRequestsMessageEvent } from "@/sockets/messages/incoming/messenger/FriendRequestsMessageEvent";

export class MessageHandler {
  private readonly _incomingMessages: Map<number, IncomingMessage> = new Map();
  private readonly _outgoingMessages: Map<number, OutgoingMessage> = new Map();

  constructor() {
    this._registerMessages();
  }

  private _registerMessages(): void {
    this._registerMessage(
      Incoming.UniqueIDMessageEvent,
      <IncomingMessage>(<unknown>UniqueIDMessageEvent)
    );
    this._registerMessage(
      Incoming.AuthentificationOKMessageEvent,
      <IncomingMessage>(<unknown>AuthenticationOKMessageEvent)
    );
    this._registerMessage(
      Incoming.UserRightsMessageEvent,
      <IncomingMessage>(<unknown>UserRightsMessageEvent)
    );
    this._registerMessage(
      Incoming.FavouriteRoomsMessageEvent,
      <IncomingMessage>(<unknown>FavouritesRoomsMessageEvent)
    );
    // TODO: AvailabilityStatusMessageEvent 1769
    // TODO: PlayerSettingsMessageEvent 1001
    // TODO: HomeRoomMessageEvent 1776
    // TODO: EffectsInventoryMessageEvent 899
    // TODO: CfhTopicsInitMessageEvent 2333
    this._registerMessage(
      Incoming.ActivityPointsMessageEvent,
      <IncomingMessage>(<unknown>ActivityPointsMessageEvent)
    );
    this._registerMessage(
      Incoming.CreditBalanceMessageEvent,
      <IncomingMessage>(<unknown>CreditBalanceMessageEvent)
    );
    this._registerMessage(
      Incoming.UserObjectMessageEvent,
      <IncomingMessage>(<unknown>UserObjectMessageEvent)
    );
    // TODO: BuildersClubMembershipMessageEvent 2286
    // TODO: AllowancesMessageEvent 3189
    this._registerMessage(
      Incoming.AchievementsScoreMessageEvent,
      <IncomingMessage>(<unknown>AchievementsScoreMessageEvent)
    );
    // TODO: MessengerConfigMessageEvent 913
    // TODO: BadgeInventoryMessageEvent 2969
    // TODO: AchievementRequirementsMessageEvent 1924
    // TODO: ClubStatusMessageEvent 3459
    this._registerMessage(
      Incoming.FriendListFragmentMessageEvent,
      <IncomingMessage>(<unknown>FriendListFragmentMessageEvent)
    );
    this._registerMessage(
      Incoming.FriendRequestsMessageEvent,
      <IncomingMessage>(<unknown>FriendRequestsMessageEvent)
    );
  }

  private _registerMessage(header: number, handler: IncomingMessage): void {
    if (this._incomingMessages.has(header))
      return console.warn(
        "Header is already registered. Failed to register " +
          handler +
          " with header [" +
          header +
          "]."
      );
    this._incomingMessages.set(header, handler);
  }

  public handle(packet: Buffer) {
    const incomingPacket = new IncomingMessage(packet);
    if (this._incomingMessages.has(incomingPacket.header)) {
      const handlerClass = this._incomingMessages.get(incomingPacket.header);
      const handler = new handlerClass(packet);
      handler.handle();
      return console.warn("Handled message [" + incomingPacket.header + "]");
    } else {
      return console.error("Unknown message [" + incomingPacket.header + "]");
    }
  }
}

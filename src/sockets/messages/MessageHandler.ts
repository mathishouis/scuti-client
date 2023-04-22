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
import { NewNavigatorPreferencesMessageEvent } from "@/sockets/messages/incoming/navigator/updated/NewNavigatorPreferencesMessageEvent";
import { NavigatorMetaDataMessageEvent } from "@/sockets/messages/incoming/navigator/NavigatorMetaDataMessageEvent";
import { NavigatorLiftedRoomsMessageEvent } from "@/sockets/messages/incoming/navigator/updated/NavigatorLiftedRoomsMessageEvent";
import { NavigatorSavedSearchesMessageEvent } from "@/sockets/messages/incoming/navigator/updated/NavigatorSavedSearchesMessageEvent";
import { NavigatorCollapsedCategoriesMessageEvent } from "@/sockets/messages/incoming/navigator/updated/NavigatorCollapsedCategoriesMessageEvent";
import { UserFlatCatsMessageEvent } from "@/sockets/messages/incoming/navigator/UserFlatCatsMessageEvent";
import { UserEventCatsMessageEvent } from "@/sockets/messages/incoming/navigator/UserEventCatsMessageEvent";
import { NavigatorSearchResultBlocksMessageEvent } from "@/sockets/messages/incoming/navigator/updated/NavigatorSearchResultBlocksMessageEvent";
import { GetGuestRoomResultMessageEvent } from "@/sockets/messages/incoming/rooms/engine/GetGuestRoomResultMessageEvent";
import { MessageParser } from "@/interfaces/Socket.interface";
import { NavigatorSearchResultParser } from "@/sockets/messages/parser/navigator/NavigatorSearchResultParser";
import { GuestRoomResultParser } from "@/sockets/messages/parser/rooms/GuestRoomResultParser";
import { OpenConnectionMessageEvent } from "@/sockets/messages/incoming/rooms/engine/OpenConnectionMessageEvent";
import { RoomReadyMessageEvent } from "@/sockets/messages/incoming/rooms/access/RoomReadyMessageEvent";
import { RoomReadyParser } from "@/sockets/messages/parser/rooms/access/RoomReadyParser";
import { RoomPropertyMessageEvent } from "@/sockets/messages/incoming/rooms/engine/RoomPropertyMessageEvent";
import { RoomPropertyParser } from "@/sockets/messages/parser/rooms/engine/RoomPropertyParser";
import { FloorHeightMapMessageEvent } from "@/sockets/messages/incoming/rooms/engine/FloorHeightMapMessageEvent";
import { FloorHeightMapParser } from "@/sockets/messages/parser/rooms/engine/FloorHeightMapParser";

export class MessageHandler {
  private readonly _incomingMessages: Map<
    number,
    { handler: IncomingMessage; parser: MessageParser | undefined }
  > = new Map();
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
    /** Register messenger **/
    this._registerMessage(
      Incoming.FriendListFragmentMessageEvent,
      <IncomingMessage>(<unknown>FriendListFragmentMessageEvent)
    );
    this._registerMessage(
      Incoming.FriendRequestsMessageEvent,
      <IncomingMessage>(<unknown>FriendRequestsMessageEvent)
    );

    /** Register navigator **/
    this._registerMessage(
      Incoming.NewNavigatorPreferencesMessageEvent,
      <IncomingMessage>(<unknown>NewNavigatorPreferencesMessageEvent)
    );
    this._registerMessage(
      Incoming.NavigatorMetaDataMessageEvent,
      <IncomingMessage>(<unknown>NavigatorMetaDataMessageEvent)
    );
    this._registerMessage(
      Incoming.NavigatorLiftedRoomsMessageEvent,
      <IncomingMessage>(<unknown>NavigatorLiftedRoomsMessageEvent)
    );
    this._registerMessage(
      Incoming.NavigatorSavedSearchesMessageEvent,
      <IncomingMessage>(<unknown>NavigatorSavedSearchesMessageEvent)
    );
    this._registerMessage(
      Incoming.NavigatorCollapsedCategoriesMessageEvent,
      <IncomingMessage>(<unknown>NavigatorCollapsedCategoriesMessageEvent)
    );
    this._registerMessage(
      Incoming.UserFlatCatsMessageEvent,
      <IncomingMessage>(<unknown>UserFlatCatsMessageEvent)
    );
    this._registerMessage(
      Incoming.UserEventCatsMessageEvent,
      <IncomingMessage>(<unknown>UserEventCatsMessageEvent)
    );
    this._registerMessage(
      Incoming.NavigatorSearchResultBlocksMessageEvent,
      <IncomingMessage>(<unknown>NavigatorSearchResultBlocksMessageEvent),
      <MessageParser>(<unknown>NavigatorSearchResultParser)
    );

    /** Room loading **/
    this._registerMessage(
      Incoming.GetGuestRoomResultMessageEvent,
      <IncomingMessage>(<unknown>GetGuestRoomResultMessageEvent),
      <MessageParser>(<unknown>GuestRoomResultParser)
    );
    this._registerMessage(
      Incoming.OpenConnectionMessageEvent,
      <IncomingMessage>(<unknown>OpenConnectionMessageEvent)
    );
    this._registerMessage(
      Incoming.RoomReadyMessageEvent,
      <IncomingMessage>(<unknown>RoomReadyMessageEvent),
      <MessageParser>(<unknown>RoomReadyParser)
    );
    this._registerMessage(
      Incoming.RoomPropertyMessageEvent,
      <IncomingMessage>(<unknown>RoomPropertyMessageEvent),
      <MessageParser>(<unknown>RoomPropertyParser)
    );
    this._registerMessage(
      Incoming.FloorHeightMapMessageEvent,
      <IncomingMessage>(<unknown>FloorHeightMapMessageEvent),
      <MessageParser>(<unknown>FloorHeightMapParser)
    );
  }

  private _registerMessage(
    header: number,
    handler: IncomingMessage,
    parser?: MessageParser
  ): void {
    if (this._incomingMessages.has(header))
      return console.warn(
        "Header is already registered. Failed to register " +
          handler +
          " with header [" +
          header +
          "]."
      );
    this._incomingMessages.set(header, { handler: handler, parser: parser });
  }

  public handle(packet: Buffer) {
    const incomingPacket = new IncomingMessage(packet);
    if (this._incomingMessages.has(incomingPacket.header)) {
      const handlerClass = this._incomingMessages.get(
        incomingPacket.header
      )?.handler;
      const parserClass = this._incomingMessages.get(
        incomingPacket.header
      )?.parser;
      // @ts-ignore
      const handler = new handlerClass(packet);
      if (parserClass) {
        // @ts-ignore
        handler.parser = new parserClass(handler);
        handler.handle();
      } else {
        handler.handle();
      }
      return console.warn("Handled message [" + incomingPacket.header + "]");
    } else {
      return console.error("Unknown message [" + incomingPacket.header + "]");
    }
  }
}

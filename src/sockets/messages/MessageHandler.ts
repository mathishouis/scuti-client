import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Buffer } from "buffer";
import { Incoming } from "@/sockets/messages/headers/Incoming";
import { UniqueIDMessageEvent } from "@/sockets/messages/incoming/handshake/UniqueIDMessageEvent";
import { AuthenticationOKMessageEvent } from "@/sockets/messages/incoming/handshake/AuthenticationOKMessageEvent";
import { UserRightsMessageEvent } from "@/sockets/messages/incoming/players/permissions/UserRightsMessageEvent";
import { FavouriteRoomsMessageEvent } from "@/sockets/messages/incoming/navigator/FavouriteRoomsMessageEvent";
import { ActivityPointsMessageEvent } from "@/sockets/messages/incoming/players/purse/ActivityPointsMessageEvent";
import { CreditBalanceMessageEvent } from "@/sockets/messages/incoming/players/purse/CreditBalanceMessageEvent";
import { UserObjectMessageEvent } from "@/sockets/messages/incoming/players/details/UserObjectMessageEvent";
import { AchievementsScoreMessageEvent } from "@/sockets/messages/incoming/players/achievements/AchievementsScoreMessageEvent";
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
import { MessageParser } from "@/types/Socket";
import { NavigatorSearchResultBlocksMessageParser } from "@/sockets/messages/parsers/navigator/updated/NavigatorSearchResultBlocksMessageParser";
import { GetGuestRoomResultMessageParser } from "@/sockets/messages/parsers/rooms/engine/GetGuestRoomResultMessageParser";
import { OpenConnectionMessageEvent } from "@/sockets/messages/incoming/rooms/engine/OpenConnectionMessageEvent";
import { RoomReadyMessageEvent } from "@/sockets/messages/incoming/rooms/access/RoomReadyMessageEvent";
import { RoomReadyMessageParser } from "@/sockets/messages/parsers/rooms/access/RoomReadyMessageParser";
import { RoomPropertyMessageEvent } from "@/sockets/messages/incoming/rooms/engine/RoomPropertyMessageEvent";
import { RoomPropertyMessageParser } from "@/sockets/messages/parsers/rooms/engine/RoomPropertyMessageParser";
import { FloorHeightMapMessageEvent } from "@/sockets/messages/incoming/rooms/engine/FloorHeightMapMessageEvent";
import { FloorHeightMapMessageParser } from "@/sockets/messages/parsers/rooms/engine/FloorHeightMapMessageParser";
import { AvatarsMessageEvent } from "@/sockets/messages/incoming/rooms/avatars/AvatarsMessageEvent";
import { AvatarsMessageParser } from "@/sockets/messages/parsers/rooms/avatars/AvatarsMessageParser";
import { AvatarUpdateMessageEvent } from "@/sockets/messages/incoming/rooms/avatars/AvatarUpdateMessageEvent";
import { AvatarUpdateMessageParser } from "@/sockets/messages/parsers/rooms/avatars/AvatarUpdateMessageParser";
import { YouAreControllerMessageEvent } from "@/sockets/messages/incoming/rooms/permissions/YouAreControllerMessageEvent";
import { YouAreControllerMessageParser } from "@/sockets/messages/parsers/rooms/permissions/YouAreControllerMessageParser";
import { RoomRatingMessageEvent } from "@/sockets/messages/incoming/rooms/settings/RoomRatingMessageEvent";
import { RoomRatingMessageParser } from "@/sockets/messages/parsers/rooms/settings/RoomRatingMessageParser";
import { HeightMapMessageEvent } from "@/sockets/messages/incoming/rooms/engine/HeightMapMessageEvent";
import { HeightMapMessageParser } from "@/sockets/messages/parsers/rooms/engine/HeightMapMessageParser";
import { RoomPromotionMessageEvent } from "@/sockets/messages/incoming/rooms/promotions/RoomPromotionMessageEvent";
import { RoomPromotionMessageParser } from "@/sockets/messages/parsers/rooms/promotions/RoomPromotionMessageParser";
import { UniqueIDMessageParser } from "@/sockets/messages/parsers/handshake/UniqueIDMessageParser";
import { UserRightsMessageParser } from "@/sockets/messages/parsers/players/permissions/UserRightsMessageParser";
import { FavouriteRoomsMessageParser } from "@/sockets/messages/parsers/navigator/FavouriteRoomsMessageParser";
import { ActivityPointsMessageParser } from "@/sockets/messages/parsers/players/purse/ActivityPointsMessageParser";
import { CreditBalanceMessageParser } from "@/sockets/messages/parsers/players/purse/CreditBalanceMessageParser";
import { UserObjectMessageParser } from "@/sockets/messages/parsers/players/details/UserObjectMessageParser";
import { AchievementsScoreMessageParser } from "@/sockets/messages/parsers/players/achievements/AchievementsScoreMessageParser";
import { FloorItemsMessageEvent } from "@/sockets/messages/incoming/rooms/items/FloorItemsMessageEvent";
import { FloorItemsMessageParser } from "@/sockets/messages/parsers/rooms/items/FloorItemsMessageParser";

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
      <IncomingMessage>(<unknown>UniqueIDMessageEvent),
      <MessageParser>(<unknown>UniqueIDMessageParser)
    );
    this._registerMessage(
      Incoming.AuthentificationOKMessageEvent,
      <IncomingMessage>(<unknown>AuthenticationOKMessageEvent)
    );
    this._registerMessage(
      Incoming.UserRightsMessageEvent,
      <IncomingMessage>(<unknown>UserRightsMessageEvent),
      <MessageParser>(<unknown>UserRightsMessageParser)
    );
    this._registerMessage(
      Incoming.FavouriteRoomsMessageEvent,
      <IncomingMessage>(<unknown>FavouriteRoomsMessageEvent),
      <MessageParser>(<unknown>FavouriteRoomsMessageParser)
    );
    // TODO: AvailabilityStatusMessageEvent 1769
    // TODO: PlayerSettingsMessageEvent 1001
    // TODO: HomeRoomMessageEvent 1776
    // TODO: EffectsInventoryMessageEvent 899
    // TODO: CfhTopicsInitMessageEvent 2333
    this._registerMessage(
      Incoming.ActivityPointsMessageEvent,
      <IncomingMessage>(<unknown>ActivityPointsMessageEvent),
      <MessageParser>(<unknown>ActivityPointsMessageParser)
    );
    this._registerMessage(
      Incoming.CreditBalanceMessageEvent,
      <IncomingMessage>(<unknown>CreditBalanceMessageEvent),
      <MessageParser>(<unknown>CreditBalanceMessageParser)
    );
    this._registerMessage(
      Incoming.UserObjectMessageEvent,
      <IncomingMessage>(<unknown>UserObjectMessageEvent),
      <MessageParser>(<unknown>UserObjectMessageParser)
    );
    // TODO: BuildersClubMembershipMessageEvent 2286
    // TODO: AllowancesMessageEvent 3189
    this._registerMessage(
      Incoming.AchievementsScoreMessageEvent,
      <IncomingMessage>(<unknown>AchievementsScoreMessageEvent),
      <MessageParser>(<unknown>AchievementsScoreMessageParser)
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
      <MessageParser>(<unknown>NavigatorSearchResultBlocksMessageParser)
    );

    /** Room loading **/
    this._registerMessage(
      Incoming.GetGuestRoomResultMessageEvent,
      <IncomingMessage>(<unknown>GetGuestRoomResultMessageEvent),
      <MessageParser>(<unknown>GetGuestRoomResultMessageParser)
    );
    this._registerMessage(
      Incoming.OpenConnectionMessageEvent,
      <IncomingMessage>(<unknown>OpenConnectionMessageEvent)
    );
    this._registerMessage(
      Incoming.RoomReadyMessageEvent,
      <IncomingMessage>(<unknown>RoomReadyMessageEvent),
      <MessageParser>(<unknown>RoomReadyMessageParser)
    );
    this._registerMessage(
      Incoming.RoomPropertyMessageEvent,
      <IncomingMessage>(<unknown>RoomPropertyMessageEvent),
      <MessageParser>(<unknown>RoomPropertyMessageParser)
    );
    this._registerMessage(
      Incoming.FloorHeightMapMessageEvent,
      <IncomingMessage>(<unknown>FloorHeightMapMessageEvent),
      <MessageParser>(<unknown>FloorHeightMapMessageParser)
    );

    /** Room avatars **/
    this._registerMessage(
      Incoming.AvatarsMessageEvent,
      <IncomingMessage>(<unknown>AvatarsMessageEvent),
      <MessageParser>(<unknown>AvatarsMessageParser)
    );
    this._registerMessage(
      Incoming.AvatarUpdateMessageEvent,
      <IncomingMessage>(<unknown>AvatarUpdateMessageEvent),
      <MessageParser>(<unknown>AvatarUpdateMessageParser)
    );
    this._registerMessage(
      Incoming.YouAreControllerMessageEvent,
      <IncomingMessage>(<unknown>YouAreControllerMessageEvent),
      <MessageParser>(<unknown>YouAreControllerMessageParser)
    );
    this._registerMessage(
      Incoming.RoomRatingMessageEvent,
      <IncomingMessage>(<unknown>RoomRatingMessageEvent),
      <MessageParser>(<unknown>RoomRatingMessageParser)
    );
    this._registerMessage(
      Incoming.HeightMapMessageEvent,
      <IncomingMessage>(<unknown>HeightMapMessageEvent),
      <MessageParser>(<unknown>HeightMapMessageParser)
    );
    this._registerMessage(
      Incoming.RoomPromotionMessageEvent,
      <IncomingMessage>(<unknown>RoomPromotionMessageEvent),
      <MessageParser>(<unknown>RoomPromotionMessageParser)
    );
    this._registerMessage(
      Incoming.FloorItemsMessageEvent,
      <IncomingMessage>(<unknown>FloorItemsMessageEvent),
      <MessageParser>(<unknown>FloorItemsMessageParser)
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

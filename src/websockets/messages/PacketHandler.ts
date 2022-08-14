import {IncomingPacket} from "./IncomingPacket";
import {OutgoingPacket} from "./OutgoingPacket";
import {Incoming} from "./headers/Incoming";
import {UniqueIdMessageEvent} from "./incoming/handshake/UniqueIdMessageEvent";
import {Buffer} from "buffer";
import {AuthentificationOKMessageEvent} from "./incoming/handshake/AuthentificationOKMessageEvent";
import {FuserightsMessageEvent} from "./incoming/user/permissions/FuserightsMessageEvent";
import {FavouriteRoomsMessageEvent} from "./incoming/navigator/FavouriteRoomsMessageEvent";
import {AvailabilityStatusMessageEvent} from "./incoming/user/details/AvailabilityStatusMessageEvent";
import {PlayerSettingsMessageEvent} from "./incoming/user/details/PlayerSettingsMessageEvent";
import {HomeRoomMessageEvent} from "./incoming/handshake/HomeRoomMessageEvent";
import {EffectsInventoryMessageEvent} from "./incoming/user/inventory/EffectsInventoryMessageEvent";
import {CfhTopicsInitMessageEvent} from "./incoming/moderation/CfhTopicsInitMessageEvent";
import {AchievementProgressMessageEvent} from "./incoming/user/achievements/AchievementProgressMessageEvent";
import {UpdateInfoMessageEvent} from "./incoming/room/avatar/UpdateInfoMessageEvent";
import {CurrenciesMessageEvent} from "./incoming/user/purse/CurrenciesMessageEvent";
import {AchievementPointsMessageEvent} from "./incoming/user/achievements/AchievementPointsMessageEvent";
import {AchievementUnlockedMessageEvent} from "./incoming/user/achievements/AchievementUnlockedMessageEvent";
import {BadgeInventoryMessageEvent} from "./incoming/user/inventory/BadgeInventoryMessageEvent";
import {UnseenItemsMessageEvent} from "./incoming/catalog/UnseenItemsMessageEvent";
import {NavigatorSearchResultsSetMessageEvent} from "./incoming/navigator/updated/NavigatorSearchResultsSetMessageEvent";
import {UserObjectMessageEvent} from "./incoming/user/details/UserObjectMessageEvent";
import {NavigatorPreferencesMessageEvent} from "./incoming/navigator/updated/NavigatorPreferencesMessageEvent";
import {NavigatorMetaDataMessageEvent} from "./incoming/navigator/NavigatorMetaDataMessageEvent";
import {RoomCategoriesMessageEvent} from "./incoming/navigator/RoomCategoriesMessageEvent";
import {EventCategoriesMessageEvent} from "./incoming/navigator/EventCategoriesMessageEvent";
import {NavigatorSavedSearchesMessageEvent} from "./incoming/navigator/updated/NavigatorSavedSearchesMessageEvent";
import {FollowRoomDataMessageEvent} from "./incoming/room/engine/FollowRoomDataMessageEvent";
import {OpenConnectionMessageEvent} from "./incoming/room/engine/OpenConnectionMessageEvent";
import {HotelViewMessageEvent} from "./incoming/room/engine/HotelViewMessageEvent";
import {RoomReadyMessageEvent} from "./incoming/room/access/RoomReadyMessageEvent";
import {RoomPropertyMessageEvent} from "./incoming/room/engine/RoomPropertyMessageEvent";
import {RelativeHeightmapMessageEvent} from "./incoming/room/engine/RelativeHeightmapMessageEvent";
import {AvatarsMessageEvent} from "./incoming/room/avatar/AvatarsMessageEvent";
import {AvatarUpdateMessageEvent} from "./incoming/room/avatar/AvatarUpdateMessageEvent";
import {FloorItemsMessageEvent} from "./incoming/room/items/FloorItemsMessageEvent";
import {WallItemsMessageEvent} from "./incoming/room/items/WallItemsMessageEvent";
import {SendFloorItemMessageEvent} from "./incoming/room/items/SendFloorItemMessageEvent";
import {SendWallItemMessageEvent} from "./incoming/room/items/SendWallItemMessageEvent";
import {UpdateFloorItemMessageEvent} from "./incoming/room/items/UpdateFloorItemMessageEvent";
import {UpdateWallItemMessageEvent} from "./incoming/room/items/UpdateWallItemMessageEvent";
import {
    RemoveFloorItemMessageComposer,
    RemoveFloorItemMessageEvent
} from "./incoming/room/items/RemoveFloorItemMessageEvent";
import {RemoveWallItemMessageEvent} from "./incoming/room/items/RemoveWallItemMessageEvent";
import {SlideObjectBundleMessageEvent} from "./incoming/room/items/SlideObjectBundleMessageEvent";

export class PacketHandler {

    private readonly _incomingPackets: Map<number, IncomingPacket> = new Map();
    private readonly _outgoingPackets: Map<number, OutgoingPacket> = new Map();

    constructor() {
        this._registerPackets();
    }

    private _registerPackets(): void {
        this._registerPacket(Incoming.UniqueIdMessageEvent, <IncomingPacket><unknown>UniqueIdMessageEvent);
        this._registerPacket(Incoming.AuthentificationOKMessageEvent, <IncomingPacket><unknown>AuthentificationOKMessageEvent);
        this._registerPacket(Incoming.FuserightsMessageEvent, <IncomingPacket><unknown>FuserightsMessageEvent);
        this._registerPacket(Incoming.FavouriteRoomsMessageEvent, <IncomingPacket><unknown>FavouriteRoomsMessageEvent);
        this._registerPacket(Incoming.AvailabilityStatusMessageEvent, <IncomingPacket><unknown>AvailabilityStatusMessageEvent);
        this._registerPacket(Incoming.PlayerSettingsMessageEvent, <IncomingPacket><unknown>PlayerSettingsMessageEvent);
        this._registerPacket(Incoming.HomeRoomMessageEvent, <IncomingPacket><unknown>HomeRoomMessageEvent);
        this._registerPacket(Incoming.EffectsInventoryMessageEvent, <IncomingPacket><unknown>EffectsInventoryMessageEvent);
        this._registerPacket(Incoming.CfhTopicsInitMessageEvent, <IncomingPacket><unknown>CfhTopicsInitMessageEvent);
        this._registerPacket(Incoming.AchievementProgressMessageEvent, <IncomingPacket><unknown>AchievementProgressMessageEvent);
        this._registerPacket(Incoming.UpdateInfoMessageEvent, <IncomingPacket><unknown>UpdateInfoMessageEvent);
        this._registerPacket(Incoming.CurrenciesMessageEvent, <IncomingPacket><unknown>CurrenciesMessageEvent);
        this._registerPacket(Incoming.AchievementPointsMessageEvent, <IncomingPacket><unknown>AchievementPointsMessageEvent);
        this._registerPacket(Incoming.AchievementUnlockedMessageEvent, <IncomingPacket><unknown>AchievementUnlockedMessageEvent);
        this._registerPacket(Incoming.BadgeInventoryMessageEvent, <IncomingPacket><unknown>BadgeInventoryMessageEvent);
        this._registerPacket(Incoming.UnseenItemsMessageEvent, <IncomingPacket><unknown>UnseenItemsMessageEvent);
        this._registerPacket(Incoming.NavigatorSearchResultSetMessageEvent, <IncomingPacket><unknown>NavigatorSearchResultsSetMessageEvent);
        this._registerPacket(Incoming.UserObjectMessageEvent, <IncomingPacket><unknown>UserObjectMessageEvent);
        this._registerPacket(Incoming.NavigatorPreferencesMessageEvent, <IncomingPacket><unknown>NavigatorPreferencesMessageEvent);
        this._registerPacket(Incoming.NavigatorMetaDataMessageEvent, <IncomingPacket><unknown>NavigatorMetaDataMessageEvent);
        this._registerPacket(Incoming.RoomCategoriesMessageEvent, <IncomingPacket><unknown>RoomCategoriesMessageEvent);
        this._registerPacket(Incoming.EventCategoriesMessageEvent, <IncomingPacket><unknown>EventCategoriesMessageEvent);
        this._registerPacket(Incoming.NavigatorSavedSearchesMessageEvent, <IncomingPacket><unknown>NavigatorSavedSearchesMessageEvent);
        this._registerPacket(Incoming.FollowRoomDataMessageEvent, <IncomingPacket><unknown>FollowRoomDataMessageEvent);
        this._registerPacket(Incoming.OpenConnectionMessageEvent, <IncomingPacket><unknown>OpenConnectionMessageEvent);
        this._registerPacket(Incoming.HotelViewMessageEvent, <IncomingPacket><unknown>HotelViewMessageEvent);
        this._registerPacket(Incoming.RoomReadyMessageEvent, <IncomingPacket><unknown>RoomReadyMessageEvent);
        this._registerPacket(Incoming.RoomPropertyMessageEvent, <IncomingPacket><unknown>RoomPropertyMessageEvent);
        this._registerPacket(Incoming.RelativeHeightmapMessageEvent, <IncomingPacket><unknown>RelativeHeightmapMessageEvent);
        this._registerPacket(Incoming.AvatarsMessageEvent, <IncomingPacket><unknown>AvatarsMessageEvent);
        this._registerPacket(Incoming.AvatarUpdateMessageEvent, <IncomingPacket><unknown>AvatarUpdateMessageEvent);
        this._registerPacket(Incoming.FloorItemsMessageEvent, <IncomingPacket><unknown>FloorItemsMessageEvent);
        this._registerPacket(Incoming.WallItemsMessageEvent, <IncomingPacket><unknown>WallItemsMessageEvent);
        this._registerPacket(Incoming.SendFloorItemMessageEvent, <IncomingPacket><unknown>SendFloorItemMessageEvent);
        this._registerPacket(Incoming.SendWallItemMessageEvent, <IncomingPacket><unknown>SendWallItemMessageEvent);
        this._registerPacket(Incoming.UpdateFloorItemMessageEvent, <IncomingPacket><unknown>UpdateFloorItemMessageEvent);
        this._registerPacket(Incoming.UpdateWallItemMessageEvent, <IncomingPacket><unknown>UpdateWallItemMessageEvent);
        this._registerPacket(Incoming.RemoveFloorItemMessageEvent, <IncomingPacket><unknown>RemoveFloorItemMessageEvent);
        this._registerPacket(Incoming.RemoveWallItemMessageEvent, <IncomingPacket><unknown>RemoveWallItemMessageEvent);
        this._registerPacket(Incoming.SlideObjectBundleMessageEvent, <IncomingPacket><unknown>SlideObjectBundleMessageEvent);
    }

    private _registerPacket(header: number, handler: IncomingPacket): void {
        if(this._incomingPackets.has(header)) return console.warn('Header is already registered. Failed to register ' + handler + ' with header [' + header + '].');
        this._incomingPackets.set(header, handler);
    }

    public handle(packet: Buffer) {
        const incomingPacket = new IncomingPacket(packet);
        if(this._incomingPackets.has(incomingPacket.header)) {
            const handlerClass = this._incomingPackets.get(incomingPacket.header);
            const handler = new handlerClass(packet);
            handler.handle();
            return console.warn('Handled message [' + incomingPacket.header + ']');
        } else {
            return console.error('Unknown message [' + incomingPacket.header + ']');
        }
    }

}
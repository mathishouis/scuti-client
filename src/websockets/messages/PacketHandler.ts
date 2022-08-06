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
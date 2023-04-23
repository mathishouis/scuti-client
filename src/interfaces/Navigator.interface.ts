import { RoomDataParser } from "@/sockets/messages/parsers/rooms/utils/RoomDataParser";

export interface Category {
    id: string | null;
    name: string | null;
    minRank: number;
    minimised: boolean;
    view: number;
    rooms: RoomDataParser[];
}

export interface Room {
    roomId: number;
    roomName: string | null;
    ownerId: number;
    ownerName: string | null;
    showOwner: boolean;
    skipAuth: number;
    userCount: number;
    maxUserCount: number;
    description: string | null;
    trade: number;
    score: number;
    ranking: number;
    categoryId: number;
    tags: string[];
    thumbnail: string | null;
    groupId: number | null;
    groupName: string | null;
    groupBadge: string | null;
    eventName: string | null;
    eventDescription: string | null;
    eventExpiresIn: number | null;
    allowPets: boolean;
    displayEvent: boolean;
    bitMask: number;
}

export interface SavedSearch {
    id: number;
    view: string;
    query: string;
}

import {RoomDataParser} from "@/sockets/messages/parser/rooms/data/RoomDataParser";

export interface Category {
    id: string | null;
    name: string | null;
    minRank: number;
    minimised: boolean;
    view: number;
    rooms: RoomDataParser[];
}

export interface Room {
    id: number;
    name: string | null;
    ownerId: number;
    ownerName: string | null;
    skipAuth: number;
    userCount: number;
    maxUsers: number;
    description: string | null;
    trade: number;
    score: number;
    categoryId: number;
    tags: string[];
    thumbnail: string | null;
    groupId: number | null;
    groupName: string | null;
    groupBadge: string | null;
    eventName: string | null;
    eventDescription: string | null;
    eventExpiresIn: number | null;
}

export interface SavedSearch {
    id: number;
    view: string;
    query: string;
}

export interface Category {
    id: string;
    name: string;
    minRank: number;
    minimised: boolean;
    view: number;
    rooms: Room[];
}

export interface Room {
    id: number;
    name: string;
    ownerId: number;
    ownerName: string;
    skipAuth: number;
    userCount: number;
    maxUsers: number;
    description: string;
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

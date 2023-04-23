import { RoomDataParser } from "@/sockets/messages/parsers/rooms/utils/RoomDataParser";

export interface Category {
  id: string | null;
  name: string | null;
  minRank: number;
  minimised: boolean;
  view: number;
  rooms: RoomDataParser[];
}

export interface SavedSearch {
  id: number;
  view: string;
  query: string;
}

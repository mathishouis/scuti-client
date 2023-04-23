import { defineStore } from "pinia";
import { Player, Room, RoomSettings } from "@/types/Room";

interface State {
  visible: boolean;
  data: Room | undefined;
  settings: RoomSettings | undefined;
  accessLevel: number;
  players: Player[];
  toolsVisible: boolean;
}

export const useRoomStore = defineStore("room", {
  state: (): State => ({
    visible: false,
    data: undefined,
    settings: undefined,
    accessLevel: 0,
    players: [],
    toolsVisible: false,
  }),
});

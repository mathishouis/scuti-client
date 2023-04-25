import { defineStore } from "pinia";
import { PlayerData, PlayerSettings } from "@/types/Player";

interface State {
  data: PlayerData;
  settings: PlayerSettings;
}

export const usePlayerStore = defineStore("player", {
  state: (): State => ({
    data: {
      id: 0,
      username: "",
      motto: "",
      figure: "",
      gender: "",
      achievementPoints: 0,
      rank: 0,
      ambassador: false,
      club: false,
      currencies: new Map(),
      homeRoom: 0,
    },
    settings: {},
  }),
});

export interface UserState {
  id: number;
  username: string;
  motto: string;
  figure: string;
  gender: string;
  achievementPoints: number;
  rank: number;
  ambassador: boolean;
  club: boolean;
  currencies: Map<number, number>;
  maxFavouriteRooms: number;
  favouriteRooms: number[];
}

export default {
  namespaced: true,
  state: {
    id: -1,
    username: "",
    motto: "", // TODO: Daily respects and scratches
    figure: "",
    gender: "",
    achievementPoints: -1,
    rank: -1,
    ambassador: false,
    club: false,
    currencies: new Map<number, number>(),
    maxFavouriteRooms: -1,
    favouriteRooms: [],
  },
  getters: {
    currencies: (state: UserState): Map<number, number> => {
      return state.currencies;
    },
  },
  mutations: {
    updateId: (state: UserState, id: number): void => {
      state.id = id;
    },
    updateUsername: (state: UserState, username: string): void => {
      state.username = username;
    },
    updateMotto: (state: UserState, motto: string): void => {
      state.motto = motto;
    },
    updateFigure: (state: UserState, figure: string): void => {
      state.figure = figure;
    },
    updateGender: (state: UserState, gender: string): void => {
      state.gender = gender;
    },
    updateAchievementPoints: (state: UserState, amount: number): void => {
      state.achievementPoints = amount;
    },
    updateClub: (state: UserState, hasClub: boolean): void => {
      state.club = hasClub;
    },
    updateRank: (state: UserState, rank: number): void => {
      state.rank = rank;
    },
    updateAmbassador: (state: UserState, isAmbassador: boolean): void => {
      state.ambassador = isAmbassador;
    },
    updateMaxFavouriteRooms: (
      state: UserState,
      maxFavouriteRooms: number
    ): void => {
      state.maxFavouriteRooms = maxFavouriteRooms;
    },
    addFavouriteRoom: (state: UserState, roomId: number): void => {
      state.favouriteRooms.push(roomId);
    },
    clearFavouriteRooms: (state: UserState): void => {
      state.favouriteRooms = [];
    },
    updateCurrency: (
      state: UserState,
      payload: { type: number; amount: number }
    ): void => {
      state.currencies.set(payload.type, payload.amount);
    },
  },
  actions: {},
  modules: {},
};

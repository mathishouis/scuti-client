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
    setId: (state: UserState, id: number): void => {
      state.id = id;
    },
    setUsername: (state: UserState, username: string): void => {
      state.username = username;
    },
    setMotto: (state: UserState, motto: string): void => {
      state.motto = motto;
    },
    setFigure: (state: UserState, figure: string): void => {
      state.figure = figure;
    },
    setGender: (state: UserState, gender: string): void => {
      state.gender = gender;
    },
    setAchievementPoints: (state: UserState, amount: number): void => {
      state.achievementPoints = amount;
    },
    setClub: (state: UserState, hasClub: boolean): void => {
      state.club = hasClub;
    },
    setRank: (state: UserState, rank: number): void => {
      state.rank = rank;
    },
    setAmbassador: (state: UserState, isAmbassador: boolean): void => {
      state.ambassador = isAmbassador;
    },
    setCurrency: (
      state: UserState,
      payload: { type: number; amount: number }
    ): void => {
      state.currencies.set(payload.type, payload.amount);
    },
  },
  actions: {},
  modules: {},
};

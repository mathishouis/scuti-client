export interface NavigatorState {
  maxFavouritesRooms: number;
  favouritesRooms: number[];
}

export default {
  namespaced: true,
  state: {
    maxFavouritesRooms: -1,
    favouritesRooms: [],
  },
  getters: {},
  mutations: {
    updateMaxFavouriteRooms: (
      state: NavigatorState,
      maxFavouriteRooms: number
    ): void => {
      state.maxFavouritesRooms = maxFavouriteRooms;
    },
    addFavouriteRoom: (state: NavigatorState, roomId: number): void => {
      state.favouritesRooms.push(roomId);
    },
    clearFavouritesRooms: (state: NavigatorState): void => {
      state.favouritesRooms = [];
    },
  },
  actions: {},
  modules: {},
};

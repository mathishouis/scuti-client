export interface NavigatorState {
  savedSearchesToggled: boolean;
  maxFavouritesRooms: number;
  favouritesRooms: number[];
}

export default {
  namespaced: true,
  state: {
    savedSearchesToggled: false,
    maxFavouritesRooms: -1,
    favouritesRooms: [],
  },
  getters: {
    savedSearchesToggleState: (state: NavigatorState): boolean => {
      return state.savedSearchesToggled;
    },
  },
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
    toggleSavedSearches: (state: NavigatorState): void => {
      state.savedSearchesToggled = !state.savedSearchesToggled;
    },
  },
  actions: {},
  modules: {},
};

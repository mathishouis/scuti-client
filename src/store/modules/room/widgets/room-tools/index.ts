export interface RoomToolsState {
  toggled: boolean;
}

export default {
  namespaced: true,
  state: {
    toggled: false,
  },
  getters: {
    toggleState: (state: RoomToolsState): boolean => {
      return state.toggled;
    },
  },
  mutations: {
    toggle: (state: RoomToolsState): void => {
      state.toggled = !state.toggled;
    },
  },
  actions: {},
  modules: {},
};

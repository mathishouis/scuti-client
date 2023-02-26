export interface LandingViewState {
  visible: boolean;
}

export default {
  namespaced: true,
  state: {
    visible: true,
  },
  getters: {
    isVisible: (state: LandingViewState): boolean => {
      return state.visible;
    },
  },
  mutations: {
    setVisible: (state: LandingViewState, visible: boolean): void => {
      state.visible = visible;
    },
  },
  actions: {},
  modules: {},
};

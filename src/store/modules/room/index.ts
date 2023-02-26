import RoomTools from "@/store/modules/room/widgets/room-tools";

export interface RoomState {
  visible: boolean;
}

export default {
  namespaced: true,
  state: {
    visible: true,
  },
  getters: {
    isVisible: (state: RoomState): boolean => {
      return state.visible;
    },
  },
  mutations: {
    setVisible: (state: RoomState, visible: boolean): void => {
      state.visible = visible;
    },
  },
  actions: {},
  modules: {
    RoomTools,
  },
};

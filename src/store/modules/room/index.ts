import RoomTools from "@/store/modules/room/widgets/room-tools";
import Renderer from "./renderer/";
import { Room } from "@/interfaces/Navigator.interface";

export interface RoomState {
  visible: boolean;
  data: Room;
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
    updateData: (state: RoomState, data: Room): void => {
      state.data = data;
    },
  },
  actions: {},
  modules: {
    RoomTools,
    Renderer,
  },
};

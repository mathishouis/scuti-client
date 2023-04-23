import RoomTools from "@/store/modules/room/widgets/room-tools";
import Renderer from "./renderer/";
import Avatars from "./avatars/";
import { Room } from "@/interfaces/Navigator.interface";

export interface RoomState {
  visible: boolean;
  data: Room;
}

export default {
  namespaced: true,
  state: {
    visible: false,
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
    Avatars,
  },
};

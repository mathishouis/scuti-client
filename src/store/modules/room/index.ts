import RoomTools from "@/store/modules/room/widgets/room-tools";
import Renderer from "./renderer/";
import Avatars from "./avatars/";
import { Room } from "@/interfaces/Navigator.interface";
import { RoomSettings } from "@/interfaces/Room.interface";

export interface RoomState {
  visible: boolean;
  data: Room;
  settings: RoomSettings;
  accessLevel: number;
}

export default {
  namespaced: true,
  state: {
    visible: false,
    data: undefined,
    settings: undefined,
    accessLevel: -1,
  },
  getters: {
    isVisible: (state: RoomState): boolean => {
      return state.visible;
    },
    data: (state: RoomState): Room => {
      return state.data;
    },
    settings: (state: RoomState): RoomSettings => {
      return state.settings;
    },
    accessLevel: (state: RoomState): number => {
      return state.accessLevel;
    },
  },
  mutations: {
    setVisible: (state: RoomState, visible: boolean): void => {
      state.visible = visible;
    },
    updateData: (state: RoomState, data: Room): void => {
      state.data = data;
    },
    updateSettings: (state: RoomState, settings: RoomSettings): void => {
      state.settings = settings;
    },
    updateAccessLevel: (state: RoomState, accessLevel: number): void => {
      state.accessLevel = accessLevel;
    },
  },
  actions: {},
  modules: {
    RoomTools,
    Renderer,
    Avatars,
  },
};

import {
  Scuti,
  FloorFurniture,
  WallFurniture,
  Avatar,
  Room,
} from "scuti-renderer";

export interface RoomRendererState {
  renderer: Scuti;
  room: Room;
  floorItems: Map<number, FloorFurniture>;
  wallItems: Map<number, WallFurniture>;
  avatars: Map<number, Avatar>;
}

export default {
  namespaced: true,
  state: {
    renderer: undefined,
    room: undefined,
    floorItems: new Map(),
    wallItems: new Map(),
    avatars: new Map(),
  },
  getters: {
    renderer: (state: RoomRendererState): Scuti => {
      return state.renderer;
    },
    room: (state: RoomRendererState): Room => {
      return state.room;
    },
  },
  mutations: {
    updateRenderer: (state: RoomRendererState, renderer: Scuti): void => {
      state.renderer = renderer;
    },
    updateRoom: (state: RoomRendererState, room: Room): void => {
      state.room = room;
    },
  },
  actions: {},
  modules: {},
};

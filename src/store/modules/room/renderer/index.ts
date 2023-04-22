import { Scuti, FloorFurniture, WallFurniture, Avatar } from "scuti-renderer";

export interface RoomRendererState {
  renderer: Scuti;
  floorItems: Map<number, FloorFurniture>;
  wallItems: Map<number, WallFurniture>;
  avatars: Map<number, Avatar>;
}

export default {
  namespaced: true,
  state: {
    renderer: undefined,
    floorItems: new Map(),
    wallItems: new Map(),
    avatars: new Map(),
  },
  getters: {
    renderer: (state: RoomRendererState): Scuti => {
      return state.renderer;
    },
  },
  mutations: {
    updateRenderer: (state: RoomRendererState, renderer: Scuti): void => {
      state.renderer = renderer;
    },
  },
  actions: {},
  modules: {},
};

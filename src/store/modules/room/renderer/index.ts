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
    avatars: (state: RoomRendererState): Map<number, Avatar> => {
      return state.avatars;
    },
    floorItems: (state: RoomRendererState): Map<number, FloorFurniture> => {
      return state.floorItems;
    },
    wallItems: (state: RoomRendererState): Map<number, WallFurniture> => {
      return state.wallItems;
    },
  },
  mutations: {
    updateRenderer: (state: RoomRendererState, renderer: Scuti): void => {
      state.renderer = renderer;
    },
    updateRoom: (state: RoomRendererState, room: Room): void => {
      state.room = room;
    },
    addAvatar: (
      state: RoomRendererState,
      payload: { id: number; avatar: Avatar }
    ): void => {
      state.avatars.set(payload.id, payload.avatar);
    },
    addFloorItem: (
      state: RoomRendererState,
      payload: { id: number; item: FloorFurniture }
    ): void => {
      state.floorItems.set(payload.id, payload.item);
    },
    addWallItem: (
      state: RoomRendererState,
      payload: { id: number; item: WallFurniture }
    ): void => {
      state.wallItems.set(payload.id, payload.item);
    },
  },
  actions: {},
  modules: {},
};

import { defineStore } from "pinia";
import {
  Avatar,
  FloorFurniture,
  Room,
  Scuti,
  WallFurniture,
} from "scuti-renderer";

interface State {
  engine: Scuti | undefined;
  room: Room | undefined;
  floorItems: Map<number, FloorFurniture>;
  wallItems: Map<number, WallFurniture>;
  avatars: Map<number, Avatar>;
}

export const useRendererStore = defineStore("renderer", {
  state: (): State => ({
    engine: undefined,
    room: undefined,
    floorItems: new Map(),
    wallItems: new Map(),
    avatars: new Map(),
  }),
});

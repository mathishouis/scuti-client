import { Avatar } from "@/interfaces/Room.interface";

export interface RoomAvatarsState {
  avatars: Avatar[];
}

export default {
  namespaced: true,
  state: {
    avatars: [],
  },
  getters: {
    avatars: (state: RoomAvatarsState): Avatar[] => {
      return state.avatars;
    },
    get:
      (state: RoomAvatarsState) =>
      (playerId: number): Avatar | undefined => {
        return state.avatars.find(
          (avatar: Avatar) => avatar.playerId === playerId
        );
      },
    getByAvatarId:
      (state: RoomAvatarsState) =>
      (avatarId: number): Avatar | undefined => {
        return state.avatars.find(
          (avatar: Avatar) => avatar.avatarId === avatarId
        );
      },
  },
  mutations: {
    addAvatar: (state: RoomAvatarsState, avatar: Avatar): void => {
      state.avatars.push(avatar);
    },
  },
  actions: {},
  modules: {},
};

export interface Friend {
  id: number;
  username: number;
  figure: string;
  motto: string;
  online: boolean;
  inRoom: boolean;
}

export interface FriendRequest {
  id: number;
  username: string;
  figure: string;
}

export interface MessengerState {
  friends: Friend[];
  requests: FriendRequest[];
}

export default {
  namespaced: true,
  state: {
    friends: [],
    requests: [],
  },
  getters: {
    friends: (state: MessengerState): Friend[] => {
      return state.friends;
    },
    requests: (state: MessengerState): FriendRequest[] => {
      return state.requests;
    },
  },
  mutations: {
    addFriend: (state: MessengerState, friend: Friend): void => {
      state.friends.push(friend);
    },
    clearFriends: (state: MessengerState): void => {
      state.friends = [];
    },
    addFriendRequest: (state: MessengerState, request: FriendRequest): void => {
      state.requests.push(request);
    },
    clearFriendRequests: (state: MessengerState): void => {
      state.requests = [];
    },
  },
  actions: {},
  modules: {},
};

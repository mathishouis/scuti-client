import { defineStore } from "pinia";
import { Friend, FriendRequest } from "@/types/Messenger";

interface State {
  friends: Friend[];
  requests: FriendRequest[];
}

export const useMessengerStore = defineStore("messenger", {
  state: (): State => ({
    friends: [],
    requests: [],
  }),
});

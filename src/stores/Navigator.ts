import { defineStore } from "pinia";
import { NavigatorCategoryDataParser } from "@/sockets/messages/parsers/navigator/utils/NavigatorCategoryDataParser";
import { SavedSearch } from "@/types/Navigator";

interface State {
  visible: boolean;
  loading: boolean;
  savedSearchesVisible: boolean;
  maxFavouritesRooms: number;
  favouritesRooms: number[];
  selectedTab: string;
  tabs: string[];
  searchCategory: string;
  searchQuery: string;
  searching: boolean;
  categories: NavigatorCategoryDataParser[];
  savedSearches: SavedSearch[];
}

export const useNavigatorStore = defineStore("navigator", {
  state: (): State => ({
    visible: false,
    loading: false,
    savedSearchesVisible: false,
    maxFavouritesRooms: -1,
    favouritesRooms: [],
    selectedTab: "",
    tabs: [],
    searchCategory: "all",
    searchQuery: "",
    searching: false,
    categories: [],
    savedSearches: [],
  }),
  getters: {
    getCategoryById: (state) => (categoryId: string) =>
      state.categories.find((category) => category.id === categoryId),
    isFavouriteRoom: (state) => (roomId: number) =>
      state.favouritesRooms.includes(roomId),
  },
});

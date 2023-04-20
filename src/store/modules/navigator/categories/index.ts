import { Category } from "@/interfaces/Navigator.interface";

export interface NavigatorCategoriesState {
  categories: Category[];
}

export default {
  namespaced: true,
  state: {
    categories: [],
  },
  getters: {
    categories: (state: NavigatorCategoriesState): Category[] => {
      return state.categories;
    },
    /*category: (state: NavigatorCategoriesState) => (id: string): Category => {
      return state.categories.find((category: Category) => category.id === id);
    }*/
  },
  mutations: {
    clear: (state: NavigatorCategoriesState): void => {
      state.categories = [];
    },
    add: (state: NavigatorCategoriesState, category: Category): void => {
      state.categories.push(category);
    },
  },
  actions: {},
  modules: {},
};

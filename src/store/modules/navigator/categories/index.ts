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
    get:
      (state: NavigatorCategoriesState) =>
      (id: string): Category | undefined => {
        console.log(state.categories);
        return state.categories.find(
          (category: Category) => category.id === id
        );
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
    toggleMinimised: (state: NavigatorCategoriesState, id: string): void => {
      const category: Category | undefined = state.categories.find(
        (category: Category) => category.id === id
      );
      if (category) category.minimised = !category.minimised;
    },
    toggleView: (state: NavigatorCategoriesState, id: string): void => {
      const category: Category | undefined = state.categories.find(
        (category: Category) => category.id === id
      );
      if (category) category.view = category.view === 0 ? 1 : 0;
    },
  },
  actions: {},
  modules: {},
};

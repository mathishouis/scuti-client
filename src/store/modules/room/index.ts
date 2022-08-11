import Renderer from './renderer';
import Avatars from './avatars';
import Furnitures from './furnitures';

export default {
    namespaced: true,

    modules: {
        Renderer,
        Avatars,
        Furnitures
    },

    state: {
        visible: false
    },

    mutations: {
        setVisible: (state, visible): void => {
            state.visible = visible;
        }
    },

    getters: {
        isVisible: (state): boolean => {
            return state.visible;
        }
    },

    actions: {

    }
}
import {Scuti, Room} from 'scuti-renderer';

export default {
    namespaced: true,

    state: {
        renderer: undefined,
        room: undefined,
    },

    mutations: {
        setRenderer: (state, renderer): void => {
            state.renderer = renderer;
        },
        setRoom: (state, room): void => {
            state.room = room;
        }
    },

    getters: {
        getRenderer: (state): Scuti => {
            return state.renderer;
        },
        getRoom: (state): Room => {
            return state.room;
        }
    },

    actions: {}
}
import {Scuti, Room} from 'scuti-renderer';
import { isProxy, toRaw } from 'vue';

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
            return toRaw(state.renderer);
        },
        getRoom: (state): Room => {
            return toRaw(state.room);
        }
    },

    actions: {}
}
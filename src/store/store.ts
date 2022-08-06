import Vuex from 'vuex';
import { windows } from "./windows/store";
import { Scuti } from 'scuti-renderer';
import {LoadState} from "../enums/LoadState";
import { Client } from "../websockets/Client";
import {navigator} from "./navigator/store";

export const store = new Vuex.Store({
    modules: {
        windows: windows,
        navigator: navigator
    },
    state: {
        loadState: LoadState.STARTUP,
        client: undefined,
        websocket: undefined,
    },
    mutations: {
        setClient: (state: {}, client: Scuti): void => {
            state.client = client;
        },
        setLoadState: (state: {}, loadState: LoadState): void => {
            state.loadState = loadState;
        },
        setWebsocket: (state: {}, client: Client): void => {
            state.websocket = client;
        }
    },
    getters: {
        getClient: (state: {}): Scuti => {
            return state.client;
        },
        getLoadState: (state: {}): LoadState => {
            return state.loadState;
        },
        getWebsocket: (state: {}): Client => {
            return state.websocket;
        }
    }
});
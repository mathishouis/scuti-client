import Vuex from 'vuex';
import { Scuti } from 'scuti-renderer';
import {LoadState} from "../enums/LoadState";
import { Client } from "../websockets/Client";

import Navigator from './modules/navigator';
import LandingView from './modules/landingview';
import Room from './modules/room';
import Inventory from './modules/inventory';

export const store = new Vuex.Store({
    modules: {
        Navigator,
        LandingView,
        Room,
        Inventory
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
import {configureStore} from '@reduxjs/toolkit'
import createHistory from "history/createBrowserHistory";
import {combineReducers} from "redux";
import {routerReducer as router, RouterState} from "react-router-redux";

import exampleReducer from "./features/Auth/store";

interface StoreEnhancerState {
}

interface RootState extends StoreEnhancerState {
    router: RouterState;
    exampleReducer: any;
}

const rootReducer = combineReducers<RootState>({
    router,
    exampleReducer: exampleReducer as any
});

export const history = createHistory();

export function store() {
    return configureStore({
        reducer: rootReducer,
    })
}

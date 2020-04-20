import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './routing';
import {Provider} from "react-redux";
import {store, history} from "./store";
import {ConnectedRouter} from "react-router-redux";
import * as serviceWorker from './serviceWorker';

const configureStore = store();
ReactDOM.render(
    <Provider store={configureStore}>
        <ConnectedRouter history={history} store={configureStore}>
            <Routing/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

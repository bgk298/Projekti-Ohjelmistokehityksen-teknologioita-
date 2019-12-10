import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore , applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./alentaja";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("container")
);
serviceWorker.register();
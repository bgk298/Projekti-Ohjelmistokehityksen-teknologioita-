//Import required modules
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore , applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./alentaja";
import Login from './App.js';
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//DOM render's, Provider that has reduxThunk middleware applied and the login form
const rootElement = document.getElementById("container");
ReactDOM.render(
    <Provider store = {store}>
        <Login/>
    </Provider>, rootElement
);

serviceWorker.register();
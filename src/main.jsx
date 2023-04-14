import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.css";
import { Provider } from "react-redux";
import { store } from './App/Providers/StoreProvider'
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);

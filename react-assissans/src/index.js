import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

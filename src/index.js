import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assests/fonts/Netflix Sans Bold.otf";
import "./assests/fonts/Netflix Sans Light.otf";
import "./assests/fonts/Netflix Sans Medium.otf";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
let content = "";
const passData = (isExpanded) => {
  content = `${isExpanded ? "expanded" : ""} `;
};
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App fixBody={passData} className={content} />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

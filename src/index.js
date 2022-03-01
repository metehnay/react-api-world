import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WebFont from "webfontloader";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

WebFont.load({
  google: {
    families: ["Poppins", "Roboto:400"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

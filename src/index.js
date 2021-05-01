import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "react-jss";
import Theme from "./resources/theme";
import { BrowserRouter as Router } from "react-router-dom";
//Importing bootstrap and other modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import PrivateSection from "./routes/PrivateSection";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Router>
      <PrivateSection />
    </Router>
  </ThemeProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

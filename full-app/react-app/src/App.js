import React from "react";
import logo from "./logo.svg";
import "./App.css";

import * as MaterialUi from "@material-ui/core";
// import * as MaterialIcons from "@material-ui/icons";
import * as ReactRouter from "react-router";
import * as ReactRedux from "react-redux";

console.log("full!", MaterialUi, ReactRouter, ReactRedux);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

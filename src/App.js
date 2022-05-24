/* import logo from './logo.svg';
import './App.css'; */

import React from "react";
import Header from "./components/Header/Header";
import MainGridTables from "./components/MainGridTables/MainGridTables";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <MainGridTables />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

/* function App() {
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
} */

// export default App;

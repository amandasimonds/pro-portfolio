import React from 'react';
import './App.css';
import Header from "./components/Header"
import Main from "./components/main"
import {Link} from "react-router-dom";
// import LandingPage from "./components/LandingPage"

function App() {
  return (
    <div className="demo-big-content">
          <Header>
              <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/about">About</Link>
          </Header>
              <div className="page-content" />
              <Main/>
  </div>
  );
}

export default App;

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
              <a target="blank" href= "https://drive.google.com/file/d/1S_Cw0BkOG4CtBCsD85G56rGsSrUU9Tu3/view?usp=sharing">Resume</a>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/about">About</Link>
          </Header>
              {/* <div className="page-content" /> */}
              <Main/>
  </div>
  );
}

export default App;

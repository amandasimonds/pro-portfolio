import React from 'react';
import './App.css';
import Header from "./components/Header"
import Main from "./components/main"
import {Link} from "react-router-dom";
import Footer from "./components/Footer"
// import LandingPage from "./components/LandingPage"

function App() {
  return (
    <div className="demo-big-content">
          <Header>
          <Link to="/">About</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <a target="blank" href= "https://drive.google.com/file/d/12Mzv6uuDaghskcZORc_GorDhNMwS3wAo/view?usp=sharing">Resume</a>
                  <a href="https://amandadevs.com">Blog</a>
                  
          </Header>
              {/* <div className="page-content" /> */}
              <Main/>
              <div className="box"/>
              <Footer/>
  </div>
  );
}

export default App;

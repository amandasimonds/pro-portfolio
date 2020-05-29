import React from 'react';
import './App.css';
import { Layout, Navigation, Content, Drawer} from "react-mdl";
import Header from "./components/Header"
import Main from "./components/main"
import {Link} from "react-router-dom";
// import LandingPage from "./components/LandingPage"

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header>
              <Navigation>
              <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/about">About</Link>
              </Navigation>
          </Header>
          <Drawer title="">
              <Navigation>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/about">About</Link>
                  <Link to="/resume">Resume</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
  );
}

export default App;

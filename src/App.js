import React from 'react';
import './App.css';
import { Layout, Navigation, Content, Drawer, Header } from "react-mdl";
import Main from "./components/main"
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="Amanda Simonds" scroll>
              <Navigation>
                  <Link to="landingpage">Landing</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/about">About</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/about">About</Link>
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

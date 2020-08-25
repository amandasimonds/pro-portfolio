import React from "react";
import {Switch, Route} from "react-router-dom";

import LandingPage from "./LandingPage";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About"

const Main = () => 
(
    <Switch>
        <Route exact path="/" component = {LandingPage} />
        <Route path ="/about" component= {About} />
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)

export default Main
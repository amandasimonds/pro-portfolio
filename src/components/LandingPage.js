import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import TooltipItem from "./UI/Tooltip"

import myPic from "../assets/images/userpicture.jpg"

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        className="myPic"
                        src={myPic}
                        alt="myPic"
                        />
                        <div className="banner-text">
                            <h1>Amanda Simonds</h1>
                            <h1>Full Stack Web Developer based in Denver, CO</h1>

                            <hr/>
                            <p>
                               Javascript | React | Sass | SCSS | HTML | CSS | Express | WordPress | MongoDB | MySQL | NodeJS 
                            </p>
                            <br/>
                            <h1>About Me</h1>
                            <div className="about-me-container">
                                <p>Full Stack Web Developer with a background in art education, collaborative and devoted to helping people through web experiences.</p>
                                <p>Based in Denver, I am currently seeking job opportunities in Web development. </p>
                                    <p>I am a creative problem solver, intent on building effective user experiences that help people achieve their goals. I am currently developing an online education app, <a href="https://amandasimonds.github.io/stream-ed/" target="blank">StreamEd</a> that will streamline online education experiences. Still in early development stages, please let me know if you have any suggestions, and/or if you are interested in working on it with me!</p>
                                    <p>Certificate in Full Stack Web Development from University of Denver.</p>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
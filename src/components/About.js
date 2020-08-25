import React, { Component } from "react";

import { Cell, Grid } from "react-mdl"
import TooltipItem from "./UI/Tooltip"

import myPic from "../assets/images/userpicture.jpg"

class About extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>About Me</h1>
                            <div className="about-me-container">
                                <p>Full Stack Web Developer with a background in art education, collaborative and devoted to helping people through web experiences.</p>
                                <p>Based in Denver, I am currently seeking job opportunities in Full Stack, Front End, and Back End development. </p>
                                    <p>I am a creative problem solver, intent on building effective user experiences that help people achieve their goals. I am currently developing an online education app, <a href="https://amandasimonds.github.io/stream-ed/" target="blank">StreamEd</a> that will streamline online education experiences. Still in early development stages, please let me know if you have any suggestions, and/or if you are interested in working on it with me!</p>
                                    <p>Certificate in Full Stack Development from University of Denver.</p>
                            </div>
                            <br/>
                                <hr />
                                <p>Javascript | React | HTML | CSS | Express | MongoDB | MySQL | NodeJS</p>

                                <div className="social-links">
                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/amandasimonds/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" id="linkedIn" aria-hidden="true" />
                                    </a>
                                    <TooltipItem tooltipTarget="linkedIn" tooltipText="LinkedIn" />

                                    {/* GitHub */}
                                    <a href="https://www.github.com/amandasimonds/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" id="github" aria-hidden="true" />
                                    </a>
                                    <TooltipItem tooltipTarget="github" tooltipText="GitHub" />

                                    {/* Resume */}
                                    <a href="https://drive.google.com/file/d/18PEYHtakHwRqylk38KHLWMdejdOh9Y-r/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                                        <i className="far fa-file-pdf" id="resume" aria-hidden="true" />
                                    </a>
                                    <TooltipItem tooltipTarget="resume" tooltipText="Resume" />

                                </div>
                            </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;
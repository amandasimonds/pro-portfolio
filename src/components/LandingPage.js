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
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p>
                               Javascript | React | HTML | CSS | Express | MongoDB | MySQL | NodeJS 
                            </p>

                            
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/amandasimonds/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" id="linkedIn" aria-hidden="true"/>
                                </a>
                                <TooltipItem tooltipTarget="linkedIn" tooltipText="LinkedIn"/>

                                {/* GitHub */}
                                <a href="https://www.github.com/amandasimonds/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" id="github" aria-hidden="true"/>
                                </a>
                                <TooltipItem tooltipTarget="github" tooltipText="GitHub"/>

                                {/* Resume */}
                                <a href="https://drive.google.com/file/d/1S_Cw0BkOG4CtBCsD85G56rGsSrUU9Tu3/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                                    <i className="far fa-file-pdf" id="resume" aria-hidden="true"/>
                                </a>
                                <TooltipItem tooltipTarget="resume" tooltipText="Resume"/>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
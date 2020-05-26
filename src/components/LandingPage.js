import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
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
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p>
                               Javascript | React | HTML | CSS | Express | MongoDB | MySQL | NodeJS 
                            </p>

                            
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/amandasimonds/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* GitHub */}
                                <a href="https://www.github.com/amandasimonds/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
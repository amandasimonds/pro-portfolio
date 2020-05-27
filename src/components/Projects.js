import React, { Component } from "react";

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import oceanPort from "../assets/images/oceanport.JPG"
import streamEdpic from "../assets/images/StreamEd.JPG"
import noteTakerPic from "../assets/images/notetaker.JPG"
import buggerLoggerPic from "../assets/images/burgerlogger.JPG"
import hopToIt from "../assets/images/hoptoit.JPG"
import spacePortPic from "../assets/images/spaceport.JPG"

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state= { activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                {/* // OceanPort */}
                <Card shadow={5} style={{width: "350px", height: "400px", margin: "auto"}}>
                    <CardTitle style={{color:"#fff", height: "400px", background: `url(${oceanPort}) center / cover ` }}/>
                    <CardText>
                        <span className="project-title">OceanPort</span><br></br>
                        React Express App built for learning about the ocean through a variety of ways. MySQL used to store data, and Passport for authentication.
                    </CardText>
                    <CardActions border style={{textAlign: "center"}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Deployed Project</Button>
                    </CardActions>
                </Card>

                 {/* // StreamEd */}
                 <Card shadow={5} style={{width: "350px", height: "400px", margin: "auto"}}>
                 <CardTitle style={{color:"#fff", height: "400px", background: `url(${streamEdpic}) center / cover` }}>
                 </CardTitle>
                 <CardText>
                 <span className="project-title">StreamEd</span><br></br>
                     React app that streamlines resources for teaching. This app is still in development.
                 </CardText>
                 <CardActions border style={{textAlign: "center"}}>
                     <Button colored>GitHub</Button>
                     <Button colored>Deployed Project</Button>
                 </CardActions>
             </Card>
                </div>
            )
        } else if (this.state.activeTab === 1){
            return (
                <div className="projects-grid">
 {/* // NoteTaker */}
                <Card shadow={5} style={{width: "350px", height: "400px", margin: "auto"}}>
                 <CardTitle style={{color:"#fff", height: "400px", background: `url(${spacePortPic}) left / cover` }}>
                 </CardTitle>
                 <CardText>
                 <span className="project-title">NoteTaker</span><br></br>
                     Express App for writing and saving notes.
                 </CardText>
                 <CardActions border style={{textAlign: "center"}}>
                     <Button colored>GitHub</Button>
                     <Button colored>Deployed Project</Button>
                 </CardActions>
             </Card>

             {/* // SpacePort */}
             <Card shadow={5} style={{width: "350px", height: "400px", margin: "auto"}}>
                 <CardTitle style={{color:"#fff", height: "400px", background: `url(${noteTakerPic}) center / cover` }}>
                 </CardTitle>
                 <CardText>
                 <span className="project-title">SpacePort</span><br></br>
                     Express App that allows the user to browse books and movies about space.
                 </CardText>
                 <CardActions border style={{textAlign: "center"}}>
                     <Button colored>GitHub</Button>
                     <Button colored>Deployed Project</Button>
                 </CardActions>
             </Card>
                </div>
            )
        } else if (this.state.activeTab === 2){
            return (
                <div className="projects-grid">
                {/* // Burger Logger */}
                               <Card shadow={5} style={{width: "350px", height: "400px", margin: "auto"}}>
                                <CardTitle style={{color:"#fff", height: "400px", background: `url(${buggerLoggerPic}) left / cover` }}>
                                </CardTitle>
                                <CardText>
                                <span className="project-title">Burger-Logger</span><br></br>
                                    JavaScript Handlebars app that simulates burger take out
                                </CardText>
                                <CardActions border style={{textAlign: "center"}}>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Deployed Project</Button>
                                </CardActions>
                            </Card>

                            {/* // Hop To It */}
                            <Card shadow={5} style={{width: "350px", height: "400px", margin: "auto"}}>
                                <CardTitle style={{color:"#fff", height: "400px", background: `url(${hopToIt}) center / cover` }}>
                                </CardTitle>
                                <CardText>
                                <span className="project-title">Hop To It</span><br></br>
                                    JavaScript app that allows the user to search a brewery and a random marijuana strain.
                                </CardText>
                                <CardActions border style={{textAlign: "center"}}>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Deployed Project</Button>
                                </CardActions>
                            </Card>
                               </div>
            )
        }
    }
    

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Express</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>

                <div>
                    {this.toggleCategories()}
                </div>
            </div>
        )
    }
}

export default Projects;
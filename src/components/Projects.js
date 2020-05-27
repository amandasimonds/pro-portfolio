import React, { Component } from "react";

import { Tabs, Tab, Card, CardTitle, CardText } from "react-mdl";
import oceanPort from "../assets/images/oceanport.JPG"
import streamEdpic from "../assets/images/StreamEd.JPG"
import noteTakerPic from "../assets/images/notetaker.JPG"
import buggerLoggerPic from "../assets/images/burgerlogger.JPG"
import hopToIt from "../assets/images/hoptoit.JPG"
import spacePortPic from "../assets/images/spaceport.JPG"
import weatherDashPic from "../assets/images/weather.JPG"

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* // OceanPort */}
                    <Card shadow={5} style={{ width: "375px", height: "500px", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "400px", background: `url(${oceanPort}) center / cover ` }} />
                            <div className="project-links">
                            <a href="https://oceanport.herokuapp.com/" rel="noopener noreferrer" target="_blank"><strong>OceanPort</strong></a>  
                            <a href="https://github.com/amandasimonds/ocean-port" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                        <CardText style={{height: "100px", paddingBottom: "20px", paddingTop:"0"}}>
                        React Express app built to engage users in learning through reading, taking quizzes, and earning badges. User authentication by Passport NPM, Data managed by MySQL. 
                    </CardText>

                    </Card>

                    {/* // StreamEd */}
                    <Card shadow={5} style={{ width: "375px", height: "500px", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "400px", background: `url(${streamEdpic}) center / cover` }}>
                        </CardTitle>
                            <div className="project-links">
                            <a href="https://amandasimonds.github.io/stream-ed/" rel="noopener noreferrer" target="_blank"><strong>StreamEd</strong></a>  
                            <a href="https://github.com/amandasimonds/stream-ed" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText style={{height: "100px", paddingBottom: "20px", paddingTop:"0"}}></CardText>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* // NoteTaker */}
                    <Card shadow={5} style={{ width: "375px", height: "500px", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "400px", background: `url(${noteTakerPic}) left / cover` }}>
                        </CardTitle>
                        <div className="project-links">
                            <a href="https://notetaker-amazing.herokuapp.com/" rel="noopener noreferrer" target="_blank"><strong>NoteTaker</strong></a>  
                            <a href="https://github.com/amandasimonds/note-taker" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText style={{height: "100px", paddingBottom: "20px", paddingTop:"0"}}></CardText>
                    </Card>

                    {/* // SpacePort */}
                    <Card shadow={5} style={{ width: "375px", height: "500px", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "400px", background: `url(${spacePortPic}) center / cover` }}>
                        </CardTitle>
                        <div className="project-links">
                            <a href="https://spaceport2020.herokuapp.com/" rel="noopener noreferrer" target="_blank"><strong>SpacePort</strong></a>  
                            <a href="https://github.com/hdcarr87/project-2" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText style={{height: "100px", paddingBottom: "20px", paddingTop:"0"}}></CardText>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* // Weather Dashboard */}
                    <Card shadow={5} style={{ width: "375px", height: "500px", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "400px", background: `url(${weatherDashPic}) left / cover` }}>
                        </CardTitle>
                        <div className="project-links">
                            <a href="https://amandasimonds.github.io/WeatherDashboard/" rel="noopener noreferrer" target="_blank"><strong>Weather Dashboard</strong></a>  
                            <a href="https://github.com/amandasimonds/WeatherDashboard" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText style={{height: "100px", paddingBottom: "20px", paddingTop:"0"}}></CardText>
                    </Card>

                    {/* // Hop To It */}
                    <Card shadow={5} style={{ width: "375px", height: "500px", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "400px", background: `url(${hopToIt}) center / cover` }}>
                        </CardTitle>
                        <div className="project-links">
                            <a href="https://kellyjones-jpg.github.io/Hop-To-It/" rel="noopener noreferrer" target="_blank"><strong>Hop To It</strong></a>  
                            <a href="https://github.com/kellyjones-jpg/Hop-To-It" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText style={{height: "100px", paddingBottom: "20px", paddingTop:"0"}}></CardText>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* // Burger Logger */}
                    <Card shadow={5} style={{ width: "375px", height: "500px", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "400px", background: `url(${buggerLoggerPic}) left / cover` }}>
                        </CardTitle>
                        <div className="project-links">
                            <a href="https://supertastyburgerapp.herokuapp.com/" rel="noopener noreferrer" target="_blank"><strong>Burger Logger</strong></a>  
                            <a href="https://github.com/amandasimonds/burger-logger" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText style={{height: "100px", paddingBottom: "20px", paddingTop:"0"}}></CardText>
                    </Card>

                    {/* OceanPort */}
                    <Card shadow={5} style={{ width: "375px", height: "500px", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "400px", background: `url(${oceanPort}) center / cover ` }} />
                        <div className="project-links">
                            <a href="https://oceanport.herokuapp.com/" rel="noopener noreferrer" target="_blank"><strong>OceanPort</strong></a>  
                            <a href="https://github.com/amandasimonds/ocean-port" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText style={{height: "100px", paddingBottom: "20px", paddingTop:"0"}}></CardText>
                    </Card>
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                <Tabs className="category-tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Express</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>MySQL</Tab>
                </Tabs>

                <div>
                    {this.toggleCategories()}
                </div>
            </div>
        )
    }
}

export default Projects;
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
                    <Card shadow={5} className="project-card">
                        <CardTitle className="project-card-title" style={{background: `url(${oceanPort}) center / cover ` }} />
                            <div className="project-links">
                            <a href="https://oceanport.herokuapp.com/" rel="noopener noreferrer" target="_blank"><strong>OceanPort</strong></a>  
                            <a href="https://github.com/amandasimonds/ocean-port" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                        <CardText className="project-card-text">
                        React Express app built to engage users in learning through reading, taking quizzes, and earning badges. User authentication by Passport NPM, Data managed by MySQL. 
                    </CardText>

                    </Card>

                    {/* // StreamEd */}
                    <Card shadow={5}  className="project-card">
                        <CardTitle className="project-card-title" style={{background: `url(${streamEdpic}) center / cover` }}>
                        </CardTitle>
                            <div className="project-links">
                            <a href="https://amandasimonds.github.io/stream-ed/" rel="noopener noreferrer" target="_blank"><strong>StreamEd</strong></a>  
                            <a href="https://github.com/amandasimonds/stream-ed" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText className="project-card-text">
                                React App designed for online teaching and learning, streamlining all classes, assignments, and live streams into one easy-to-use app. This app is in development.
                            </CardText>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* // NoteTaker */}
                    <Card shadow={5}  className="project-card">
                        <CardTitle className="project-card-title"style={{background: `url(${noteTakerPic}) left / cover` }}>
                        </CardTitle>
                        <div className="project-links">
                            <a href="https://notetaker-amazing.herokuapp.com/" rel="noopener noreferrer" target="_blank"><strong>NoteTaker</strong></a>  
                            <a href="https://github.com/amandasimonds/note-taker" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText className="project-card-text">
                                Express Application, nicely designed for the user to create, save, and delete notes.
                            </CardText>
                    </Card>

                    {/* // SpacePort */}
                    <Card shadow={5}  className="project-card">
                        <CardTitle className="project-card-title" style={{background: `url(${spacePortPic}) center / cover` }}>
                        </CardTitle>
                        <div className="project-links">
                            <a href="https://spaceport2020.herokuapp.com/" rel="noopener noreferrer" target="_blank"><strong>SpacePort</strong></a>  
                            <a href="https://github.com/hdcarr87/project-2" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText className="project-card-text">
                                Express app, using third party API's to generate lists of books and movies about space for the user. MySQL is used to save login information and favorites. This app is in development.
                            </CardText>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* // Weather Dashboard */}
                    <Card shadow={5}  className="project-card">
                        <CardTitle className="project-card-title" style={{background: `url(${weatherDashPic}) left / cover` }}>
                        </CardTitle>
                        <div className="project-links">
                            <a href="https://amandasimonds.github.io/WeatherDashboard/" rel="noopener noreferrer" target="_blank"><strong>Weather Dashboard</strong></a>  
                            <a href="https://github.com/amandasimonds/WeatherDashboard" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText className="project-card-text">
                                JavaScript program showcasing the use of a weather API to display current and 5 day weather for any city in the world.
                            </CardText>
                    </Card>

                    {/* // Hop To It */}
                    <Card shadow={5}  className="project-card">
                        <CardTitle className="project-card-title" style={{background: `url(${hopToIt}) center / cover` }}>
                        </CardTitle>
                        <div className="project-links">
                            <a href="https://kellyjones-jpg.github.io/Hop-To-It/" rel="noopener noreferrer" target="_blank"><strong>Hop To It</strong></a>  
                            <a href="https://github.com/kellyjones-jpg/Hop-To-It" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText className="project-card-text">
                                Designed for a city-visitor, this app use 3 API's including Google Geocoding to provide users a list of breweries based on the location they enter. The user can also browse marijuana strains.
                            </CardText>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* // Burger Logger */}
                    <Card shadow={5} className="project-card">
                        <CardTitle className="project-card-title" style={{background: `url(${buggerLoggerPic}) left / cover` }}>
                        </CardTitle>
                        <div className="project-links">
                            <a href="https://supertastyburgerapp.herokuapp.com/" rel="noopener noreferrer" target="_blank"><strong>Burger Logger</strong></a>  
                            <a href="https://github.com/amandasimonds/burger-logger" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText className="project-card-text">
                                Express app built with Handlebars and MySQL designed to simulate burger take out.
                            </CardText>
                    </Card>

                    {/* OceanPort */}
                    <Card shadow={5} className="project-card">
                        <CardTitle className="project-card-title" style={{background: `url(${oceanPort}) center / cover `}} />
                        <div className="project-links">
                            <a href="https://oceanport.herokuapp.com/" rel="noopener noreferrer" target="_blank"><strong>OceanPort</strong></a>  
                            <a href="https://github.com/amandasimonds/ocean-port" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"/></a>
                            </div>
                            <CardText className="project-card-text">
                            React Express app built to engage users in learning through reading, taking quizzes, and earning badges. User authentication by Passport NPM, Data managed by MySQL. 
                            </CardText>
                    </Card>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="projects-container">
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
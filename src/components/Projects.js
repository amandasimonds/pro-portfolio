import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container} from 'reactstrap';
import oceanPort from "../assets/images/oceanport.JPG"
import streamEdpic from "../assets/images/StreamEd.JPG"
import noteTakerPic from "../assets/images/notetaker.JPG";
import hopToIt from "../assets/images/hoptoit.JPG";
import spacePortPic from "../assets/images/spaceport.JPG"
import weatherDashPic from "../assets/images/weather.JPG"

class Projects extends Component {
render(){

            return (
                <Row className="projects-grid noMargin">
                    {/* // OceanPort */}
                    <Row className="noMargin">

                    <a class="project-card-link" href="https://oceanport.herokuapp.com/" rel="noopener noreferrer" target="_blank">
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
                    </a>

                    {/* // StreamEd */}
                    <a class="project-card-link" href="https://oceanport.herokuapp.com/" rel="noopener noreferrer" target="_blank">
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
                    </a>

                    {/* // NoteTaker */}
                    <a class="project-card-link" href="https://oceanport.herokuapp.com/" rel="noopener noreferrer" target="_blank">
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
                    </a>
                    {/* </Col> */}

                    </Row>

                    <Row className="noMargin">
                    {/* // SpacePort */}
                    <a class="project-card-link" href="https://oceanport.herokuapp.com/" rel="noopener noreferrer" target="_blank">
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
                    </a>

                    {/* // Weather Dashboard */}
                    <a class="project-card-link" href="https://oceanport.herokuapp.com/" rel="noopener noreferrer" target="_blank">
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
                    </a>

                    {/* // Hop To It */}
                    <a class="project-card-link" href="https://oceanport.herokuapp.com/" rel="noopener noreferrer" target="_blank">
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
                    </a>
                    </Row>
                    </Row>

            )
}
}

export default Projects;
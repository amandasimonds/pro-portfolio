import React from "react";
import TooltipItem from "./UI/Tooltip"

const Footer = (props) => (
    <div>
        <div className="footer">
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
                                <a href="https://drive.google.com/file/d/18PEYHtakHwRqylk38KHLWMdejdOh9Y-r/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                                    <i className="far fa-file-pdf" id="resume" aria-hidden="true"/>
                                </a>
                                <TooltipItem tooltipTarget="resume" tooltipText="Resume"/>

                            </div>
        
        </div>

    </div>
);


export default Footer
import React, { Component } from "react";
import resume from "../assets/resume/Amanda_Simonds_Resume.pdf"

import { Document, Page, pdfjs } from "react-pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    render(){
        return(
            <div>
            <Document file={resume}
            Page={1}/>
            </div>
        )
    }
}

export default Resume;
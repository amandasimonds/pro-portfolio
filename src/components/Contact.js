import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import {Form, FormGroup, Label, Input, Button} from "reactstrap"
import emailjs from "emailjs-com"

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state= {
            email:"",
            message:""
        }
    }
    
    handleSubmit(event){
        event.preventDefault();
        console.log("[contact form]", this.state);
        const templateId="template_gbEDgVsU";
        this.sendEmail(templateId, {reply_to: this.state.email, from_name: this.state.email, to_name: "amandasimonds@gmail.com", message_html: this.state.message,  })
        }

    sendEmail(templateId, variables) {
        emailjs.send("user_VMZ2FtiGOwo9dnLIX7VOa", templateId, variables)
        .then(res => {
            console.log("Message sent")
            alert("Message sent")
        })
        .catch(err => {
            console.error("Message did not send", err)
            alert("Sorry, the contact form is still in development. Please email me directly or through LinkedIn. Thanks for connecting!")})
        }

        resetForm(){
            this.setState({email:"", message:""})
        };

    render(){
        return(
            <div className="contact-body">
                <h1>Contact</h1>
                <Grid className="contact-grid">

                <Cell col={6} style={{textAlign: "left", border:"", padding:"60px 50px 0 0"}}>
                        <p className="contact-label">Email</p> 
                        <p><a href="mailto:@amandasimonds9@gmail.com"><span style={{color:"white"}}>amandasimonds9@gmail.com</span></a></p>
                        <hr></hr>
                        <p className="contact-label">LinkedIn</p>
                        <p><a href="linkedin.com/amandasimonds"><span style={{color:"white"}}>linkedin.com/amandasimonds</span></a></p>
                        <hr></hr>
                    </Cell>
                   
                    <Cell col={6} style={{border:"", paddingLeft:"20px"}}>
                    <span className="email-label">
                        <i className="far fa-envelope" style={{fontSize:"4em"}}></i></span>
                        <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <FormGroup>
                                <Label className="form-label" for="email">YOUR EMAIL</Label>
                                <Input type="email" name="email" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                            </FormGroup>
                            <FormGroup>
                            <Label className="form-label" for="textArea">YOUR MESSAGE</Label>
                            <Input type="textarea" name="text" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
                            </FormGroup>
                            <Button type="submit">Send</Button>
                        </Form>
                    </Cell>

                    
                </Grid>
            </div>
        )
    }

    onEmailChange(event){
        this.setState({email:event.target.value})
    }

    onMessageChange(event){
        this.setState({message:event.target.value})
    }
}

export default Contact;
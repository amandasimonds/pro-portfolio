import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import {Form, FormGroup, Label, Input, Button} from "reactstrap"

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state= {
            email:"",
            message:""
        }
    }

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
                        <i class="far fa-envelope" style={{fontSize:"4em"}}></i></span>
                        <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <FormGroup>
                                <Label className="form-label" for="email">YOUR EMAIL</Label>
                                <Input type="email" name="email" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                            </FormGroup>
                            <FormGroup>
                            <Label className="form-label" for="textArea">YOUR MESSAGE</Label>
                            <Input type="textarea" name="text" id="messageText" value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
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
        this.setState.apply({message:event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
    }
}

export default Contact;
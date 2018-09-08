import React, { Component } from "react";
import "./apiContact.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import Btn from "../../components/btn";
import FormInput from "../../components/formInput";
import ApiBody from "../../components/apiBody";

class ApiContact extends Component {
    constructor() {
        super();
        this.state = {
           username: '',
           email: '',
           comment: ''
        };
     }
     onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        console.log(state);
        this.setState(state);
     }
  
     onSubmit = (e) => {
        e.preventDefault();
  
        const { username, email, comment } = this.state;
  
        axios.post('/routes/api/apiContact', { username, email, comment })
           .then((result) => {
              console.log("RESULT" + JSON.stringify(result))
              this.props.history.push("../apiContact")
              // pushes a new entry onto the history stack
           });
     }
    render() {
        const { username, email, comment } = this.state;
        return (
            <ApiBody label="Contact Us">
                <div className="apiForm">
                <FormInput className="apiContactNameField" label="Name:" type="text" name="username" change={this.onChange} value={username}/> 
                <FormInput className="apiContectEmailField" label="Email:" type="text" name="email" value={email} change={this.onChange} required/> 
                <FormInput className="apiContactCommentField" label="Comment:" type="textarea" name="comment" value={comment} change={this.onChange} required/> 
                </div>
                <div className="apiFormButton">
               <Btn className="apiContactBtn" label="Contact" />
                </div>
                </ApiBody>
        )
    }
}

export default ApiContact;
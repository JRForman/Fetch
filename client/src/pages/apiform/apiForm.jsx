import React, { Component } from "react";
import axios from 'axios';
import "./apiForm.css";
import Btn from "../../components/btn";
import FormInput from "../../components/formInput";
import { Link } from "react-router-dom";
import ApiBody from "../../components/apiBody";


class ApiForm extends Component {
    constructor() {
        super();
        this.state = {
           username: '',
           password: '',
           email: '',
           company: '',
           usage: ''
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
  
        const { username, email, password, company, usage } = this.state;
  
        axios.post('/routes/api/apiForm', { username, email, password, company, usage })
           .then((result) => {
              console.log("RESULT" + JSON.stringify(result))
              this.props.history.push("../apiDashboard")
              // pushes a new entry onto the history stack
           });
     }
    render() {
        const { username, email, password, company, usage } = this.state;
        return (
            <ApiBody label="form">
                <div className="apiForm" onSubmit={this.onSubmit}>
                <FormInput className="apiNameField" label="Name:" type="text" name="username" change={this.onChange} value={username}/> 
                <FormInput className="apiEmailField" label="Email:" type="text" name="email" value={email} change={this.onChange} required/> 
                <FormInput className="apiPasswordField" label="Password:" type="text" name="password" value={password} change={this.onChange} required/> 
                <FormInput className="apiCompanyField" label="Company:" type="text" name="company" value={company} change={this.onChange} required/> 
                <FormInput className="apiUsageField" label="Usage:" type="text" name="usage" value={usage} change={this.onChange} required/> 
                </div>
                <div className="apiFormButton">
                <Link to='/apiDashboard'><Btn className="apiSubmitBtn" label="Submit" /></Link>
                </div>
                </ApiBody>
        )
    }
}

export default ApiForm;
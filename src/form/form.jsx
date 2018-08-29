import React from "react";
import "./form.css";
import btn from "./components/btn";

const form = props => (
    <form class="memberForm">
    <div class="form-group">
   <label for="exampleFormControlFile1">Profile Photo</label>
   <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
   <button type="submit" class="btn btn-default" id="photoButton">Choose File</button>
</div>
       <div class="form-group" id="name">
           <label for="exampleInputEmail1">Name</label>
           <input type="text" class="form-control" id="name" placeholder="Jane Foster"></input>
           </div>
       <div class="form-group" id="email">
           <label for="exampleInputEmail1">Email address</label>
           <input type="email" class="form-control" id="email-input" placeholder="Email"></input>
           </div>
       <div class="form-group" id="password">
           <label for="exampleInputPassword1">Password</label>
           <input type="password" class="form-control" id="password-input" placeholder="Password"></input>
           </div>
       <div class="form-group" id="petName">
           <label for="exampleInputPassword1">Pet Name</label>
           <input type="text" class="form-control" id="pet-name" placeholder="Cat Benatar"></input>
           </div>
       <div class="form-group" id="zipCode">
           <label for="exampleInputPassword1">Zip Code</label>
           <input type="text" class="form-control" id="zip-code" placeholder="90210"></input>
           </div>
       <div style="display: none" id="alert" class="alert alert-danger" role="alert">
           <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
           <span class="sr-only">Error:</span>
           <span class="msg"></span>
       </div>
   </form>
);

export default form;
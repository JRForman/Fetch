import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Text, Checkbox, Option, Scope, TextArea } from 'informed';

const FormInput = (props) => (
	<Form id="complex-form">
	<label htmlFor="complex-name">Name:</label>
	<Text field="name" id="complex-name" />

	<label htmlFor="complex-email">Email:</label>
	<Text field="email" id="complex-email" />

	<label htmlFor="complex-password">Password:</label>
	<Text field="password" id="complex-password" />

	<Scope scope="pets">
	  <label htmlFor="complex-petName">Pet Name(s):</label>
	  <Text field="petName" id="complex-petName" />
	  <label htmlFor="checkbox-selectedPets">Type of Pets:</label>
  	  <Checkbox field="selectedPets" id="checkbox-selectedPets" 
		field="status"
		multiple>
		  <Option value="dog">Dog</Option>
		  <Option value="cat">Cat</Option>
		  <Option value="bird">Bird</Option>
		  <Option value="horse">Horse</Option>
		  <Option value="reptile">Reptile</Option>
		  <Option value="fish">Fish</Option>
		  <Option value="smallPet">Small Pets</Option>
		</Checkbox>
	</Scope> 

	<label htmlFor="complex-zipCode">Zip Code:</label>
	<Text field="zipCode" id="complex-zipCode" />

	<label htmlFor="complex-favLoc">Favorite Locations:</label>
	<Text field="favLoc" id="complex-favLoc" />

	<Scope scope="photo">
	<label htmlFor="complex-photo">Profile Photo:</label>
	<Text field="photo" id="complex-photo" />
	<button type="search">Upload</button>
	</Scope> 

	<label htmlFor="complex-company">Company Name:</label>
	<Text field="comapny" id="complex-company" />

	<label htmlFor="complex-usage">API Key Usage:</label>
	<Text field="usage" id="complex-usage" />

	<label htmlFor="textarea-comment">Comment:</label>
  	<TextArea field="comment" id="textarea-comment" />

	<label htmlFor="complex-search">Search:</label>
	<Text field="search" id="complex-search" />

	{/* <button type="submit">Submit</button> */}
  </Form>
)
export default FormInput;
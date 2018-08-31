import React from "react";

const FormInput = props => ( 
    <div className="form-group">
    <label className="form-label">{props.title}</label>
    <input
      className="form-input"
      name={props.name}
      email={props.email}
      password={props.password}
      petName={props.petName}
      zipCode={props.zipCode}
      favLoc={props.favLoc}
      photo={props.photo}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder} />
  </div>
    
)


SingleInput.propTypes = {  
    inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
    title: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    controlFunc: React.PropTypes.func.isRequired,
    content: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
    placeholder: React.PropTypes.string,
  }
  
export default FormInput;
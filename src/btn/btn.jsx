import React from "react";
import "./btn.css";

const btn = props => (
<div className="buttons">
<div className="logInButton" role="button" aria-label="click item" onClick={() => props.imageSelected(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }} />
</div>
);

export default btn;
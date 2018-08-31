import React from "react";
import "./404.css";
import HomeBtn from "./components/btn";

const Error = props => (
  <div className="errorPage">
    <h1 className="errorLine1">Ohh...</h1>
    <h1 className="errorLine2">Excuse us.</h1>
    <h2 className="errorLine3">We will get back to work now.</h2>
    <div className="errorHome"> {props.HomeBtn}</div>
  </div>
);
  // render(Error) {
  //   return (
  //     <Error />
  //   );
  // };
export default Error;

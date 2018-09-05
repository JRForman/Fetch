import React, { Component } from "react";
import "./main.css";
import Header from "../header";
import Footer from "../footer";
import Map from "../map";
import Results from "../results";
import CollNavBar from "../navBar";
import { Link } from "react-router-dom";

class Main extends Component {
    render() {
      return (
<div className="main">
        <Header />
        <CollNavBar />
        <Map />
        <Results />
        <Footer />
</div>
)
      }
    }

export default Main;
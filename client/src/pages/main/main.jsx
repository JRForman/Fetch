import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Map from "../../components/map";
import Results from "../../components/results";
import CollNavBar from "../../components/navBar";
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
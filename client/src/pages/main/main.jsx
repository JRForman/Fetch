import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Map from "../../components/map";
import Results from "../../components/results";
import CollNavBar from "../../components/navBar";


class Main extends Component {
    render() {
      return (
<div className="mainPage">
        <div className="mainHeaderDiv"><Header /></div>
        <div className="mainMapDiv"><Map /></div>
        <div className="mainResultsDiv"><Results /></div>
        <div className="mainFooterDiv"><Footer /></div>       
</div>
)
      }
    }

export default Main;
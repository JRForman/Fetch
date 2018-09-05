import React from "react";
import "./api.css";
import Btn from "../btn";
import { Link } from "react-router-dom";


class ApiWelcome extends Component {
    render() {
      return (
<div className="apiWelcomePage">
<h1 ClassName="welcomeTitle">Fetch Developer Portal</h1>
<div className="apiWelcomeButton">
<Link to='/#apidocumentation'><Btn onClick={this.handleFormSubmit}
                type="submit">Enter</Btn>
            </Link>
</div>
</div>

)
    }
}

export default ApiWelcome;
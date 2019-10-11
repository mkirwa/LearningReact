import React, { Component } from "react";
import FormSearch from "../formsearch";
import NavBarAdmin from "./navbaradmin";
import Allcomponents from "../allcomponents";
import { Button } from "react-bootstrap";
import Counter from "../counter";

//import "./App.css";

//from this page, I will be adding users.
//Add drivers
//Add dispatch
//add admin
//

class Admin extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
      </div>
    );
  }
}

export default Admin;

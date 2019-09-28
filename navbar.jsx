import React, { Component } from "react";
import FormSearch from "./formsearch";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand mr-auto mr-lg-0" href="#">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Loads<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                View Users
              </a>
            </li>

            <li className="dropdown-menu" id="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Add User
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="">
                  Driver
                </a>
                <a className="dropdown-item" href="">
                  Accountant
                </a>
                <a className="dropdown-item" href="">
                  Dispatch
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
        <FormSearch
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </nav>
    );
  }
}

export default NavBar;
//Stateless Functional Component
//const NavBar = ({totalCounters}) =>{
//return (
// <nav className="navbar navbar-light bg-light">
// <a className="navbar-brand" href="#">
// Navbar <span className="badge badge-pill badge-secondary">
//{totalCounters}</span>
//</a>
//</nav>
///);
//};

//export default NavBar;

//<MenuItem value="firstName" primaryText="First Name"/>
//<MenuItem value="lastName" primaryText="Last Name"/>
//<MenuItem value="email" primaryText="Email"/>
//<MenuItem value="password" primaryText="Password"/>

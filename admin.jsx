import React, { Component } from "react";
class Admin extends Component {
  state = {};
  render() {
    return (
      <div>
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
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Loads<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Users
                </a>
              </li>

              <li className="nav-item dropdown">
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
                  <a className="dropdown-item" href="">
                    Admin
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
          <div className="content"></div>
        </nav>
      </div>
    );
  }
}

export default Admin;

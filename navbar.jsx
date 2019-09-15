
import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                </ul>
                
            </div>
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

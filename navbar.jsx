
import React, { Component } from 'react';



class NavBar extends Component {
    
    render() { 
        return ( 
            
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a class="navbar-brand mr-auto mr-lg-0" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Loads<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">View Users</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Add User
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Driver</a>
                    <a class="dropdown-item" href="#">Accountant</a>
                    <a class="dropdown-item" href="#">Dispatch</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                </ul>
            </div>
            
            <form inline>
                <button variant="outline-info">Search</button>
                <button class="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Search</button>
            </form>

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

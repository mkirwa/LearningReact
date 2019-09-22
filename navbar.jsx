
import React, { Component } from 'react';
import formsearch from './formsearch';



class NavBar extends Component {
    constructor(props){
        super(props)
        this.state={
         fullName:null
        }
    }
    //this is where you run your API calls
     handleSubmit = (event) =>{
         event.preventDefault()
         const data = this.state
     }
 
     handleInputChange = (event) =>{
         event.preventDefault()
         this.setState({[event.target.name]:event.target.value})
     }
    
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

            <form class="form-inline my-2 my-lg-0">
            
                <input class="form-control mr-sm-2" type="text" placeholder="search" aria-label="search" name='fullName' onChange="this.handleInputChange">
                    <div pseudo="placeholder">Search</div>
                    <div contentEditable="plaintext-only"></div>
                </input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
               
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

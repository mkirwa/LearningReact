import React, { Component } from 'react';

class formsearch extends Component {
   
    handleSubmit = () =>{

    }

    handleInputChange = () =>{
        
    }
    render() { 
        return ( 
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="search" aria-label="search">
                    <div pseudo="placeholder">Search</div>
                    <div contentEditable="plaintext-only"></div>
                </input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
         );
    }
}
 
export default formsearch;
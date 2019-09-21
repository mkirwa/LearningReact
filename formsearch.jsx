import React, { Component } from 'react';

class formsearch extends Component {
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
        const {search} = this.state
        return ( 
        <div>
            <form onSubmit={this.handleSubmit} class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="search" aria-label="search" name='fullName' onChange="this.handleInputChange">
                    <div pseudo="placeholder">Search</div>
                    <div contentEditable="plaintext-only"></div>
                </input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
         );
    }
}
 
export default formsearch;
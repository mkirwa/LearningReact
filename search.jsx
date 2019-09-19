import React, { Component } from 'react';

class Search extends Component {
    state = { 

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
        //<div>
            //<form onSubmit={this.handleSubmit}>
                //<label>
                //Name:
                //<input type="text" value={this.state.value} onChange={this.handleChange} />
                //</label>
                //<input type="submit" value="Submit" />
            //</form>
        //</div>
        );
    }
}
 
export default Search;
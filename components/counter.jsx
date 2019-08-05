import React, { Component } from 'react';
//component class has methods that will be inherited in counter class
class Counter extends Component {
    state = {
        count:0, tags:['tag1','tag2','tag3']
    };
    
    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }


    render() { 
        //includes any data that this component needs 
        //it could have an address, a street property or anything this component needs 
        //const classes includes all the data that we will pass in span
        //start with primary classes that we want to have in all cases
        //this render method is about determing the class for this label
        
        return(
            <div>
                {this.renderTags()}
            </div>
            );
    }
    
}
 
export default Counter;
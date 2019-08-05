import React, { Component } from 'react';
//component class has methods that will be inherited in counter class
class Counter extends Component {
    state = {
        count:0, tags:['tag1','tag2','tag3']
    };
    
    render() { 
        //includes any data that this component needs 
        //it could have an address, a street property or anything this component needs 
        //const classes includes all the data that we will pass in span
        //start with primary classes that we want to have in all cases
        //this render method is about determing the class for this label
        
        return(
            <div>
                <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className = "btn btn-secondary btn-sm" >Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
            );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    //adding methods
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero":count;
    }
}
 
export default Counter;
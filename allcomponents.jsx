import React, {Component}from 'react';
//import the counter component from the folder ./counter
//this component is used by allcomponents
import Counter from './counter';

class Allcomponents extends Component {
    state = { 
        //instead of hard coding all the counters in the render method
        //div section, 
        //just use an array instead and render them using the map method
        //array will have counter objects
        //add a new property allcomponents
        // Use this to uniquely identify each
        //counter
        allcomponents:[
            //counter objects
            //we use id to uniquely identify each counter 
            //value property sets the intial value for each counter
            { id:1, value:4 },
            { id:2, value:0 },
            { id:3, value:0 },
            { id:4, value:0 },
        ]
     };
     
    handleDelete = (counterId)=>{
        const counters = this.state.allcomponents.filter(c => c.id !==counterId);
        this.setState({ allcomponents: counters})
    }

    render() { 
        return ( 
        //this div is the wrapper or the container for allcomponents
        //counter -- get each counter and map it to a counter component
        // set the key property to counter.id
        //value and selected will be the properties of that props object
        //key will not be part of that because it is a special attribute
        //for uniquely identify elements
        <div>
            {this.state.allcomponents.map(counter => 
            <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                counter={counter}
                />
                
            )}
        </div> 
        );
    }
}
 
export default Allcomponents;
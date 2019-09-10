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

    handleIncrement = counter =>{
        //creating a new counters array and giving it
        //to the set state method and have react update 
        //the state
        //... this is the spread operator clones 
        //this.state.allcomponents
        //with these, you will get a new array of counters
        //the object in the new array(counters) are the same
        //objects we have in allcomponents
        const counters = [...this.state.allcomponents]
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({allcomponents: counters});
    };
    
    handleReset = () =>{
        //this.state.allcomponents - this refers to the existing
        //counters 
        //we use the map method to get each counter and reset
        //its value to zero and then return it
        //this give you a new array of counters
        //You store them in counters. 
        //
        const counters = this.state.allcomponents.map(c=>{
            c.value = 0;
            return c;
        });
        //here you call this.setState with this new array
        this.setState({ allcomponents: counters})
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
            <button 
            onClick={this.handleReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.allcomponents.map(counter => 
            <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                onIncrement={this.handleIncrement}
                counter={counter}
                />
                
            )}
        </div> 
        );
    }
}
 
export default Allcomponents;
import React, {Component}from 'react';
//import the counter component from the folder ./counter
//this component is used by allcomponents
import Counter from './counter';

class Allcomponents extends Component {
    render() { 
        //Destructuring arguments

        return ( 
        //this div is the wrapper or the container for allcomponents
        //counter -- get each counter and map it to a counter component
        // set the key property to counter.id
        //value and selected will be the properties of that props object
        //key will not be part of that because it is a special attribute
        //for uniquely identify elements
        <div>
            <button 
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter => 
            <Counter 
                key={counter.id} 
                onDelete={this.props.onDelete} 
                onIncrement={this.props.onIncrement}
                counter={counter}
                />
                
            )}
        </div> 
        );
    }
}
 
export default Allcomponents;
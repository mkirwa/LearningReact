import React, {Component}from 'react';
import Counter from './counter';

class Allcomponents extends Component {
    state = { 
        //instead of hard coding all the counters in the render method
        //div section, 
        //just use an array instead
        // Use this to uniquely identify each
        //counter
        allcomponents:[
            {}
        ]
     };
    render() { 
        return ( 
        //this div is the wrapper or the container for allcomponents
        <div>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div> 
        );
    }
}
 
export default Allcomponents;
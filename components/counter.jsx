import React, { Component } from 'react';
//component class has methods that will be inherited in counter class
class Counter extends Component {
    state = {
        count:0,
        imageUrl: 'https://picsum.photos/200'
    };
    render() { 
        //includes any data that this component needs 
        //it could have an address, a street property or anything this component needs 
        return(
            <div>
                <img src={this.state.imageUrl} alt=""/>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
            );
    }
    //adding methods
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero":count;
    }
}
 
export default Counter;
import React, { Component } from 'react';
//component class has methods that will be inherited in counter class
class Counter extends Component {
    state = {
        count: 0
    };

    handleIncrement = () =>{
        //setState tells react we are updating the state upon being clicked
        //inside setState, you have to pass an object and the properties of 
        //that object. In this case count and this.state.count
        this.setState({count: this.state.count+1});
    }

    render() { 
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm">
                    Increment
                </button>
            </div>
            );
    }
    
    getBadgeClasses() {
        let classes = "badge m2 badge-";
        classes += this.state.count === 0? "warning" : "primary";
        return classes; 
    }
    formatCount(){
        const {count} = this.state;
     //You can also return a jsx expression here
       return count === 0 ? "Zero":count;
    }
 
}

 
export default Counter;

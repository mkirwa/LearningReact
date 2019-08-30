import React, { Component } from 'react';
//component class has methods that will be inherited in counter class
class Counter extends Component {
    state = {
        value: this.props.value
    };

    handleIncrement = (product) =>{
        //setState tells react we are updating the state upon being clicked
        //inside setState, you have to pass an object and the properties of 
        //that object. In this case value and this.state.value
        console.log(product);
        this.setState({value: this.state.value + 1});
    };
    
    render() { 
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={() => this.handleIncrement({id:1})} 
                className="btn btn-secondary btn-sm">
                    Increment
                </button>
            </div>
            );
    }
    
    getBadgeClasses() {
        let classes = "badge m2 badge-";
        classes += this.state.value === 0? "warning" : "primary";
        return classes; 
    }
    formatCount(){
        const {value} = this.state;
     //You can also return a jsx expression here
       return value === 0 ? "Zero":value;
    }
 
}

 
export default Counter;

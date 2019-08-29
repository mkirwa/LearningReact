import React, { Component } from 'react';
//component class has methods that will be inherited in counter class
class Counter extends Component {
    state = {
        count: 0
    };

    handleIncrement = () =>{
        console.log('Increment Clicked',this);
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

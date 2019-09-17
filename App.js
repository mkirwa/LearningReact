import React from 'react';
import NavBar from './components/navbar'
import Allcomponents from './components/allcomponents';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './App.css';

class App extends Allcomponents{

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
//1st lifecycle hooks 
constructor(props){
    super(props);
    console.log('App-Constructor', this.props);
}

//2nd lifecycle hooks
//called after the component is rendered into the DOM
//this is the perfect place to make Ajax calls to get data from the server

componentDidMount(){
  //ajax call
  //this.setState({ movies});
}

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

  render(){
    //render method
    console.log('App-rendered');
  return (
    <React.Fragment>
      <NavBar totalCounters={this.state.allcomponents.filter(c => c.value>0).length}/>
      <main className="container">
        <Allcomponents 
          counters={this.state.allcomponents}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          />
      </main>
    </React.Fragment>
  );
}
}
export default App;

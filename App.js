import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/navbar";
import AddUser from "./components/adduser";
import Dispatch from "./components/drivers";
import Drivers from "./components/drivers";
import Loads from "./components/loads";
import Users from "./components/users";
import Admin from "./components/admin";
import Allcomponents from "./components/allcomponents";
import FormSearch from "./components/formsearch";
import "./App.css";
import Accountant from "./components/accountant";
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

class App extends Allcomponents {
  state = {
    //instead of hard coding all the counters in the render method
    //div section,
    //just use an array instead and render them using the map method
    //array will have counter objects
    //add a new property allcomponents
    // Use this to uniquely identify each
    //counter
    allcomponents: [
      //counter objects
      //we use id to uniquely identify each counter
      //value property sets the intial value for each counter
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  //1st lifecycle hooks
  constructor(props) {
    super(props);
    console.log("App-Constructor", this.props);
  }

  //2nd lifecycle hooks
  //called after the component is rendered into the DOM
  //this is the perfect place to make Ajax calls to get data from the server

  componentDidMount() {
    //ajax call
    console.log("App-Constructor", this.props);
  }

  handleIncrement = counter => {
    //creating a new counters array and giving it
    //to the set state method and have react update
    //the state
    //... this is the spread operator clones
    //this.state.allcomponents
    //with these, you will get a new array of counters
    //the object in the new array(counters) are the same
    //objects we have in allcomponents
    const counters = [...this.state.allcomponents];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ allcomponents: counters });
  };

  handleReset = () => {
    //this.state.allcomponents - this refers to the existing
    //counters
    //we use the map method to get each counter and reset
    //its value to zero and then return it
    //this give you a new array of counters
    //You store them in counters.
    //
    const counters = this.state.allcomponents.map(c => {
      c.value = 0;
      return c;
    });
    //here you call this.setState with this new array
    this.setState({ allcomponents: counters });
  };

  handleDelete = counterId => {
    const counters = this.state.allcomponents.filter(c => c.id !== counterId);
    this.setState({ allcomponents: counters });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    //render method
    console.log("App-rendered");
    //const { search } = this.state;

    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.allcomponents.filter(c => c.value > 0).length
          }
        />

        <main className="container">
          <Allcomponents
            counters={this.state.allcomponents}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
        <div className="content">
          <Route path="/admin" component={Admin} />
          <Route path="/accountant" component={Accountant} />
          <Route path="/adduser" component={AddUser} />
          <Route path="/dispatch" component={Dispatch} />
          <Route path="/drivers" component={Drivers} />
          <Route path="/formsearch" component={FormSearch} />
          <Route path="/loads" component={Loads} />
          <Route path="/navbar" component={NavBar} />
          <Route path="/users" component={Users} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

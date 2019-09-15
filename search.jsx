import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {
    state = { 
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""

    }

    change = e => {
        // this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      validate = () => {
        let isError = false;
        const errors = {
          firstNameError: "",
          lastNameError: "",
          usernameError: "",
          emailError: "",
          passwordError: ""
        };
    
        if (this.state.username.length < 5) {
          isError = true;
          errors.usernameError = "Username needs to be atleast 5 characters long";
        }
    
        if (this.state.email.indexOf("@") === -1) {
          isError = true;
          errors.emailError = "Requires valid email";
        }
    
        this.setState({
          ...this.state,
          ...errors
        });
    
        return isError;
      };
    
      onSubmit = e => {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
          this.props.onSubmit(this.state);
          // clear form
          this.setState({
            firstName: "",
            firstNameError: "",
            lastName: "",
            lastNameError: "",
            username: "",
            usernameError: "",
            email: "",
            emailError: "",
            password: "",
            passwordError: ""
          });
        }
      };

    render() { 
        return ( 
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}
 
export default Search;
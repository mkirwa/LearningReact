import React, { Component } from "react";

class formsearch extends Component {
  //This is where you run your API calls to firebase

  render() {
    //this is where const {search } = this.state; was
    return (
      <div>
        <form onSubmit={this.handleSubmit} class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="search"
            aria-label="search"
            name="fullName"
            onChange="this.handleInputChange"
          >
            <div pseudo="placeholder">Search</div>
            <div contentEditable="plaintext-only"></div>
          </input>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default formsearch;

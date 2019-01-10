import React, { Component } from "react";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      title: "",
      price: "",
      description: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h2>
          Add Item {this.state.firstName} {this.state.lastName}
        </h2>
        <form className="form">
          <input
            value={this.state.firstName}
            name="title"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Title"
          />
          <input
            value={this.state.lastName}
            name="price"
            onChange={this.handleInputChange}
            type="number"
            placeholder="Price"
          />
          <input
            value={this.state.password}
            name="description"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Description"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

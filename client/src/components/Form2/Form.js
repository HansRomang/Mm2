import React, { Component } from "react";
import "./Form.css";
import API from '../../utils/API';
console.log("hi");
class Form extends Component {
  // Setting the component's initial state
  state = {
		users: [],
    username: "",
		password: "",
		email: ""
  };

  handleInputChange = event => {
		console.log('hit')
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
    if (!this.state.username || !this.state.password) {
      alert("Fill out your Username and Password");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.username}`);
		}
		
		API.createUser({
			username:this.state.username,
			password:this.state.password,
			email:this.state.email

		})

    this.setState({
			username: "",
			password: "",
			email: ""
    });
  };

  render() {
		console.log(this)
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
       <div className="col-6" style={{background: 'pink', margin: '0 auto'}}>
				<h2>
          Login 
        </h2>

        <form className="form" onSubmit={this.handleFormSubmit}>
				<div className="form-group">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />

					<br></br><br></br>

          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />

					<br></br><br></br>

          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />

					<br></br><br></br>

          <button type="submit">Submit</button>

					<br></br><br></br>
					</div>
        </form>
      </div>
		</div>
    );
  }
}

export default Form;

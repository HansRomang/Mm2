import React, { Component } from "react";
import "./Form.css";
import API from '../../utils/API';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SignUp from "../../pages/Sign-up"

class Form extends Component {
  // Setting the component's initial state
  state = {
		users: [],
    username: "",
		password: "",
		redirect: false
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
			window.location.reload();
    } else if (this.state.password.length < 6) {
      alert(
				`Try a different password ${this.state.username}`);
				window.location.reload();
		}
		
		API.getUser({
			username:this.state.username,
			password:this.state.password
		}).then(res => {
			console.log(res);
			this.props.handleAuthRes(res.data.user[0])
		})

    this.setState({
			username: "",
			password: ""
    });
  };

  render() {
		console.log(this)
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
				<br></br>
       <div className="col-6" style={{margin: '0 auto'}}>
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

					<br></br><br></br>

          <button className="btn btn-light" type="submit" onClick={this.props.login}>
						Login
					</button>

					<br></br><br></br>
					</div>
        </form>
				<Router>
					<div>
						<Route path="/sign-up" component={SignUp} />
						<a href="/sign-up">Sign Up</a>
					</div>
				</Router>
				<br></br>
      </div>
		</div>
    );
  }
}

export default Form;

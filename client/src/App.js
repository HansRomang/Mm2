import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AddAnItem from "./pages/Sell-an-item";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import About from './pages/About.js';
import SignUp from './pages/Sign-up';
import Navbar from './components/Navbar/Navbar';




class AppRouter extends Component {
	
	state = {
		authenticated: false,
		displayName: "",
		user: {}
	}

	handleAuthRes = (authObj) => {
		console.log(authObj)
		this.setState({
			authenticated:true,
			displayName: authObj.displayname,
			user: authObj
		})
	}

	handleAuthLogout = (authObj) => {
		console.log(authObj)
		this.setState({
			authenticated:false,
			displayName: "",
			user: {}
		})
	}

	render() {
		return (
			<Router>
				<React.Fragment>
					<Navbar 
						authenticated={this.state.authenticated} 
						displayName={this.state.displayName}
						handleAuthLogout={this.handleAuthLogout}
					/>
					<Route path="/" exact component={About} />
					<Route path="/login/" render={() => <Login handleAuthRes={this.handleAuthRes} />} />
					<Route path="/add-item/" component={AddAnItem} />
					<Route path="/marketplace" component={Marketplace} />
					<Route path="/sign-up" component={SignUp} />
				</React.Fragment>
			</Router>
		)
	}
}

export default AppRouter;

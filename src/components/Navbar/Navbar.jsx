import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			
			<nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="container">
			<Link className="navbar-brand" to="/">MarketMeet</Link>

			<div className="collapse navbar-collapse" id="containerNavbar">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/login">Login</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/add-item">Sell An Item</Link>
					</li>
				</ul>
				</div>
			</div>
		</nav>
			
		);
	}
}

export default Navbar
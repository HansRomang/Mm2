import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

	constructor(props) {
		super(props)
		console.log(props);
		
	};

	render() {
		return (
			
			<nav className="navbar navbar-nav navbar-light bg-faded rounded navbar-toggleable-md">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			<div className="container">
				<Link className="navbar-brand" to="/marketplace">MarketMeet</Link>

				<div className="collapse navbar-collapse" id="containerNavbar">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">About<span className="sr-only">(current)</span></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/login">Login</Link>
						</li>
						{
							this.props.authenticated &&
							<div>
								<li className="nav-item">
									<Link className="nav-link" to="/add-item">Sell An Item</Link>
								</li>
								<li className="nav-item">
									<button className="btn btn-light" onClick={this.props.handleAuthLogout}>
										Logout
									</button>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/">Signed in as: {this.props.displayName}</Link>
								</li>
							</div>
						}
					</ul>
				</div>
			</div>
		</nav>
			
		);
	}
}

export default Navbar

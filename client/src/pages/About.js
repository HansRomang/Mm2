import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Link } from 'react-router-dom';

class About extends Component {
	render() {
		return (
			<div>
				<Jumbotron title="About."/>
				<div className="container">
					<h2>Welcome to MarketMeet.</h2>
					<h3 style={{marginLeft:'20%', color:'#aabb'}}>What is Marketmeet?</h3>
					<p>A simple model for peer-to-peer exchange. </p>
					<p>To sell an item, sign in. </p>
					<button className="btn btn-light">
						<Link to="/marketplace">BROWSE!</Link>
					</button>
					<br></br><br></br>
					<h4 style={{color: "red"}}>Beware of Marketplace AD Fraud</h4>
					<ol style={{color:"red"}}>
						<li>
							<p>Phone number listed is wrong. </p>
						</li>
						<li>
							<p>Buyer or seller explains that they are currently out of the country or outside the intermountain area. </p>
						</li>
						<li>
							<p>Buyer offers to pay with a money order or cashiers check for significantly more than the asked for price. Seller asks to have money wired to them or payed via an online service and states that the item will require delivery. </p>
						</li>
						<li>
							<p>Buyer or seller requests unreasonable personal or financial information. </p>
						</li>
						<li>
							<p>Ad or offer is poorly written, generic, or strange sounding. </p>
						</li>
						<li>
							<p>Offer is simply too good to be true. </p>
						</li>
						<li>
							<p>Buyer or Seller says that MarketMeet will handle the transaction. MarketMeet is NEVER involved in any transaction between buyer and seller. Anyone who claims otherwise is a scammer. </p>
						</li>
					</ol>
				</div>
				<Footer />
			</div>
		)
	}
}

export default About;
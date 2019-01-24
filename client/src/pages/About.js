import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";
import Jumbotron from "../components/Jumbotron/Jumbotron";

class About extends Component {
	render() {
		return (
			<div>
				<Jumbotron title="About."/>
				<div className="container">
				<h2>Welcome to MarketMeet.</h2>
				<h3 style={{marginLeft:'20%', color:'#aabb'}}>What is Marketmeet?</h3>
				<p>A simple model for peer-to-peer exchange, MarketMeet allows users to upload items they wish to sell for other users to buy. Browse Items in the marketplace, or click the "Sell An Item" button in the top right hand corner to start selling.</p>
			</div>
			<Footer />
		</div>
		
		)
	}
}

export default About;
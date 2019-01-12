import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";
import Jumbotron from "../components/Jumbotron/Jumbotron";

class Home extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron title="Welcome."/>
				<div className="container">
				<h2>Welcome to MarketMeet.</h2>
				<h3>What is Marketmeet?</h3>
				<p>A simple model for peer-to-peer exchange, MarketMeet allows users to upload items they wish to sell for other users to see. Simply click the "Sell An Item" button in the top right hand corner to get started.</p>
				
			</div>
			<Footer />
		</div>
		
		)
	}
}

export default Home;
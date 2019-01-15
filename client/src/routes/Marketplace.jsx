import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";
import Jumbotron2 from "../components/Jumbotron2/Jumbotron2";

class Marketplace extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron2 title="The Market."/>
				<div className="container">
				<div className="itemdump">

				</div>
				
			</div>
			<Footer />
		</div>
		
		)
	}
}

export default Marketplace;
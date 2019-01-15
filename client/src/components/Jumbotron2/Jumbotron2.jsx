import React, { Component } from 'react';
import './Jumbotron2.css';

class Jumbotron2 extends Component {
	render() {
		return(
			<div className='jumbotron fluid'>
			
				<div className='container'>
				
					<h1 className='display-3'>{this.props.title}</h1>

					<p className='lead'>{this.props.subtitle}</p>
				</div>
			
			</div>
		)
	}
}

export default Jumbotron2
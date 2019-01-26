import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron2 from "../components/Jumbotron2/Jumbotron2";
import API from "../utils/API";
import {Col,Row,Container} from "../components/Grid";
import {List,ListItem} from "../components/List";

class Items extends Component {

	state = {
		item:{
			title: "superman",
			price: "400",
			description: "plane? bird? NO!",
			cloudUrl: "http://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box-300x300.jpg"
		},


	};

	componentWillMount() {
		API.getItem(window.location.href.split('items/')[1])
		.then(res => {
			console.log(res)
			this.setState({
				item: res.data
			})
		})
	};

	render() {
		return (
			<React.Fragment>
				<Container>
					<br></br>
					<Link to="/marketplace" >
						Back to Marketplace
					</Link>
					<br></br><br></br>
					<div  style={{border: '2px solid grey', borderRadius: '5px'}}>
						<Row>
							<Col size="md-6">
								<h2 style={{paddingLeft:'5%'}}>
									{this.state.item.title}
								</h2>
							</Col>
						</Row>
						<br></br>
						<Row>
							<Col size="md-6">
								<h5 style={{paddingLeft:'5%'}}>
									${this.state.item.price}
								</h5>
									<br></br>
								<h5 style={{paddingLeft:'5%'}}>
									{this.state.item.location}
									<hr></hr>
								</h5>
							</Col>
						</Row>
						<Row>
							<Col size="md-4"></Col>
							<Col size="md-4">
								<img src={this.state.item.cloudUrl}/>
							</Col>
							<Col size="md-4"></Col>
						</Row>
							<br></br><br></br>
						<Row>
							<Col size="md-12">
								<h6 style={{paddingLeft:'5%'}}>
									{this.state.item.description}
								</h6>
								<br></br><br></br>
							</Col>
						</Row>
					</div>
				</Container>
			</React.Fragment>
		)
	}
}

export default Items;
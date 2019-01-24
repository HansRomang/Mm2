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
			description: "plane? bird? NO!"
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
					<Row>
					{this.state.item.title}
					</Row>
					<Row>
						<Col size="md-6">{this.state.item.price}</Col>
						<Col size="md-6">{this.state.item.location}</Col>
					</Row>
					<Row>
						<Col size="md-4">Previous Button</Col>
						<Col size="md-4">Images</Col>
						<Col size="md-4">Next Button</Col>
					</Row>
					<Row>{this.state.item.description}</Row>
				</Container>
			</React.Fragment>
		)
	}
}

export default Items;
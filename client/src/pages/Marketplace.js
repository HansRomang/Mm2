import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron2 from "../components/Jumbotron2/Jumbotron2";
import API from "../utils/API";
import {Col,Row,Container} from "../components/Grid";
import {List,ListItem} from "../components/List";

class Marketplace extends Component {

	state = {
		items: [],
		title: "",
		price:"",
		description:""
	};

	 // When the component mounts, load all items and save them to this.state.items
	 componentDidMount() {
    this.loadItems();
	}
	
	 // Loads all items  and sets them to this.state.items
	 loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, title: "", price: "", description: "" })
      )
      .catch(err => console.log(err));
	};

	render() {
		return (

			<React.Fragment>
				<Container>
					<Row>
						<Jumbotron2 title="The Market."/>
					</Row>
					<Row>
						<Col size="md-12">
						{
							this.state.items.length ? (
							<List>
								{this.state.items.map(item => {
									return (
										<ListItem key={item._id}>
											<Link to={"/items/" + item._id}>
												<strong>
													{item.title} for {item.price}
												</strong>
											</Link>
										</ListItem>
									);
								})}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}
export default Marketplace;

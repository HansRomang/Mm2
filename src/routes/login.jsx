import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";
import Jumbotron2 from "../components/Jumbotron2/Jumbotron2.jsx";
import Form from '../components/Form2/Form.js';
import Logindiv from '../components/Logindiv/Logindiv';

class Login extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron2 title="Login." />
				<div className="container">
					<div className="row">
						<div className="col-6" style={{background: 'pink', margin: '0 auto'}}>

							<Form>

							</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
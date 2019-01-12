import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";

import Form from '../components/Form2/Form.js';

class Login extends Component {
  render() {
    return (
			<div>
			<Navbar />
			<div className="container">
			<div className="row">
			<div className="col-8">
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
import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Form from '../components/AddItemForm/Form.js';

class AddItem extends Component {
  render() {
    return (
			<div className="container" style={{textAlign: 'center'}}>
				<Form>
				</Form>
			</div>	
    );
  }
}

export default AddItem;
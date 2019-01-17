import React, { Component } from "react";
import API from "../../utils/API";
class Form extends Component {
  // Setting the component's initial state
  state = {
    items: [],
    title: "",
		price: "",
		description: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.title || !this.state.price) {
      alert("Please fill out more information before submitting!");
    } else {
      alert(`Thank you for adding your item "${this.state.title}"`);
		}
		
		API.createItem({
			title:this.state.title,
			price:this.state.price,
			description:this.state.description
		})

    this.setState({
      title: "",
      price: "",
      description: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div style={{margin: '0 auto'}}>
       
			 <div className="col-6" style={{margin: '0 auto', border: '2px solid grey', borderRadius: '5px'}}>	
			  <h2 style={{background: 'pink', margin: '0 auto'}}>
          Add Item {this.state.firstName} {this.state.lastName}
        </h2><br></br>
	
			 
			  <form className="form" style={{margin: '0 auto'}} onSubmit={this.handleFormSubmit}>
          <input
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Title"
          />
					<br></br><br></br>
          <input
            value={this.state.price}
            name="price"
            onChange={this.handleInputChange}
            type="number"
            placeholder="Price"
          />
					<br></br><br></br>
          <input
            value={this.state.description}
            name="description"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Description"
          />
					<br></br><br></br>
          <button type="submit">Submit</button>
        </form>
				</div>
      </div>
    );
  }
}

export default Form;

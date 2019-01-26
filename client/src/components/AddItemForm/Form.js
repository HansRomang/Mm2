import React, { Component } from "react";
import API from "../../utils/API";
import imageCompressor from "./imageCompressor";
import axios from 'axios';
class Form extends Component {
  // Setting the component's initial state
  state = {
    items: [],
    title: "",
		price: "",
		description: "",
		cloudPublicId:"",
		cloudUrl:"",
		assetToUploadSrc: "https://d30y9cdsu7xlg0.cloudfront.net/png/396915-200.png",
		assetToUpload: null,
		location: "",
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
		if(event){
			event.preventDefault();
		}
    if (!this.state.title || !this.state.price) {
      alert("Please fill out more information before submitting!");
    } else {
      alert(`Thank you for adding your item "${this.state.title}"`);
		}
		
		API.createItem({
			title:this.state.title,
			price:this.state.price,
			description:this.state.description,
			location:this.state.location,
			cloudUrl: this.state.cloudUrl,
			cloudPublicId: this.state.cloudPublicId
		}).then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		})

    this.setState({
      title: "",
      price: "",
			description: "",
			location: ""
    });
	};
	setImage = (e) => {
    if(this.overLimit){
      alert("Max assets reached. Delete an asset to upload something new.")
      return
    }
    if(!e.target.files[0]){return}
    let self = this
    this.setState({showLoadingModel:true, loadingModelHeader:"Optimizing..."})
    imageCompressor.handleImageUpload(e, function(img){
      // console.log(img)
      var reader = new FileReader();
      reader.onloadend = function() {
        self.setState({assetToUpload:reader.result})
      }
      reader.readAsDataURL(img);
      let src = window.URL.createObjectURL(img)
      self.setState({assetToUploadSrc:src, showLoadingModel:false, loadingModelHeader:null})
    })
    e.target.value = ''
	}
	sendImageToServer = () => {
    if(!this.state.assetToUpload){return}
    this.setState({showLoadingModel:true, loadingModelHeader:"Uploading..."})
    axios.post('/api/items/uploadAsset', {asset:this.state.assetToUpload}).then(res => {
			// if(res.data.message){alert(res.data.message)}
			this.state.cloudPublicId = res.data.image.public_id
			this.state.cloudUrl = res.data.image.url
			this.setState({assetToUploadSrc:"https://d30y9cdsu7xlg0.cloudfront.net/png/396915-200.png", assetToUpload: null, showLoadingModel:false, loadingModelHeader:null, })
			this.handleFormSubmit()
    }).catch(err => {
			console.log(err)
      alert("Could not process asset upload at this time.")
      this.setState({assetToUploadSrc:"https://d30y9cdsu7xlg0.cloudfront.net/png/396915-200.png", assetToUpload: null, showLoadingModel:false, loadingModelHeader:null})
    })
  }

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div style={{margin: '0 auto'}}>
       
			 <div className="col-6" style={{margin: '0 auto',marginTop:'5%', border: '2px solid grey', borderRadius: '5px'}}>	
			  <h2 style={{ margin: '0 auto'}}>
          Add Item {this.state.firstName} {this.state.lastName}
        </h2><hr></hr><br></br>
	
			 
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
					<input
            value={this.state.location}
            name="location"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Location"
          />
					<br></br><br></br>
					<div style={{display:'block', margin:"0 auto"}} className="user-asset-manager_one-asset user-asset-manager_new-asset-image">
            <form id="assetInput">
              <input name="asset" type="file" accept="image/*" onChange={(e) => this.setImage(e)} style={{position:"relative", width:"100%", height:"100%", opacity:"1.0", marginLeft:"30%"}}>
							</input>
							<img alt="uploadspace"style={{width:'25%', height:'25%'}} src={this.state.assetToUploadSrc}/>
            
            </form>
          </div>
					<br></br>
        </form>
					<button type="button" onClick={this.sendImageToServer}>Submit</button>
				</div>
      </div>
    );
  }
}

export default Form;

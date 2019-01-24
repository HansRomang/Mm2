const db = require("../models");
var cloudinary = require("cloudinary");
var keys = require("./../keys");

cloudinary.config(keys.cloudinary);

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Items
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Items
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
		console.log("hit")
    db.Items
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Items
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Items
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
	},
	uploadAsset: function(req, res){
    // console.log(req.body, req.file)
    // if(!req.session || !req.session.id){
    //   res.status(500).send(); return
    // }
    if(!req.body.asset){
      res.status(500).send({message:"There was an error recieving the media."}); 
      return 
    }
    cloudinary.v2.uploader.upload(req.body.asset, function(error, image) {
      if(error){ 
        console.log(error)
        res.status(500).send({message:error}); 
        return 
      }
			res.send({message:"Upload Done!", image:image})

    })
  },

  getAssets: function(req, res){
    const db = req.app.get('db')
    db.getImages([req.session.id]).then(assets => {
      res.status(200).send({
        assets:assets
      })  
    }).catch(err => {
      console.log(err)
      return res.status(500).send({message:err})
    })
  },

  deleteAsset: function(req, res){
    cloudinary.v2.uploader.destroy(req.body.public_id, function(error, result){
      if(error){
        console.log(error)
        res.status(500).send()
        return
      }
      const db = req.app.get('db')
      db.deleteImage([req.body.public_id]).then(response => {
        res.status(200).send({
          message:"Image Deleted.",
          success:true
        })
        return
      }).catch(err => {
        console.log(err)
        res.status(500).send()
        return
      })
    });
  }
};

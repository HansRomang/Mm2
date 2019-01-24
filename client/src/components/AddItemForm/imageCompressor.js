import imageCompression from './imageComp/index.js';

const imageCompressor = {
  handleImageUpload: function(event, cb) {
 
    var imageFile = event.target.files[0];
    var maxSizeMB = .05;
    var maxWidthOrHeight = 256; // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight
    imageCompression(imageFile, maxSizeMB, maxWidthOrHeight) // maxSizeMB, maxWidthOrHeight are optional
    .then(function (compressedFile) {  
      return cb(compressedFile);
    })
    .catch(function (error) {
      console.log(error.message);
    });
  }
}

export default imageCompressor;
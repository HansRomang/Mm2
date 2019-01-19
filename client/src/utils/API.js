import axios from "axios";

export default {
  // Gets all books
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the book with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a book to the database
  createItem: function(itemData) {
    return axios.post("/api/items", itemData);
	},
	getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  createUser: function(itemData) {
    return axios.post("/api/users", itemData);
	},
};

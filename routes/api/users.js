const router = require("express").Router();
const usersController = require("../../controllers/loginController");

// Matches with "/api/books"
router.route("/")
  .post(usersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(usersController.findById)

module.exports = router;

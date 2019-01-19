const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/books"
router.route("/")
	.post(loginController.create)
	.get(loginController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
	.get(loginController.findById)

module.exports = router;

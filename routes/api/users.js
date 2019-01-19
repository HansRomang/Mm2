const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/books"
router.route("/")
	.get(loginController.findAll)
	.post(loginController.create)
;

// Matches with "/api/books/:id"
router
  .route("/:id")
	.get(loginController.findById)

module.exports = router;

const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/books"
router.route("/")
	.get(loginController.findAll)
	.post(loginController.create)
;

router.route("/login")
.post(loginController.login)

// Matches with "/api/items/:id"
router
  .route("/:id")
	.get(loginController.findById)

module.exports = router;

const router = require("express").Router();
const bookRoutes = require("./books");
const itemRoutes = require("./items");
const userRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes);
router.use("/items", itemRoutes);
router.use("/users", userRoutes);

module.exports = router;

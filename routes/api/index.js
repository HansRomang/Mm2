const router = require("express").Router();
const bookRoutes = require("./books");
const itemRoutes = require("./items");


// Book routes
router.use("/books", bookRoutes);
router.use("/items", itemRoutes);

module.exports = router;

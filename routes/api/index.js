const router = require("express").Router();
const itemRoutes = require("./items");
const userRoutes = require("./users");

//routes
router.use("/items", itemRoutes);
router.use("/users", userRoutes);

module.exports = router;

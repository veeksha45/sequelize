const express = require("express");
const router = express.Router();
const userController = require("../controller/apiController");

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.delete("/:id", userController.deleteUser);

module.exports = router;

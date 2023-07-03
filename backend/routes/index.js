const express = require("express");
const authController = require("../controller/auth/authController");
const router = express.Router();

// <---------- USER ---------->
// register
router.post("/rgister", authController.register);
//  login
router.post("/login", authController.login);
// logout
// refresh

// <---------- BLOG ---------->
// create
//read all blogs
// rad blog by id
// update
// delete

// <---------- COMMENTS ---------->
// create comments
// read comments by blog id

module.exports = router;

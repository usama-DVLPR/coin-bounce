const express = require("express");
const authController = require("../controller/auth/authController");
const router = express.Router();
const baseUrl = process.env.BASE_URL;
// <---------- USER ---------->
// register
router.post(`${baseUrl}register`, authController.register);
//  login
router.post(`${baseUrl}login`, authController.login);
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

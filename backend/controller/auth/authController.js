// const Joi = require("joi");
const User = require("../../models/users");

const bsrypt = require("bcryptjs");
const authController = {
  async register(req, res, next) {
    const passwordMatch = req.body.password === req.body.confirmPassword;
    if (!passwordMatch) {
      const error = {
        code: "passwordMatch",
        message: "Password and confirm password did not match",
        status: 401,
      };
      return next(error);
    }

    try {
      const hashPassword = await bsrypt.hash(req.body.password, 10);
      const userToRegister = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });

      const user = await userToRegister.save();
      console.log(user);
      return res.status(201).json({ ststus: "success", user });
    } catch (error) {
      return next(error);
    }
  },
  async login() {},
};

module.exports = authController;

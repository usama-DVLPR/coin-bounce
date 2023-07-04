// const Joi = require("joi");
const User = require("../../models/users");
const bcrypt = require("bcryptjs");
const userDTO = require("../../dto/user");

const authController = {
  async register(req, res, next) {
    try {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      const userToRegister = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });

      const user = await userToRegister.save();
      const userDto = new userDTO(user);
      return res.status(201).json({ ststus: "success", data: { ...userDto } });
    } catch (error) {
      return next(error);
    }
  },
  async login(req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        const error = {
          status: 401,
          message: "Invalid user name or password",
        };
        return next(error);
      }
      const password = await bcrypt.compare(req.body.password, user.password);
      if (!password) {
        const error = {
          status: 401,
          message: "Invalid user name or password",
        };
        return next(error);
      }
      const userDto = new userDTO(user);
      return res.status(200).json({ ststus: "success", data: { ...userDto } });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;

const mongoose = require("mongoose");

const { Schema } = mongoose;

const passwordValidator = function (password) {
  if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
    throw new Error(
      "The password must contain at least one uppercase letter and one lowercase letter."
    );
  }
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: [30, "Maximum 30 characters are allowed in a name."],
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address.",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password must have at least 8 characters."],
      validate: [
        passwordValidator,
        "The password must contain at least one uppercase letter and one lowercase letter.",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

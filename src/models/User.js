const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    imgUrl: { type: String },
    name: String,
    passowrd: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);

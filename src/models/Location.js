const { Schema, model } = require("mongoose");

const locationSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Location", locationSchema);

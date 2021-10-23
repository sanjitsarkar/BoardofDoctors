const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema(
  {
    imgUrl: { type: String },
    name: {
      type: String,
      minlength: 5,
      required: [true, "Name is required"],
    },
    fee: Number,
    location: String,
    specialization: String,
    degree: String,
    isAvaliable: { type: Boolean, default: true },
    nextAvailability: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Appointment", appointmentSchema);

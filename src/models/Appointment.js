const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema(
  {
    imgUrl: { type: String },
    name: {
      type: String,
      minlength: 5,
      required: [true, "Name is required"],
    },
    fee: {
      type: Number,
      required: [true, "Fee is required"],
    },
    experience: {
      type: Number,
      required: [true, "Experience is required"],
    },
    locationId: {
      type: String,
      minlength: 3,
      required: [true, "LocationId is required"],
    },

    specializationId: {
      type: [String],
      minlength: 5,
      required: [true, "SpecializationId is required"],
    },

    degree: {
      type: [String],
      minlength: 2,
      required: [true, "Degree is required"],
    },
    isAvailable: { type: Boolean, default: true },
    nextAvailability: {
      type: String,
      minlength: 5,
      required: [true, "Next Availability is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Appointment", appointmentSchema);

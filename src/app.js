const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Appointment = require("./routers/appointmentRouter");
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/boardofdoctors",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    createIndexes: true,
    useFindAndModify: false,
  },
  (err, data) => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
);
app.use("/appointment", Appointment);
app.get("/", (req, res) => {
  res.send("Welcome");
});

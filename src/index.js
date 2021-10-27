const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const appointmentRouter = require("./routers/appointmentRouter");
const locationRouter = require("./routers/locationRouter");
const specializationRouter = require("./routers/specializationRouter");

const PORT = 5000;
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://xanjitxarkar:xanjitxarkar123@cluster0.gnwyn.mongodb.net/boardofdoctors?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Database connected!");
    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.use("/appointments", appointmentRouter);
app.use("/specializations", specializationRouter);
app.use("/locations", locationRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.post("/user", async (req, res) => {
  const { imgUrl, name } = req.body;
  const user = new User();
  const response = await user.save({ imgUrl, name });
  res.json(response);
});
